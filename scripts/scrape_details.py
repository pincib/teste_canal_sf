import urllib.request
import re
import json
from html import unescape

urls = [
    ("LO0222-PINC", "https://www.pinciara.com.br/imovel/loja-niteroi-225-m/LO0222-PINC?from=rent"),
    ("CA0318-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-370-m/CA0318-PINC?from=rent"),
    ("CA0324-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-4-quartos-170-m/CA0324-PINC?from=rent"),
    ("CA0339-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-3-quartos-500-m/CA0339-PINC?from=rent"),
    ("CA0176-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-250-m/CA0176-PINC?from=rent"),
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

full_data = []

for code, url in urls:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
    
    # Title
    t_match = re.search(r'<title>(.*?)</title>', html, re.I)
    raw_title = unescape(t_match.group(1).split('|')[0].strip()) if t_match else ""
    
    # Description meta
    d_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', html, re.I)
    meta_desc = unescape(d_match.group(1).strip()) if d_match else ""
    
    # Price
    price_match = re.search(r'R\$\s*([\d\.,]+)\s*/\s*m[êe]s', html, re.I)
    rent_price = f"R$ {price_match.group(1)} / mês" if price_match else "R$ Sob consulta"
    
    # IPTU
    iptu_match = re.search(r'IPTU\s*R\$\s*([\d\.,]+)', html, re.I)
    iptu = f"R$ {iptu_match.group(1)}" if iptu_match else ""
    
    # Area
    area_match = re.search(r'(\d+)\s*m[²2]', html, re.I)
    area = int(area_match.group(1)) if area_match else 0
    
    # Address
    addr_match = re.search(r'Avenida Presidente Roosevelt[^<"\n]+', html, re.I)
    address = addr_match.group(0).strip() if addr_match else "Avenida Presidente Roosevelt, São Francisco, Niterói - RJ"
    
    # All kenlo images
    # We want unique, large photos
    imgs = re.findall(r'https://(?:imgs?)\.kenlo\.io/[^"\'\s>]+\.jpg', html)
    unique_imgs = []
    for im in imgs:
        if im not in unique_imgs:
            unique_imgs.append(im)
            
    print(f"=== {code} ===")
    print(f"Title: {raw_title}")
    print(f"Rent: {rent_price} | IPTU: {iptu} | Area: {area}m²")
    print(f"Address: {address}")
    print(f"Total photos found: {len(unique_imgs)}")
    print("Top 5 photos:")
    for im in unique_imgs[:5]:
        print("  -", im)
        
    full_data.append({
        "code": code,
        "url": url,
        "title": raw_title,
        "metaDesc": meta_desc,
        "rent": rent_price,
        "iptu": iptu,
        "area": area,
        "address": address,
        "photos": unique_imgs[:5]
    })

with open("scripts/properties_scraped.json", "w", encoding="utf-8") as f:
    json.dump(full_data, f, ensure_ascii=False, indent=2)

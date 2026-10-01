import json

# Scrape detailed text from the 5 properties
import urllib.request, re
from html import unescape

urls = [
    ("LO0222-PINC", "https://www.pinciara.com.br/imovel/loja-niteroi-225-m/LO0222-PINC?from=rent", "loja-comercial-225m-roosevelt", "Loja Comercial de 225 m² com Vitrine Ativa"),
    ("CA0318-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-370-m/CA0318-PINC?from=rent", "casa-comercial-370m-roosevelt-1027", "Casa Comercial de 370 m² — Av. Pres. Roosevelt 1027"),
    ("CA0324-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-4-quartos-170-m/CA0324-PINC?from=rent", "casa-comercial-terreno-360m-roosevelt-133", "Casa Comercial com Terreno de 360 m² — Av. Pres. Roosevelt 133"),
    ("CA0339-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-3-quartos-500-m/CA0339-PINC?from=rent", "casa-comercial-500m-roosevelt-102", "Casa Comercial de 500 m² — Av. Pres. Roosevelt 102"),
    ("CA0176-PINC", "https://www.pinciara.com.br/imovel/casa-niteroi-250-m/CA0176-PINC?from=rent", "casa-comercial-250m-roosevelt-132", "Casa Comercial de 250 m² — Av. Pres. Roosevelt 132"),
]

props = []

for code, url, slug, custom_title in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
    matches = re.findall(r'https://(?:imgs?)\.kenlo\.io/([A-Za-z0-9_\-\+]+)\.jpg', html)
    unique_hashes = []
    for h in matches:
        if h not in unique_hashes:
            unique_hashes.append(h)
            
    top_5 = [f"https://img.kenlo.io/{h}.jpg" for h in unique_hashes[:5]]
    
    props.append({
        "code": code,
        "url": url,
        "slug": slug,
        "custom_title": custom_title,
        "photos": top_5
    })

with open("scripts/clean_top5_photos.json", "w", encoding="utf-8") as f:
    json.dump(props, f, ensure_ascii=False, indent=2)

print("Saved clean photos.")

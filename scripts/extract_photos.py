import urllib.request
import re
import json

urls = [
    "https://www.pinciara.com.br/imovel/loja-niteroi-225-m/LO0222-PINC?from=rent",
    "https://www.pinciara.com.br/imovel/casa-niteroi-370-m/CA0318-PINC?from=rent",
    "https://www.pinciara.com.br/imovel/casa-niteroi-4-quartos-170-m/CA0324-PINC?from=rent",
    "https://www.pinciara.com.br/imovel/casa-niteroi-3-quartos-500-m/CA0339-PINC?from=rent",
    "https://www.pinciara.com.br/imovel/casa-niteroi-250-m/CA0176-PINC?from=rent"
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

results = {}

for idx, url in enumerate(urls):
    code = url.split("?")[0].split("/")[-1]
    print(f"Fetching {code}: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read().decode("utf-8", errors="ignore")
            
            # Check for title
            title_match = re.search(r'<title>(.*?)</title>', content, re.I)
            title = title_match.group(1).strip() if title_match else ""
            
            # Check for json-ld or next data or state
            images = []
            
            # Try to find Next.js __NEXT_DATA__ or similar JSON
            json_matches = re.findall(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', content, re.DOTALL)
            if json_matches:
                try:
                    data = json.loads(json_matches[0])
                    print("Found __NEXT_DATA__")
                except Exception as e:
                    pass
            
            # Find all image links
            all_imgs = re.findall(r'https://[^"\'\s>]+\.(?:jpg|jpeg|png|webp)', content)
            unique_imgs = []
            for img in all_imgs:
                if img not in unique_imgs:
                    # filter out logos, icons, trackings
                    if any(bad in img.lower() for bad in ['logo', 'icon', 'favicon', 'facebook', 'google', 'analytics', 'avatar']):
                        continue
                    unique_imgs.append(img)
            
            results[code] = {
                "url": url,
                "title": title,
                "images": unique_imgs[:15]
            }
            print(f"[{code}] Found {len(unique_imgs)} candidate photos.")
            for im in unique_imgs[:5]:
                print(f"   -> {im}")
    except Exception as e:
        print(f"Failed {code}: {e}")

with open("scripts/extracted_properties.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Done. Saved to scripts/extracted_properties.json")

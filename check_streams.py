import json
import urllib.request
import urllib.error

# Calea către fișierul JSON cu posturi radio
JSON_FILE = "channels.json"

def check_stream(url):
    """Verifică dacă un stream radio este activ trimitând un request HTTP GET/HEAD."""
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) RadioDirectoryBot/1.0'}
    try:
        req = urllib.request.Request(url, headers=headers, method='GET')
        # Deschidem conexiunea cu timeout de 5 secunde și citim doar primii octeți pentru a testa fluxul
        with urllib.request.urlopen(req, timeout=5) as response:
            if response.status == 200:
                return True
    except Exception as e:
        print(f"Eroare la {url}: {e}")
    return False

def main():
    # Citim fișierul JSON
    try:
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            channels = json.load(f)
    except FileNotFoundError:
        print(f"Fișierul {JSON_FILE} nu a fost găsit.")
        return

    updated_count = 0

    # Verificăm fiecare canal din listă
    for channel in channels:
        url = channel.get("stream_url")
        name = channel.get("name", "Unknown")
        
        if not url:
            print(f"Canalul '{name}' nu are un 'stream_url' valid.")
            channel["active"] = False
            continue

        print(f"Se verifică: {name} ({url})...", end=" ")
        is_active = check_stream(url)
        
        if is_active:
            print("🟢 ACTIV")
            channel["active"] = True
        else:
            print("🔴 INACTIV")
            channel["active"] = False
            
        updated_count += 1

    # Salvăm rezultatele înapoi în fișierul JSON
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(channels, f, indent=2, ensure_ascii=False)

    print(f"\nVerificare completată! Au fost procesate {updated_count} canale.")

if __name__ == "__main__":
    main()

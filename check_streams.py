import json
import sys
import requests

def check_stream(url):
    try:
        # Facem un request HTTP de tip GET, dar oprim conexiunea repede 
        # (luăm doar primele bytes să vedem dacă serverul răspunde)
        response = requests.get(url, stream=True, timeout=5)
        if response.status_code == 200:
            return True
    except requests.RequestException:
        pass
    return False

def main():
    try:
        with open('channels.json', 'r', encoding='utf-8') as f:
            channels = json.load(f)
    except FileNotFoundError:
        print("Fișierul channels.json nu a fost găsit.")
        sys.exit(1)

    has_errors = False
    for channel in channels:
        url = channel.get("stream_url")
        name = channel.get("name")
        print(chid := f"Verificare: {name} ({url})... ", end="")
        
        is_active = check_stream(url)
        channel["active"] = is_active
        
        if is_active:
            print("OK [Activ]")
        else:
            print("EȘUAT [Inactiv]")
            has_errors = True

    # Salvăm starea actualizată înapoi în JSON
    with open('channels.json', 'w', encoding='utf-8') as f:
        json.dump(channels, f, indent=2, ensure_ascii=False)

    if has_errors:
        print("\nAtenție: Unele stream-uri sunt inactive!")

if __name__ == "__main__":
    main()

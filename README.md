# RetroBot 95

![Python](https://img.shields.io/badge/Python-3.12%2B-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-API-8E75B2?logo=googlegemini&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**RetroBot 95**, farklı "zamanlarda" ve evrenlerde yaşadığına inanan karakterlerle sohbet ettiğin, Windows 95 görünümlü bir sohbet robotudur. Arka planda Google Gemini yapay zekâsı çalışır; her dönemin kendi karakteri, kuralları ve arayüz teması vardır.

<!-- Ekran görüntüsü eklemek için: resmi docs/ klasörüne koy ve aşağıdaki satırın başındaki/sonundaki yorum işaretlerini kaldır -->
<!-- ![RetroBot 95 ekran görüntüsü](docs/ekran.png) -->

## Özellikler

| Dönem | Karakter | Ne yapar? |
| --- | --- | --- |
| **1996** | RetroBot 95 | Yılın 1996 olduğuna inanır. iPhone'dan bahsedersen bilim kurgu sanar; 56k modem, ICQ, Tamagotchi göndermeleri yapar. |
| **2030** | NEXUS | 2030'da yaşayan bir yapay zekâ yoldaşı. Hologram toplantılar, sürücüsüz araçlar onun için sıradan; disketi müzede görmüş gibi anlatır. |
| **Anime** | Hikari | Bir anime evreninde yaşayan neşeli bir arkadaş. 3 tema: *Sakura Bahçesi*, *Neon*, *Shōnen*. |
| **Gotik** | Vesper, Doom… | Kasvetli ama sıcak karakterler. 3 tema: *Klasik katedral*, *Metal*, *Fantastik*. |

- **Her dönemin kendi görünümü:** Windows 95 pencereleri, modern arayüz, düşen sakura yaprakları, kıvılcımlar, yarasalar…
- **Ziyaretçi defteri:** Siteye gelenler kısa not bırakabilir (sunucuda `notes.json` dosyasında tutulur).
- **Yedek model:** Ana Gemini modeli yoğunsa (503) ya da zaman aşımına uğrarsa otomatik olarak yedek modele geçer.
- **Anahtar olmadan da açılır:** API anahtarı girilmemişse site yine açılır, sohbet kısmı bunu nazikçe söyler.

## Gereksinimler

- **Python 3.12 veya üstü** → [python.org/downloads](https://www.python.org/downloads/)
  Windows'ta kurarken ilk ekrandaki **"Add python.exe to PATH"** kutusunu işaretle.
- **Ücretsiz bir Google Gemini API anahtarı** → [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
  Google hesabınla gir, *Create API key* düğmesine bas, çıkan anahtarı kopyala.

## Kurulum ve çalıştırma

### 1. Projeyi indir

**Git ile:**

```bash
git clone https://github.com/Voynichh/RetroChatbot.git
cd RetroChatbot
```

**Git bilmiyorsan:** Bu sayfanın üstündeki yeşil **Code** düğmesine bas → **Download ZIP** → indirdiğin dosyaya sağ tıklayıp **Tümünü ayıkla** de.

### 2a. Windows — kolay yol (çift tıkla)

Klasördeki **`baslat.bat`** dosyasına çift tıkla. İlk çalıştırmada:

1. Sanal ortamı (`.venv`) oluşturur ve gerekli paketleri yükler (bir-iki dakika sürebilir).
2. `.env` dosyasını oluşturup Not Defteri'nde açar. `GEMINI_API_KEY=` satırına kendi anahtarını yaz, **kaydet ve kapat**.
3. Sunucuyu başlatır ve tarayıcıda **http://localhost:8000** adresini açar.

Sonraki seferlerde yine `baslat.bat`'a çift tıklaman yeterli. Kapatmak için siyah pencereyi kapat.

> Windows "Bilgisayarınız korundu" uyarısı verirse **Ek bilgi → Yine de çalıştır** de. Bu, internetten inen her `.bat` dosyası için gösterilen standart uyarıdır.

### 2b. Elle kurulum (Windows, macOS, Linux)

```bash
# Sanal ortam oluştur ve etkinleştir
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS / Linux:
source .venv/bin/activate

# Paketleri yükle
pip install -r requirements.txt

# Ayar dosyasını oluştur
copy .env.example .env      # Windows
cp .env.example .env        # macOS / Linux
```

`.env` dosyasını bir metin düzenleyiciyle açıp `GEMINI_API_KEY` satırına anahtarını yaz. Ardından:

```bash
python -m uvicorn main:app --port 8000
```

Tarayıcıda **http://localhost:8000** adresini aç.

## Ayarlar (`.env`)

| Değişken | Zorunlu | Açıklama |
| --- | --- | --- |
| `GEMINI_API_KEY` | Evet | Google AI Studio'dan aldığın anahtar. |
| `GEMINI_MODEL` | Hayır | Kullanılacak Gemini modeli. Hesabında hangi modeller var görmek için: `python list_models.py` |
| `GEMINI_FALLBACK_MODEL` | Hayır | Ana model yoğunken kullanılacak yedek model. |

> `.env` dosyası gizli anahtarını içerir ve `.gitignore` sayesinde GitHub'a **yüklenmez**. Anahtarını kimseyle paylaşma.

## Sorun giderme

| Sorun | Çözüm |
| --- | --- |
| `'python' is not recognized…` | Python kurulu değil ya da PATH'e eklenmemiş. Python'u yeniden kurup "Add python.exe to PATH" kutusunu işaretle. |
| Sohbette "GEMINI_API_KEY ayarlanmamış" yazıyor | `.env` dosyasına anahtarı yazıp kaydettiğinden emin ol, sonra sunucuyu kapatıp yeniden başlat. |
| Model bulunamadı / 404 hatası | `python list_models.py` ile hesabındaki modelleri listele, birini `.env`'deki `GEMINI_MODEL`'e yaz. |
| `Address already in use` / port dolu | 8000 portunu başka bir program kullanıyor. `--port 8001` ile başlatıp http://localhost:8001 adresini aç. |
| Gotik temanın yazı tipleri farklı görünüyor | Yazı tipleri Google Fonts'tan gelir; internet yoksa sistem yazı tiplerine düşer. |

## Proje yapısı

```
main.py            FastAPI uygulaması, karakter (sistem) promptları, /api/chat
notes.py           ziyaretçi defteri API'si (/api/notes)
list_models.py     hesabındaki Gemini modellerini listeler
frontend/          arayüz: index.html, app.js, content.js ve tema CSS dosyaları
baslat.bat         Windows için tek tıkla kurulum + başlatma
.env.example       ayar dosyası şablonu
```

## API

| Metot | Yol | Açıklama |
| --- | --- | --- |
| POST | `/api/chat` | `{ "message", "history", "era", "theme" }` alır, karakterin cevabını döner |
| GET / POST | `/api/notes` | Ziyaretçi defteri notlarını listeler / yeni not ekler |
| GET | `/api/health` | Sağlık kontrolü |

Otomatik API dokümantasyonu: sunucu çalışırken http://localhost:8000/docs

## Lisans

[MIT](LICENSE)

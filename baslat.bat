@echo off
rem RetroBot'u baslatir ve tarayicida acar.
rem Ilk calistirmada kurulumu kendisi yapar: sanal ortam, paketler ve .env dosyasi.
rem Kapatmak icin bu pencereyi kapat (ya da Ctrl+C).
cd /d "%~dp0"

if exist ".venv\Scripts\python.exe" goto paketler
echo Ilk calistirma: sanal ortam olusturuluyor...
py -3 -m venv .venv >nul 2>&1
if exist ".venv\Scripts\python.exe" goto paketler
python -m venv .venv
if exist ".venv\Scripts\python.exe" goto paketler
echo.
echo HATA: Python bulunamadi.
echo https://www.python.org/downloads/ adresinden Python 3.12 veya ustunu kur.
echo Kurulumun ilk ekraninda "Add python.exe to PATH" kutusunu isaretlemeyi unutma.
pause
exit /b 1

:paketler
.venv\Scripts\python.exe -c "import fastapi, uvicorn, dotenv, google.genai" >nul 2>&1
if not errorlevel 1 goto ayarlar
echo Gerekli paketler yukleniyor, bu bir-iki dakika surebilir...
.venv\Scripts\python.exe -m pip install --disable-pip-version-check -r requirements.txt
if not errorlevel 1 goto ayarlar
echo.
echo HATA: Paketler yuklenemedi. Internet baglantini kontrol edip tekrar dene.
pause
exit /b 1

:ayarlar
if exist ".env" goto baslat
copy ".env.example" ".env" >nul
echo.
echo .env dosyasi olusturuldu ve Not Defteri'nde aciliyor.
echo GEMINI_API_KEY= satirina kendi anahtarini yaz, KAYDET ve Not Defteri'ni kapat.
echo Ucretsiz anahtar: https://aistudio.google.com/apikey
notepad ".env"

:baslat
echo.
echo RetroBot baslatiliyor... Adres: http://localhost:8000
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:8000"
.venv\Scripts\python.exe -m uvicorn main:app --port 8000
pause

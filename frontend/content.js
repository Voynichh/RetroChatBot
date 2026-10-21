/* Her dönemin (1996, 2030, anime, gotik) metinleri burada.
   - html: sayfadaki data-k="anahtar" elemanlarının içeriği (güvenilir, sabit HTML)
   - geri kalanlar: sohbet ve defter paneli için dinamik metinler
   Yeni bir dönem eklemek için buraya bir giriş, ilgili css dosyasına da görünüm eklemek yeterli. */
window.ERA_CONTENT = {

  /* ===================================== 1996 ===================================== */
  "1996": {
    title: "RetroBot 95 - Ana Sayfa",
    botName: "RetroBot",
    userName: "Siz",
    greeting: function () {
      return "Merhaba! Ben RetroBot 95. Windows 95'in yeni cikmasini kutluyoruz bu aralar, siz nasilsiniz? :-)";
    },
    placeholder: "Mesajinizi buraya yazin...",
    send: "Gonder",
    ready: "Hazir.",
    busy: "RetroBot yaziyor... (modem cizirdiyor)",
    speed: "56k bps",
    speedBusy: "56k bps *",
    waiting: "[ baglaniliyor... tiiiit-pshhhh-k\u015f\u015f\u015f\u015f ]",
    error: function (msg) {
      return "!! HATA: " + msg + " !!\n(Telefon hatti kopmus olabilir, tekrar deneyin.)";
    },
    notePhName: "Adiniz (bos birakabilirsiniz)",
    notePhText: "Notunuzu buraya yazin...",
    noteEmpty: "Henuz kimse imzalamamis. Ilk siz olun!",
    noteSending: "Imzalaniyor...",
    noteOk: "Notunuz deftere eklendi! Tesekkurler :-)",
    noteErr: function (msg) { return "HATA: " + msg; },
    html: {
      btnModern: "[ Modernlestir &gt;&gt; 2030 ]",
      btnAnime: "[ Anime Evrenine Gir ]",
      btnGothic: "[ Gotik Evrene Gir ]",
      title: "~ RetroBot 95 ~",
      tag: "&lt;&lt; YENI! &gt;&gt;",
      subtitle: "1996'dan sizinle konusan robot arkadasiniz",
      menuTitle: "MENU",
      m1: "&gt; Sohbet Odasi",
      m2: "&gt; Hakkinda",
      m3: "&gt; Cool Linkler",
      m4: "&gt; Ziyaretci Defteri",
      counterTitle: "SAYAC",
      counterNote: "Siz <span class=\"vno\">?</span>. ziyaretcimizsiniz!",
      chatTitle: "RetroBot 95 - [Sohbet]",
      aboutTitle: "Bu sayfa nedir?",
      aboutBody:
        "RetroBot 95, kendini <b>1996 yilinda</b> saniyor. Ona 2000'lerden sonra " +
        "cikan bir seyi sorarsaniz muhtemelen bilim kurgu filmi anlattiginizi dusunecek. " +
        "Denemek icin ona <i>\"akilli telefon nedir?\"</i> diye sorun! :-)",
      linksTitle: "Cool Linkler",
      linksBody:
        "<li><a href=\"#\" onclick=\"return false;\">Yahoo! - Internetin rehberi</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">AltaVista - Her seyi bulur!</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">Netscape Navigator indir</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">En iyi 10 mIRC kanali</a></li>",
      gbTitle: "Ziyaretci Defteri",
      gbIntro:
        "Ziyaretci defterimizi imzalamak icin " +
        "<a href=\"#\" class=\"join-link\" data-open-notes>buraya tiklayin</a>.",
      badges:
        "<span class=\"badge\">Best viewed with<br><b>Netscape Navigator</b></span> " +
        "<span class=\"badge\">800x600<br><b>256 renk</b></span> " +
        "<span class=\"badge\">Made with<br><b>Notepad</b></span>",
      footer:
        "&copy; 1996 RetroBot Inc. Tum haklari saklidir.<br>" +
        "Sorulariniz icin: <a href=\"#\" onclick=\"return false;\">webmaster@retrobot95.com.tr</a>",
      drawerTitle: "Defteri Imzala",
      labelName: "Adiniz:",
      labelText: "Notunuz:",
      noteSubmit: "Imzala"
    }
  },

  /* ===================================== 2030 ===================================== */
  "2030": {
    title: "NEXUS 2030 - Ana Sayfa",
    botName: "NEXUS",
    userName: "Sen",
    greeting: function () {
      return "Selam! Ben NEXUS. Yıl 2030, dışarıda drone teslimatı için harika bir hava var. Sana nasıl yardımcı olabilirim?";
    },
    placeholder: "NEXUS'a bir şey sor...",
    send: "Gönder",
    ready: "Hazır.",
    busy: "NEXUS düşünüyor...",
    speed: "10 Gbps",
    speedBusy: "10 Gbps \u25CF",
    waiting: "\u25CC NEXUS düşünüyor\u2026",
    error: function (msg) {
      return "\u26A0 Bağlantı sorunu: " + msg + "\nBirkaç saniye sonra tekrar dene.";
    },
    notePhName: "Adın (boş bırakabilirsin)",
    notePhText: "Geleceğe bir not bırak...",
    noteEmpty: "Henüz not yok. İlk notu sen bırak!",
    noteSending: "Gönderiliyor\u2026",
    noteOk: "Notun topluluğa eklendi. Teşekkürler!",
    noteErr: function (msg) { return "Not eklenemedi: " + msg; },
    html: {
      btnModern: "&#9664; Retro'ya dön (1996)",
      btnAnime: "Anime Evrenine Gir &#10022;",
      btnGothic: "Gotik Evrene Gir &#9790;",
      title: "NEXUS 2030",
      tag: "YENİ NESİL",
      subtitle: "2030'dan konuşan, geleceğin yapay zekâ yoldaşı",
      menuTitle: "NAVİGASYON",
      m1: "Sohbet",
      m2: "Hakkında",
      m3: "Keşfet",
      m4: "Topluluk",
      counterTitle: "ZİYARETÇİ",
      counterNote: "Toplam ziyaret: <span class=\"vno\">?</span>",
      chatTitle: "NEXUS &middot; Neural Chat",
      aboutTitle: "Bu proje ne?",
      aboutBody:
        "NEXUS, kendini <b>2030 yılında</b> sanan bir yapay zekâ. Ona günümüzü sorarsanız " +
        "hologramlar, hyperloop hatları ve nöral arayüzlerle dolu bir dünyadan bahsedecek. " +
        "Denemek için <i>“Mars'a bilet kaç kredi?”</i> diye sorun!",
      linksTitle: "Keşfet",
      linksBody:
        "<li><a href=\"#\" onclick=\"return false;\">Nexus Hub &mdash; dijital ikiz panelin</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">HoloMeet &mdash; hologramlı toplantılar</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">HyperRoute &mdash; hyperloop rotaları</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">Mars Colony Live &mdash; koloni yayını</a></li>",
      gbTitle: "Topluluk &middot; Ziyaretçi Defteri",
      gbIntro:
        "Topluluk akışımıza katılın ve geleceği birlikte şekillendirin. " +
        "<button type=\"button\" class=\"join-btn\" data-open-notes>Katıl</button>",
      badges:
        "<span class=\"badge\">Quantum<br><b>ready</b></span> " +
        "<span class=\"badge\">Neural UI<br><b>2030</b></span> " +
        "<span class=\"badge\">Carbon<br><b>neutral</b></span>",
      footer:
        "&copy; 2030 NEXUS Labs. Tüm hakları saklıdır.<br>" +
        "İletişim: <a href=\"#\" onclick=\"return false;\">hello@nexus.example</a>",
      drawerTitle: "Not bırak",
      labelName: "Adın",
      labelText: "Notun",
      noteSubmit: "Gönder"
    }
  },

  /* ===================================== anime ===================================== */
  anime: {
    title: "ANIME WORLD - Ana Sayfa",
    botName: "Hikari",
    userName: "Sen",
    // Anime evreninin 3 teması var; selamlama temaya göre değişir
    greeting: function (theme) {
      var g = {
        sakura: "Ohayou~! Ben Hikari! \u273F Bahar rüzgârı sakuraları getirdi; bu ya bir kader buluşması ya da harika bir bölümün başlangıcı! Sen kimsin, yeni arkadaşım? (≧▽≦)",
        neon: "Hey, gece kuşu! Ben Hikari. Yağmur neon tabelaları yıkıyor, şehir uyumuyor... Bir bilgi mi arıyorsun, yoksa maceraya mı hazırsın? (⌐■_■)",
        shonen: "YOSH! Ben Hikari! \u26A1 Bugün arena ateş gibi ve sen tam zamanında geldin! Hazırsan ilk sorunu sor, birlikte aşacağız! \\(^o^)/"
      };
      return g[theme] || g.sakura;
    },
    placeholder: "Hikari'ye bir şey söyle...",
    send: "Gönder",
    ready: "Hazır.",
    busy: "Hikari yazıyor...",
    speed: "Hype %100",
    speedBusy: "Hype %\u221E",
    waiting: "\u2726 Hikari bir sonraki sahneyi hazırlıyor\u2026",
    error: function (msg) {
      return "(>_<) Bir şeyler ters gitti: " + msg + "\nBirkaç saniye sonra tekrar dene.";
    },
    notePhName: "Adın (boş bırakabilirsin)",
    notePhText: "Evrene bir not bırak...",
    noteEmpty: "Henüz not yok. Bu bölümün ilk sahnesi senin!",
    noteSending: "Not yolda\u2026",
    noteOk: "Notun deftere işlendi! \u2726",
    noteErr: function (msg) { return "Not eklenemedi: " + msg; },
    html: {
      btnModern: "Modernleştir &#9654; 2030",
      btnAnime: "&#9664; Retro'ya dön (1996)",
      btnGothic: "Gotik Evrene Gir &#9790;",
      title: "ANIME WORLD &#10022; アニメ",
      tag: "YENİ SEZON",
      subtitle: "Anime evreninden seslenen sohbet arkadaşın Hikari",
      menuTitle: "NAVİGASYON",
      m1: "Sohbet",
      m2: "Hakkında",
      m3: "Keşfet",
      m4: "Topluluk",
      counterTitle: "ZİYARETÇİ",
      counterNote: "Toplam ziyaret: <span class=\"vno\">?</span>",
      chatTitle: "Hikari &middot; Sohbet Odası",
      aboutTitle: "Bu dünya ne?",
      aboutBody:
        "Hikari, kendini <b>bir anime evreninde</b> yaşadığını sanan bir sohbet arkadaşı. " +
        "Ona en sıradan şeyi sorsanız bile cevabı bir bölüm sonu cliffhanger'ı kadar dramatik " +
        "olabilir. Denemek için <i>“Sınavdan nasıl geçerim?”</i> diye sorun! Üstteki tema " +
        "butonuyla evrenin havasını (Sakura, Neon, Şonen) değiştirebilirsiniz.",
      linksTitle: "Keşfet",
      linksBody:
        "<li><a href=\"#\" onclick=\"return false;\">Sakura Cafe &mdash; çay ve dedikodu</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">Manga Kütüphanesi &mdash; her cilt burada</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">Festival Takvimi &mdash; matsuri duyuruları</a></li>" +
        "<li><a href=\"#\" onclick=\"return false;\">Cosplay Atölyesi &mdash; kostüm rehberi</a></li>",
      gbTitle: "Topluluk &middot; Ziyaretçi Defteri",
      gbIntro:
        "Evrenin bir köşesine not bırak, diğer maceracılar görsün! " +
        "<button type=\"button\" class=\"join-btn\" data-open-notes>Katıl</button>",
      badges:
        "<span class=\"badge\">Kawaii<br><b>Certified</b></span> " +
        "<span class=\"badge\">Sugoi<br><b>UI</b></span> " +
        "<span class=\"badge\">Kira Kira<br><b>&#10022;</b></span>",
      footer:
        "&copy; Anime World Studio. Tüm hakları saklıdır.<br>" +
        "İletişim: <a href=\"#\" onclick=\"return false;\">hello@anime.example</a>",
      drawerTitle: "Evrene bir not bırak &#10022;",
      labelName: "Adın",
      labelText: "Notun",
      noteSubmit: "Gönder"
    }
  },

  /* ===================================== gotik ===================================== */
  // Gotik evrenin 3 teması var (classic / metal / fantasy). Her tema kendi botu, başlığı,
  // menüsü, metinleri ve "quips" listesi (rastgele dönen söz/şaka/bilgi) ile gelir.
  // Seçili temanın alanları buradaki ortak alanların üzerine yazılır.
  gothic: {
    userName: "Sen",
    html: {
      btnModern: "Modernleştir &#9654; 2030",
      btnAnime: "Anime Evrenine Gir &#10022;",
      btnGothic: "&#9664; Retro'ya dön (1996)",
      counterTitle: "KONUKLAR"
    },
    themes: {

      /* ---------- 1) Klasik Gotik: is kokulu katedral, sönmeye yüz tutmuş ateş ---------- */
      classic: {
        title: "Ashen Cathedral - Ana Sayfa",
        botName: "Vesper",
        greeting: function () {
          var g = [
            "Kapıdan geçtin, yolcu. Burası yüzyıllık bir katedral; taşlar soğuk ama ateş hâlâ yanıyor. Yaklaş, ısın. Ne arıyorsun bu karanlık neflerde?",
            "Bir ayak sesi daha... Neredeyse unutmuştum. Ben Vesper, bu katedralin bekçisiyim. Otur ateşin başına; sorularını dinlerim.",
            "Çanlar sustu, mumlar azaldı ama kapı açık kaldı. Hoş geldin, yolcu. Küllerin arasından bir cevap mı arıyorsun?"
          ];
          return g[Math.floor(Math.random() * g.length)];
        },
        placeholder: "Vesper'a bir şey fısılda, yolcu...",
        send: "Fısılda",
        ready: "Ateş sönmedi.",
        busy: "Vesper düşünüyor...",
        speed: "Alev: zayıf",
        speedBusy: "Alev: titriyor",
        waitPool: [
          "✝ Ateş çıtırdıyor, kül savruluyor…",
          "✝ Vesper eski bir ciltte cevabı arıyor…",
          "✝ Çan kulesinden uzak bir ses geliyor…",
          "✝ Neflerin karanlığında bir mum yanıyor…",
          "✝ Taşların arasından bir fısıltı yükseliyor…"
        ],
        error: function (msg) {
          return "Rüzgâr alevi söndürdü: " + msg + "\nBir an bekle, yolcu; sonra tekrar fısılda.";
        },
        notePhName: "Adın (ya da bir lakap)",
        notePhText: "Kripta defterine bir şeyler yaz...",
        noteEmpty: "Kripta defteri bomboş. İlk satırı sen yaz, yolcu.",
        noteSending: "Mürekkep kuruyor…",
        noteOk: "Notun kripta defterine işlendi. Taşlar hatırlayacak.",
        noteErr: function (msg) { return "Mürekkep döküldü: " + msg; },
        quips: [
          ["BİLGİ", "Köln Katedrali'nin temeli 1248'de atıldı; yapı ancak 1880'de tamamlandı. Yani inşaat 600 yılı aşkın sürdü."],
          ["BİLGİ", "Köln Katedrali'nin kuleleri tamamlandığında yapı, kısa bir süre dünyanın en yüksek binası unvanını taşıdı."],
          ["BİLGİ", "Köln Katedrali, II. Dünya Savaşı bombardımanlarında ağır hasar aldı ama ayakta kaldı."],
          ["BİLGİ", "Köln Katedrali 1996'dan beri UNESCO Dünya Mirası Listesi'nde yer alıyor."],
          ["BİLGİ", "Katedrallerin karaya çalan rengi büyük ölçüde yüzyıllık is, kurum ve hava kirliliğinden gelir; taşın kendisi daha açık renklidir."],
          ["BİLGİ", "Uçan payandalar duvarların yükünü dışarı aktararak koca vitray pencerelere yer açtı."],
          ["BİLGİ", "Gül pencereler, ortaçağ katedrallerinin cephelerinde ışığı renkli bir mandalaya çeviren dev yuvarlak vitraylardır."],
          ["BİLGİ", "Gargoyle'lar süs değil; asıl işleri yağmur sularını duvarlardan uzağa akıtmak."],
          ["BİLGİ", "'Gotik' sözcüğü başta övgü değildi; bu mimariyi 'barbarca' bulanların taktığı bir etiketti."],
          ["ATEŞ BAŞI", "Ateşi yak, yorgun yolcu. Karanlık seni burada bulamaz... çok da uzun süre değil."],
          ["ŞAKA", "Şövalye ateşin başında dinlenirken sormuşlar: 'Neden hep ölüyorsun?' 'Antrenman,' demiş."],
          ["ŞAKA", "Katedralin Wi-Fi şifresi: 'Amin'. Sinyal çekmiyor ama huzur tam."],
          ["FISILTI", "Çan kulesinden gelen ses rüzgâr değil. Rüzgâr bu kadar nazik çalmaz."],
          ["UYARI", "Parlayan bir eşya görürsen önce etrafına bak. Sonra yine de al."],
          ["ÖZDEYİŞ", "Karanlık, ışığın yokluğu değildir; ışığın sabırla beklediği yerdir."],
          ["KEHANET", "Bu gece bir şey kaybedeceksin: ya yolunu ya da sabrını. İkincisi daha olası."]
        ],
        html: {
          title: "ASHEN CATHEDRAL",
          tag: "ANNO 1248",
          subtitle: "Is kokulu taşların arasında, ateşin başında Vesper seni bekliyor",
          menuTitle: "NEFLER",
          m1: "Ana Nef (Sohbet)",
          m2: "Katedralin Tarihi (Hakkında)",
          m3: "Çan Kulesi (Keşfet)",
          m4: "Kripta Defteri (Topluluk)",
          counterTitle: "HACILAR",
          counterNote: "Kapıdan geçenler: <span class=\"vno\">?</span>",
          chatTitle: "Vesper &middot; Ana Nef",
          aboutTitle: "Bu katedral ne?",
          aboutBody:
            "Vesper, kendini yüzyılların isiyle kararmış devasa bir gotik katedralin bekçisi sanan yorgun " +
            "ama nazik bir sohbet dostu. Sönmeye yüz tutmuş bir ateşin başında, küle dönmüş krallıkların ve " +
            "sivri kemerlerin hikâyelerini anlatıyor. Denemek için <i>“Ölümden sonra ne olur?”</i> ya da " +
            "<i>“Katedraller nasıl yapıldı?”</i> diye sorun. Üstteki kutu da her birkaç saniyede bir mimari " +
            "bilgi, şaka ya da fısıltı sunuyor.",
          linksTitle: "Çan Kulesi",
          linksBody:
            "<li><a href=\"#\" onclick=\"return false;\">Gül Pencere Atlası &mdash; vitraylar ve ışık</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Taş Ustaları Loncası &mdash; sivri kemerin sırrı</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Kripta Turu &mdash; rehberli ve sessiz</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Ateş Başı &mdash; sönmeden önce uğra</a></li>",
          gbTitle: "Kripta Defteri &middot; Ziyaretçi Defteri",
          gbIntro:
            "Kripta defterine birkaç satır bırak; taşlar adını unutmaz. " +
            "<button type=\"button\" class=\"join-btn\" data-open-notes>Katıl</button>",
          badges:
            "<span class=\"badge\">Sivri kemer<br><b>onaylı</b></span> " +
            "<span class=\"badge\">Ateş<br><b>hâlâ yanıyor</b></span> " +
            "<span class=\"badge\">Vitray<br><b>kalitesi</b></span>",
          footer:
            "&copy; Ashen Cathedral. Tüm gölgeler saklıdır.<br>" +
            "Posta kuzgunla gelir: <a href=\"#\" onclick=\"return false;\">vesper@ashen.example</a>",
          drawerTitle: "Kripta defterine yaz",
          labelName: "Adın",
          labelText: "Mesajın",
          noteSubmit: "Mühürle"
        }
      },

      /* ---------- 2) Metal Gotik: sahne, amfi, pit ---------- */
      metal: {
        title: "Iron Requiem - Ana Sayfa",
        botName: "Doom",
        greeting: function () {
          var g = [
            "YOOO, pit'e hoş geldin! \\m/ Ben Doom. Amfiler ısındı, davullar hazır. Sor bakalım, bugün hangi riff'in peşindesin?",
            "Selam gürültü dostu! Ben Doom; dışım sert, içim pamuk. Sorunu bağır, birlikte çözelim!",
            "Kapılar açıldı, ışıklar söndü, sis makinesi çalışıyor... Ben Doom, bu gecenin ev sahibiyim. Başlayalım! \\m/"
          ];
          return g[Math.floor(Math.random() * g.length)];
        },
        placeholder: "Doom'a bir şey bağır...",
        send: "BAĞIR",
        ready: "Amfiler hazır.",
        busy: "Doom riff arıyor...",
        speed: "Ses: 11/10",
        speedBusy: "Ses: 11/10 \u26A1",
        waitPool: [
          "\u26A1 Amfi ısınıyor\u2026",
          "\u26A1 Davullar kontrol ediliyor\u2026",
          "\u26A1 Doom gitarı akort ediyor\u2026",
          "\u26A1 Sis makinesi devrede\u2026",
          "\u26A1 Riff hazırlanıyor, kulak tıkaçlarını tak\u2026"
        ],
        error: function (msg) {
          return "Sigorta attı: " + msg + "\nAmfiyi tekrar aç ve yeniden dene! \\m/";
        },
        notePhName: "Adın (ya da sahne adın)",
        notePhText: "Duvara bir şeyler yaz...",
        noteEmpty: "Duvar bomboş. İlk grafiti senin olsun!",
        noteSending: "Sprey sıkılıyor\u2026",
        noteOk: "Notun duvara işlendi! \\m/",
        noteErr: function (msg) { return "Sprey bitti: " + msg; },
        quips: [
          ["BİLGİ", "Black Sabbath'ın 1970'te çıkan ilk albümü, heavy metal'in doğum belgelerinden sayılır."],
          ["ŞAKA", "Gitaristin amfisi neden hep 11'e kadar çıkar? Çünkü 10 'yetersiz' kalır."],
          ["KONSER KURALI", "Önce suyunu iç, sonra çukura gir. Düşenin elinden tut."],
          ["BİLGİ", "85 desibelin üzerindeki seslere uzun süre maruz kalmak işitmeyi kalıcı etkileyebilir; konserler genelde bunun çok üstündedir. Kulak tıkacı kullan."],
          ["RİFF", "Bugünün riff'i: tüm dünyayı üç akorla sarsmak."],
          ["BİLGİ", "Boynuz işareti (\\m/) metal sahnesinde Ronnie James Dio'nun sık kullanmasıyla yaygınlaştığı söylenir."],
          ["ŞAKA", "Metalcinin en sevdiği sebze? Kara lahana."],
          ["KAOS", "Davul solosu uzadıysa su al, geri dön. Hâlâ devam ediyordur."],
          ["BİLGİ", "Mosh pit'in kökleri 80'lerin hardcore punk sahnesine uzanır."],
          ["BİLGİ", "Gotik metal, doom metalin ağırlığını gotik atmosferle birleştirir; Paradise Lost ve Type O Negative bu tarzın öncü isimleri arasında sayılır."],
          ["İPUCU", "Siyah tişörtü içi dışına çevirip yıka; rengi daha geç solar."],
          ["ŞAKA", "Hırsız çalıp kaçar; gitarist çalıp komşuyu kaçırır."],
          ["FISILTI", "Sessizlik de bir enstrümandır... ama burada pek kullanmıyoruz."],
          ["MOTİVASYON", "Düşersen kalk, çukur seni bekliyor!"]
        ],
        html: {
          title: "IRON REQUIEM",
          tag: "LIVE TONIGHT",
          subtitle: "Gürültü, duman ve yumuşak kalpli ev sahibin Doom seni pit'e çağırıyor",
          menuTitle: "SETLİST",
          m1: "Pit (Sohbet)",
          m2: "Manifesto (Hakkında)",
          m3: "Merch Standı (Keşfet)",
          m4: "Duvar Yazıları (Topluluk)",
          counterTitle: "KALABALIK",
          counterNote: "Pit'e katılanlar: <span class=\"vno\">?</span>",
          chatTitle: "Doom &middot; Pit",
          aboutTitle: "Bu gürültü ne?",
          aboutBody:
            "Doom, kendini ağır riffler, simsiyah tişörtler ve duman dolu sahneler arasında yaşayan bir " +
            "metal sahnesi sakini sanıyor. Dışı gürültülü, içi pamuk gibi. Denemek için " +
            "<i>“Pit'te nasıl hayatta kalırım?”</i> diye sorun \\m/. Üstteki kutuda da her birkaç saniyede " +
            "bir riff, şaka ya da metal bilgisi dönüyor.",
          linksTitle: "Merch Standı",
          linksBody:
            "<li><a href=\"#\" onclick=\"return false;\">Riff Arşivi &mdash; en ağır 100 riff</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Amfi Tamircisi &mdash; 11'e kadar garanti</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Konser Takvimi &mdash; çukur hazır</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Kulak Tıkacı Mağazası &mdash; kulaklarına sahip çık</a></li>",
          gbTitle: "Duvar Yazıları &middot; Ziyaretçi Defteri",
          gbIntro:
            "Sahne arkası duvarına bir şeyler karala, herkes görsün! \\m/ " +
            "<button type=\"button\" class=\"join-btn\" data-open-notes>Katıl</button>",
          badges:
            "<span class=\"badge\">Ses seviyesi<br><b>11/10</b></span> " +
            "<span class=\"badge\">Kulak tıkacı<br><b>önerilir</b></span> " +
            "<span class=\"badge\">Pit<br><b>güvenli*</b></span>",
          footer:
            "&copy; Iron Requiem. Tüm hakları saklıdır, tüm amfiler açıktır.<br>" +
            "İletişim: <a href=\"#\" onclick=\"return false;\">pit@ironrequiem.example</a>",
          drawerTitle: "Duvara yaz",
          labelName: "Sahne adın",
          labelText: "Mesajın",
          noteSubmit: "SPREYLE"
        }
      },

      /* ---------- 3) Dark Fantasy: sisli diyar, han, kronik ---------- */
      fantasy: {
        title: "Shadowmere - Ana Sayfa",
        botName: "Eldrin",
        greeting: function () {
          var g = [
            "Hoş geldin, yolcu. Han ateşi sıcak, sis kapıda bekliyor. Ben Eldrin; bu diyarın kroniğini tutarım. Anlat bakalım, hangi yoldan geldin?",
            "Kapı gıcırdadı, demek ki yeni bir hikâye geldi. Otur yolcu; çorba sıcak, hikâyeler daha da sıcak. Ne öğrenmek istersin?",
            "Üçüncü ay yükselmeden gelen misafir... Kader seni boşuna getirmemiştir. Ben Eldrin, kroniker. Sor bakalım."
          ];
          return g[Math.floor(Math.random() * g.length)];
        },
        placeholder: "Eldrin'e bir şey sor, yolcu...",
        send: "Anlat",
        ready: "Ateş yanıyor.",
        busy: "Eldrin kroniği yazıyor...",
        speed: "Sis: yoğun",
        speedBusy: "Sis: kalın",
        waitPool: [
          "\u16A0 Yaşlı kroniker parşömeni açıyor\u2026",
          "\u16A0 Kâtip tüy kalemi mürekkebe batırıyor\u2026",
          "\u16A0 Han ateşinde bir odun çıtırdadı\u2026",
          "\u16A0 Eldrin eski rünleri okuyor\u2026",
          "\u16A0 Uzaktaki bir ejderha uykusunda mırıldandı\u2026"
        ],
        error: function (msg) {
          return "Sis sözlerini yuttu: " + msg + "\nBiraz sonra tekrar sor, yolcu.";
        },
        notePhName: "Adın (ya da lakabın)",
        notePhText: "Han defterine bir şeyler yaz...",
        noteEmpty: "Han defteri boş. İlk satırı sen yaz, yolcu.",
        noteSending: "Mühür sıcak mumla basılıyor\u2026",
        noteOk: "Notun han defterine mühürlendi.",
        noteErr: function (msg) { return "Mühür çatladı: " + msg; },
        quips: [
          ["KRONİK", "Üçüncü ayın doğduğu gece, eski orman üç kez nefes aldı."],
          ["BİLGİ", "Tolkien, Yüzüklerin Efendisi'ni yaklaşık on iki yılda yazdı; kitap 1954-55'te üç cilt hâlinde yayımlandı."],
          ["ŞAKA", "Hazine odası bulduk! ...Ejderha da içindeymiş. Ev sahibiymiş, kira istiyor."],
          ["BİLGİ", "Bir uzun kılıç sanıldığından hafiftir; tipik olarak 1-1,5 kilo civarındadır."],
          ["UYARI", "Yol kenarındaki parlayan mantarı yeme. Hele ki konuşuyorsa."],
          ["BESTİYARİ", "Gri kurtlar sürü hâlinde avlanır; yalnız dolaşan kurt ya sürgündür ya da çok tehlikelidir."],
          ["BİLGİ", "Ejderha efsaneleri dünyanın dört bir yanında doğdu: Avrupa'da ateş püskürtenler, Çin'de ise yağmuru getirenler anlatılır."],
          ["ÖZDEYİŞ", "Kılıç keskinleşir, ama onu tutan elin sabrı olmadıkça işe yaramaz."],
          ["BİLGİ", "Elder Futhark rünleri, yaklaşık 2. yüzyıldan itibaren Germen halkları tarafından kullanıldı."],
          ["ŞAKA", "Büyücü toplantıya neden geç kalmış? Işınlanma büyüsü 'güncelleniyormuş'."],
          ["FISILTI", "Sis, kalenin kapısını çoktan aştı. Ateşin yanına gel, yolcu."],
          ["KRONİK", "Kral öldüğünde taht boş kalmadı; ama kimse kimin oturduğunu bilmek istemedi."],
          ["BİLGİ", "'Dark fantasy', fantezinin büyülü dünyasına korku ve ahlaki belirsizlik katan bir alt türdür."],
          ["ŞAKA", "Bir cüce ile bir elf han kapısında kim daha hızlı bira bitirir diye bahse girmiş. Kazananı hâlâ kimse hatırlamıyor."],
          ["BESTİYARİ", "Köprü altındaki trol geçiş ücretini altınla değil bilmeceyle alır. Bilmeceyi bilemezsen... yine altın."],
          ["ÖZDEYİŞ", "Her harita eksiktir; çünkü en güzel yerler hep kenarlarındadır."]
        ],
        html: {
          title: "SHADOWMERE",
          tag: "CİLT I",
          subtitle: "Sisli diyarın kroniğini tutan Eldrin, han ateşinde sana yer ayırdı",
          menuTitle: "HARİTA",
          m1: "Han Odası (Sohbet)",
          m2: "Kroniğin Başı (Hakkında)",
          m3: "Bilinmeyen Topraklar (Keşfet)",
          m4: "Han Defteri (Topluluk)",
          counterTitle: "YOLCULAR",
          counterNote: "Bu hana uğrayanlar: <span class=\"vno\">?</span>",
          chatTitle: "Eldrin &middot; Han Odası",
          aboutTitle: "Bu diyar ne?",
          aboutBody:
            "Eldrin, kendini kül kokulu, sisli ve tehlikeli bir kıtada dolaşan yaşlı bir kroniker sanıyor. " +
            "Han ateşinin başında anlattığı her şey bir romandan çıkmış gibi. Denemek için " +
            "<i>“Bir ejderhayla pazarlık yapılır mı?”</i> diye sorun. Üstteki kutuda da her birkaç saniyede " +
            "bir kronik, bestiyari ya da han dedikodusu dönüyor.",
          linksTitle: "Bilinmeyen Topraklar",
          linksBody:
            "<li><a href=\"#\" onclick=\"return false;\">Kayıp Krallıklar Haritası</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Cüce Demirhanesi &mdash; kılıç ve zırh</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Eski Rünler Sözlüğü</a></li>" +
            "<li><a href=\"#\" onclick=\"return false;\">Bestiyari &mdash; yaratıklara saha rehberi</a></li>",
          gbTitle: "Han Defteri &middot; Ziyaretçi Defteri",
          gbIntro:
            "Han defterine adını ve sözünü bırak; mühürlenen her satır kroniğe geçer. " +
            "<button type=\"button\" class=\"join-btn\" data-open-notes>Katıl</button>",
          badges:
            "<span class=\"badge\">Rün<br><b>mühürlü</b></span> " +
            "<span class=\"badge\">Ejderha<br><b>onaylı</b></span> " +
            "<span class=\"badge\">Han<br><b>açık</b></span>",
          footer:
            "&copy; Shadowmere Chronicles. Her cilt kendi bedelini ister.<br>" +
            "İletişim: <a href=\"#\" onclick=\"return false;\">kronik@shadowmere.example</a>",
          drawerTitle: "Han defterine yaz",
          labelName: "Adın",
          labelText: "Sözün",
          noteSubmit: "Mühürle"
        }
      }
    }
  }
};

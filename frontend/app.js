(function () {
  var body = document.body;
  var chatLog = document.getElementById("chat-log");
  var form = document.getElementById("chat-form");
  var input = document.getElementById("chat-input");
  var sendBtn = document.getElementById("send-btn");
  var statusEl = document.getElementById("status");
  var modemEl = document.getElementById("modem");
  var btnModern = document.getElementById("btn-modern");
  var btnAnime = document.getElementById("btn-anime");
  var btnGothic = document.getElementById("btn-gothic");
  var btnTheme = document.getElementById("btn-theme");
  var themeNameEl = document.getElementById("theme-name");
  var fx = document.getElementById("fx");
  var flavorBtn = document.getElementById("flavor");
  var flavorTag = document.getElementById("flavor-tag");
  var flavorText = document.getElementById("flavor-text");

  var notesList = document.getElementById("notes-list");
  var drawer = document.getElementById("notes-drawer");
  var drawerClose = document.getElementById("drawer-close");
  var noteForm = document.getElementById("note-form");
  var noteName = document.getElementById("note-name");
  var noteText = document.getElementById("note-text");
  var noteCount = document.getElementById("note-count");
  var noteSubmit = document.getElementById("note-submit");
  var noteStatus = document.getElementById("note-status");
  var guestbook = document.getElementById("guestbook");

  var CONTENT = window.ERA_CONTENT; // content.js: tum donemlerin metinleri

  // Sunucuya her istekte gonderilen konusma gecmisi
  var history = [];
  var MAX_HISTORY = 20;

  // Aktif donem: "1996" | "2030" | "anime" | "gothic".
  // Anime ve Gotik evrenlerin 3'er temasi var; her evren kendi temasini hatirlar.
  // Donem/tema degisince konusma sifirlanir (bot'un kisiligi degistigi icin).
  var era = "1996";
  var epoch = 0; // eski donemin gec gelen cevaplarini yok saymak icin
  var switching = false;
  var visitCount = 0;

  var THEME_SETS = {
    anime: {
      list: ["sakura", "neon", "shonen"],
      names: { sakura: "Sakura Bahçesi", neon: "Neon Tokyo", shonen: "Şonen Arena" }
    },
    gothic: {
      list: ["classic", "metal", "fantasy"],
      names: { classic: "Klasik Gotik", metal: "Metal Gotik", fantasy: "Dark Fantasy" }
    }
  };
  var themes = { anime: "sakura", gothic: "classic" };

  // Aktif donemin temasi (temasi olmayan donemlerde bos)
  function currentTheme() { return THEME_SETS[era] ? themes[era] : ""; }

  // Aktif donem + temanin icerigi: tema alanlari ortak alanlarin uzerine yazilir
  var contentCache = {};
  function t() {
    var theme = currentTheme();
    var key = era + "/" + theme;
    if (contentCache[key]) return contentCache[key];
    var base = CONTENT[era];
    var over = (base.themes && base.themes[theme]) || {};
    var merged = {};
    var k;
    for (k in base) merged[k] = base[k];
    for (k in over) merged[k] = over[k];
    merged.html = {};
    for (k in base.html || {}) merged.html[k] = base.html[k];
    for (k in over.html || {}) merged.html[k] = over.html[k];
    contentCache[key] = merged;
    return merged;
  }

  function errorText(data) {
    if (data && typeof data.detail === "string") return data.detail;
    return "Geçersiz istek";
  }

  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  // ----- Sahte ziyaretci sayaci (tarayicida saklanir) -----
  (function counter() {
    visitCount = 1337;
    try {
      visitCount = parseInt(localStorage.getItem("retrobot-visits") || "1336", 10) + 1;
      localStorage.setItem("retrobot-visits", String(visitCount));
    } catch (e) { /* localStorage kapaliysa sorun degil */ }
    var padded = String(visitCount);
    while (padded.length < 6) padded = "0" + padded;
    document.getElementById("counter").textContent = padded;
  })();

  // ----- Sabit metinleri secili donemin icerigiyle doldur -----
  function applyContent() {
    var html = t().html;
    var nodes = document.querySelectorAll("[data-k]");
    for (var i = 0; i < nodes.length; i++) {
      var value = html[nodes[i].getAttribute("data-k")];
      if (value !== undefined) nodes[i].innerHTML = value;
    }
    var counters = document.querySelectorAll(".vno");
    for (var j = 0; j < counters.length; j++) counters[j].textContent = visitCount;
  }

  // ----- Fisilti kutusu (gotik evren): rastgele soz / saka / bilgi -----
  var flavorTimer = null;
  var lastQuip = -1;

  function showQuip() {
    var quips = t().quips;
    if (!quips || !quips.length) return;
    var idx;
    do { idx = Math.floor(Math.random() * quips.length); } while (quips.length > 1 && idx === lastQuip);
    lastQuip = idx;
    flavorTag.textContent = quips[idx][0];
    flavorText.textContent = quips[idx][1];
    // animasyonu yeniden tetikle
    flavorBtn.classList.remove("swap");
    void flavorBtn.offsetWidth;
    flavorBtn.classList.add("swap");
  }

  function startFlavor() {
    stopFlavor();
    if (era !== "gothic") return;
    lastQuip = -1;
    showQuip();
    flavorTimer = setInterval(showQuip, 9000);
  }

  function stopFlavor() {
    if (flavorTimer) clearInterval(flavorTimer);
    flavorTimer = null;
  }

  flavorBtn.addEventListener("click", function () {
    showQuip();
    startFlavor(); // sayaci sifirla, hemen ardindan degismesin
  });

  // ----- Sohbet -----
  function addMessage(kind, who, text) {
    var div = document.createElement("div");
    div.className = "msg " + kind;
    if (who) {
      var span = document.createElement("span");
      span.className = "who";
      span.textContent = who + ": ";
      div.appendChild(span);
    }
    div.appendChild(document.createTextNode(text));
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;
    return div;
  }

  function setBusy(busy) {
    sendBtn.disabled = busy;
    input.disabled = busy;
    statusEl.textContent = busy ? t().busy : t().ready;
    modemEl.textContent = busy ? t().speedBusy : t().speed;
    if (!busy) input.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var message = input.value.trim();
    if (!message) return;

    var myEpoch = epoch;

    addMessage("user", t().userName, message);
    input.value = "";
    setBusy(true);
    var waitText = t().waitPool ? pick(t().waitPool) : t().waiting;
    var waiting = addMessage("system", null, waitText);

    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message, history: history, era: era, theme: currentTheme() || "sakura" })
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(errorText(data));
          return data;
        });
      })
      .then(function (data) {
        if (myEpoch !== epoch) return; // donem/tema degisti, bu cevap eskiye ait
        waiting.remove();
        addMessage("bot", t().botName, data.reply);
        history.push({ role: "user", text: message });
        history.push({ role: "bot", text: data.reply });
        if (history.length > MAX_HISTORY) {
          history = history.slice(history.length - MAX_HISTORY);
        }
      })
      .catch(function (err) {
        if (myEpoch !== epoch) return;
        waiting.remove();
        addMessage("system", null, t().error(err.message));
      })
      .then(function () {
        if (myEpoch === epoch) setBusy(false);
      });
  });

  // ----- Arka plan efektleri (anime ve gotik temalar) -----
  var FX = {
    sakura: { glyphs: ["✿", "❀", "❁", "✾"], count: 24, dur: [9, 17], size: [14, 28] },
    neon: { glyphs: ["ア", "ニ", "メ", "ネ", "オ", "ン", "カ", "ワ", "イ", "0", "1"], count: 28, dur: [6, 12], size: [12, 22] },
    shonen: { glyphs: ["✦", "★", "⚡", "✧"], count: 20, dur: [4, 9], size: [14, 30] },
    // Klasik gotik: yükselen kıvılcımlar + yavaşça süzülen haçlar (iki ayrı grup)
    classic: {
      groups: [
        { cls: "ember", glyphs: ["•", "·", "✦"], count: 14, dur: [7, 14], size: [8, 16] },
        { cls: "cross", glyphs: ["✝", "✞", "☩", "✠"], count: 11, dur: [16, 28], size: [16, 30] }
      ]
    },
    metal: { glyphs: ["☠", "▲", "✦"], count: 14, dur: [6, 12], size: [12, 24] },
    fantasy: {
      glyphs: ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "✦"],
      count: 22, dur: [9, 18], size: [14, 28]
    }
  };

  function rand(min, max) { return min + Math.random() * (max - min); }

  function buildFx() {
    fx.textContent = "";
    var kind = currentTheme();
    if (!kind || !FX[kind]) {
      fx.removeAttribute("data-kind");
      return;
    }
    var cfg = FX[kind];
    fx.setAttribute("data-kind", kind);
    // Tek gruplu temalar cfg'nin kendisini grup sayar; bazilari "groups" ile birden cok grup tanimlar
    (cfg.groups || [cfg]).forEach(function (group) {
      for (var i = 0; i < group.count; i++) {
        var s = document.createElement("span");
        var dur = rand(group.dur[0], group.dur[1]);
        if (group.cls) s.className = group.cls;
        s.textContent = group.glyphs[Math.floor(Math.random() * group.glyphs.length)];
        s.style.left = rand(0, 100).toFixed(1) + "%";
        s.style.fontSize = Math.round(rand(group.size[0], group.size[1])) + "px";
        s.style.animationDuration = dur.toFixed(1) + "s";
        s.style.animationDelay = (-rand(0, dur)).toFixed(1) + "s"; // hepsi ayni anda baslamasin
        s.style.setProperty("--drift", Math.round(rand(-60, 90)) + "px");
        s.style.setProperty("--spin", Math.round(rand(-360, 360)) + "deg");
        fx.appendChild(s);
      }
    });
  }

  // ----- Donem / tema degistirme -----
  function applyState(newEra, newTheme) {
    era = newEra;
    if (THEME_SETS[era] && newTheme) themes[era] = newTheme;
    var theme = currentTheme();
    epoch++;
    history = [];

    body.classList.toggle("modern", era === "2030");
    body.classList.toggle("anime", era === "anime");
    body.classList.toggle("gothic", era === "gothic");
    body.dataset.era = era;
    body.dataset.theme = theme;
    if (THEME_SETS[era]) themeNameEl.textContent = THEME_SETS[era].names[theme];

    applyContent();
    buildFx();
    startFlavor();

    document.title = t().title;
    input.placeholder = t().placeholder;
    sendBtn.textContent = t().send;
    noteName.placeholder = t().notePhName;
    noteText.placeholder = t().notePhText;

    chatLog.innerHTML = "";
    addMessage("bot", t().botName, t().greeting(theme));
    input.value = "";
    setBusy(false);
    renderNotes(lastNotes, 0); // bos durum metni donemle degisir
  }

  function transitionTo(newEra, newTheme) {
    if (switching) return;
    switching = true;
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      applyState(newEra, newTheme);
      switching = false;
      return;
    }

    body.classList.add("switching");
    // Animasyonun en karanlik aninda (yarisinda) temayi degistir
    setTimeout(function () { applyState(newEra, newTheme); }, 350);
    setTimeout(function () {
      body.classList.remove("switching");
      switching = false;
    }, 700);
  }

  btnModern.addEventListener("click", function () {
    transitionTo(era === "2030" ? "1996" : "2030");
  });
  btnAnime.addEventListener("click", function () {
    transitionTo(era === "anime" ? "1996" : "anime");
  });
  btnGothic.addEventListener("click", function () {
    transitionTo(era === "gothic" ? "1996" : "gothic");
  });
  // Tema dugmesi: anime ya da gotik evrendeyken o evrenin siradaki temasina gecer
  btnTheme.addEventListener("click", function () {
    var set = THEME_SETS[era];
    if (!set) return;
    var next = set.list[(set.list.indexOf(themes[era]) + 1) % set.list.length];
    transitionTo(era, next);
  });

  // ----- Ziyaretci defteri -----
  var lastNotes = [];

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleString("tr-TR", {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  }

  // freshId: yeni eklenen notu kisa sure vurgulamak icin
  function renderNotes(notes, freshId) {
    var scroll = notesList.scrollTop;
    notesList.textContent = "";
    if (!notes.length) {
      var empty = document.createElement("li");
      empty.className = "note note-empty";
      empty.textContent = t().noteEmpty;
      notesList.appendChild(empty);
      return;
    }
    notes.forEach(function (n) {
      var li = document.createElement("li");
      li.className = "note" + (n.id === freshId ? " fresh" : "");

      var head = document.createElement("div");
      var name = document.createElement("span");
      name.className = "n-name";
      name.textContent = n.name;
      var date = document.createElement("span");
      date.className = "n-date";
      date.textContent = formatDate(n.created);
      head.appendChild(name);
      head.appendChild(date);

      var text = document.createElement("div");
      text.className = "n-text";
      text.textContent = n.text; // textContent: not icindeki HTML calistirilmaz

      li.appendChild(head);
      li.appendChild(text);
      notesList.appendChild(li);
    });
    notesList.scrollTop = freshId ? 0 : scroll;
  }

  function loadNotes() {
    return fetch("/api/notes")
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (notes) {
        var same = JSON.stringify(notes.map(function (n) { return n.id; })) ===
          JSON.stringify(lastNotes.map(function (n) { return n.id; }));
        if (same && notesList.children.length) return;
        lastNotes = notes;
        renderNotes(lastNotes, 0);
      })
      .catch(function () { /* sunucu yoksa defter bos kalir */ });
  }

  // ----- Yan panel -----
  var lastOpener = null;

  function openDrawer(opener) {
    lastOpener = opener || null;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    noteStatus.textContent = "";
    noteStatus.classList.remove("error");
    setTimeout(function () { noteName.focus(); }, 320);
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (lastOpener && lastOpener.focus && document.contains(lastOpener)) lastOpener.focus();
  }

  document.addEventListener("click", function (event) {
    var opener = event.target.closest("[data-open-notes]");
    if (!opener) return;
    event.preventDefault();
    openDrawer(opener);
  });
  drawerClose.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });

  noteText.addEventListener("input", function () {
    noteCount.textContent = noteText.value.length;
  });

  noteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var text = noteText.value.trim();
    if (!text) return;

    noteSubmit.disabled = true;
    noteStatus.classList.remove("error");
    noteStatus.textContent = t().noteSending;

    fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: noteName.value, text: text })
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(errorText(data));
          return data;
        });
      })
      .then(function (note) {
        lastNotes = [note].concat(lastNotes).slice(0, 50);
        renderNotes(lastNotes, note.id);
        noteText.value = "";
        noteCount.textContent = "0";
        noteStatus.textContent = t().noteOk;
        // Kisa bir sure basari mesajini gosterip paneli kapat, defteri goster
        setTimeout(function () {
          closeDrawer();
          guestbook.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 900);
      })
      .catch(function (err) {
        noteStatus.classList.add("error");
        noteStatus.textContent = t().noteErr(err.message);
      })
      .then(function () {
        noteSubmit.disabled = false;
      });
  });

  // ----- Baslangic -----
  applyState("1996");
  loadNotes();
  setInterval(loadNotes, 30000); // baska ziyaretcilerin notlari da gorunsun
})();

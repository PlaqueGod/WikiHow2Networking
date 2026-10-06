// WikiHow2Network interactions

var articles = [
  {
    id: 1,
    title: "How to Understand What an IP Address Is",
    steps: [
      { title: "Think of it like your home address", desc: "Every device on the internet needs an address so other computers know where to send stuff. An IP address is like your house number, but for computers!! Without it, nobody would know where to deliver your cat videos 😂", emoji: "🏠", tip: "FUN FACT: IP stands for Internet Protocol. Sounds fancy but its really just a rulebook for addresses!!" },
      { title: "Look at what an IP address looks like", desc: "An IPv4 address looks like 4 numbers separated by dots. Like this: 192.168.1.1 — each number can be 0 to 255. So basically its like 4 numbers having a little party with dots between them 🎉 The dots are very important dont forget them!!", emoji: "🔢", tip: "TIP: Try typing 'ipconfig' on Windows or 'ifconfig' on Mac/Linux in the terminal to see YOUR ip address!!!! so cool right???" },
      { title: "Learn the difference between Public and Private IPs", desc: "Your PUBLIC ip is what the whole internet sees (like your apartment building address). Your PRIVATE ip is just inside your home network (like your apartment number). Routers do the translating in between! Its called NAT but dont worry about that yet.", emoji: "🔒", tip: "NOTE: 192.168.x.x and 10.x.x.x are always private addresses. The government decided this. (Actually it was IANA but whatever lol)" },
      { title: "Don't worry about IPv6 yet... but just know it exists ok", desc: "IPv6 looks like: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. We ran out of IPv4 addresses (oops!! classic humans) so they made IPv6 which has like a bajillion addresses. Dont panic. You'll learn it later. Maybe. Hopefully.", emoji: "😱", tip: "SCARY FACT: There are only 4.3 billion IPv4 addresses and theres more than 4.3 billion people on earth. Uh oh!!!! Someone messed up the math." },
    ],
    color: "#ffe066", tags: ["Beginner", "IP"], emoji: "🏠", difficulty: "Super Easy", diffColor: "#d4edda",
  },
  {
    id: 2,
    title: "How to Understand DNS (Domain Name System)",
    steps: [
      { title: "Realize that DNS is just a giant phone book for websites", desc: "DNS converts human-friendly names like 'google.com' into IP addresses like '142.250.80.46'. Because humans are really really bad at remembering numbers but we're ok at remembering words. DNS to the rescue!! Thank you DNS we love you.", emoji: "📖", tip: "REMEMBER: DNS = Domain Name System. Say it 5 times fast. DNS DNS DNS DNS DNS. Ok you can stop now." },
      { title: "Understand the lookup process (its a whole journey omg)", desc: "When you type a website: 1) Your computer asks your router. 2) Router asks your ISPs DNS server. 3) That asks a root server. 4) Root server says 'go ask .com servers'. 5) .com server says 'ask googles server'. 6) Googles server FINALLY gives the IP!! All this in like 0.001 seconds. Computers are absolutely insane.", emoji: "🗺️", tip: "PRO TIP: You can use Google's DNS (8.8.8.8) or Cloudflare's DNS (1.1.1.1) instead of your ISPs. Sometimes makes internet faster!! I think." },
      { title: "Learn what different DNS record types do (there's a lot)", desc: "A Record = points to an IPv4 address. AAAA Record = points to IPv6 (4 A's = 4 times the addresses lol). CNAME = its an alias (nickname for another name). MX Record = for email stuff. TXT Record = random text, often for proving you own the domain. You wont need all these right now I promise!!", emoji: "📝", tip: "FUN: Try running 'nslookup google.com' in your terminal! You can see DNS records!! hacker mode activated 🕶️ you look very professional doing this." },
    ],
    color: "#b5ead7", tags: ["Beginner", "DNS"], emoji: "📖", difficulty: "Easy", diffColor: "#d1ecf1",
  },
  {
    id: 3,
    title: "How the OSI Model Works (All 7 Layers!!)",
    steps: [
      { title: "Don't freak out — there are 7 layers (I know I know)", desc: "The OSI model is like a cake with 7 layers. Each layer does a different job to get data from one computer to another. Networking people LOVE talking about layers. Like they REALLY love it. You will be tested on this probably.", emoji: "🎂", tip: "MEMORY TRICK: 'Please Do Not Throw Sausage Pizza Away' = Physical, Data Link, Network, Transport, Session, Presentation, Application !! Put it on a sticky note. Right now. Go." },
      { title: "Layer 1 - Physical (the actual wires and cable and stuff)", desc: "This is the actual physical stuff: cables, wifi signals, light pulses in fiber optic. Bits go BZZZT through here as electrical signals. If your internet is broken, check Layer 1 first (is the cable plugged in?? lol).", emoji: "🔌", tip: "TRUE STORY: Like 80% of IT problems are Layer 1 problems. Is it plugged in? Is it turned on? Thats Layer 1 diagnostics right there my friend." },
      { title: "Layer 2 - Data Link (MAC addresses live here!)", desc: "This handles communication between devices on the SAME network. Every network card has a MAC address (Media Access Control) which is like a serial number burned in at the factory forever. Switches work at this layer!", emoji: "🔗", tip: "MAC address looks like: AA:BB:CC:DD:EE:FF — six pairs of hex numbers. Run 'ipconfig /all' on Windows to see yours!" },
      { title: "Layer 3 - Network (IP addresses live here!!)", desc: "This is where IP addresses and routing happen! Routers work at Layer 3. They look at IP addresses and figure out the best path to send your data packets across the internet. Like GPS but for data packets.", emoji: "🌐", tip: "Layer 3 is honestly the most important one to understand first. After Physical of course. Gotta make sure the cable is plugged in haha." },
      { title: "Layer 4 - Transport (TCP vs UDP!! the big debate!!)", desc: "TCP = reliable but a lil slower. It makes sure ALL your data arrives in order and asks for re-sends if something gets lost. UDP = FAST but 'fire and forget'. Great for video games and streaming where speed > perfection.", emoji: "🚚", tip: "ANALOGY: TCP is like certified mail (you get a receipt). UDP is like throwing paper airplanes out a window and hoping someone reads them." },
      { title: "Layers 5, 6, 7 — Session, Presentation, Application", desc: "Session = keeps connections open. Presentation = encrypts/decrypts data (HTTPS is partly here). Application = stuff YOU see and use: HTTP, FTP, SMTP (email), DNS. Your browser lives here!! Hi browser!! 👋", emoji: "👋", tip: "HONEST NOTE: In real life networking people mostly talk about Layers 1-4. Layers 5-7 are kinda blurry and people argue about them. Its fine. Welcome to networking!!" },
    ],
    color: "#c7ceea", tags: ["Intermediate", "OSI"], emoji: "🎂", difficulty: "Medium", diffColor: "#fff3cd",
  },
  {
    id: 4,
    title: "How to Understand TCP vs UDP (The Epic Showdown)",
    steps: [
      { title: "TCP wants to make absolutely SURE everything arrives safe", desc: "TCP does a 'three-way handshake' before sending data. SYN → SYN-ACK → ACK. Basically computers saying 'hey are you there!' then 'YES im here!' then 'ok cool lets talk'. Very polite protocol honestly. Very wholesome.", emoji: "🤝", tip: "SYN = Synchronize, ACK = Acknowledge. The handshake proves both computers are ready before data gets sent! No ghosting allowed in TCP." },
      { title: "UDP just YEETS the data and doesn't look back", desc: "UDP has NO handshake, NO guarantee of delivery, NO ordering of packets. It just SENDS and moves on. This sounds terrible but its perfect for live video calls, gaming, DNS — where being fast matters WAY more than being perfect.", emoji: "🎯", tip: "UDP is literally just sending data and praying it arrives lol. Used by: video games, YouTube Live, Zoom calls, DNS. Speed demons!!" },
      { title: "Know which one to use when (very important!!)", desc: "Use TCP for: web browsing, emails, downloading files — anything where missing data = disaster. Use UDP for: video streaming, gaming, voice calls — anything where a tiny bit of loss is ok but SPEED is everything.", emoji: "✅", tip: "TRIVIA: Loading a webpage = TCP. Netflix = mostly TCP (surprising!!). FPS game = UDP. Video call = UDP. Now you know things!!" },
    ],
    color: "#ffdac1", tags: ["Intermediate", "TCP", "UDP"], emoji: "⚡", difficulty: "Medium", diffColor: "#fff3cd",
  },
  {
    id: 5,
    title: "How to Understand Routers and Switches (They're Different!!)",
    steps: [
      { title: "First off — they are NOT the same thing people!!!", desc: "A lot of people think routers and switches are the same. They are NOT. I cannot stress this enough. They do completely different jobs. Once you understand this, networking clicks into place.", emoji: "😤", tip: "HOT TAKE: Calling a switch a router is like calling a spoon a fork. Both are kitchen things but very different jobs!!" },
      { title: "What a Switch does (connects stuff INSIDE your network)", desc: "A switch connects devices on the SAME local network (your house, office). It uses MAC addresses to figure out which device gets each piece of data. Like a traffic cop inside your building. Very local.", emoji: "🔀", tip: "Switches send data ONLY to the specific device that needs it. Not to everyone. This makes your network faster!!" },
      { title: "What a Router does (connects DIFFERENT networks together)", desc: "A router connects your local network to OTHER networks — like the internet!! It uses IP addresses to figure out where to send data. Your home wifi router connects your home network to your ISPs network, then out to the internet.", emoji: "🌍", tip: "Your home 'router' is usually ALSO a switch and ALSO a wifi access point all in one box!! Combo deal to save money." },
      { title: "Remember this simple rule and you'll be fine", desc: "SWITCH = connects devices inside one network using MAC addresses. ROUTER = connects different networks using IP addresses. Data stays home → Switch. Data goes to the internet → Router. Done!!", emoji: "📋", tip: "QUIZ: Laptop talking to your TV on same wifi = Switch. Laptop loading google.com = Router. Correct!! You're doing great!!" },
    ],
    color: "#fce4ec", tags: ["Beginner", "Hardware"], emoji: "📡", difficulty: "Easy", diffColor: "#d1ecf1",
  },
  {
    id: 6,
    title: "How Firewalls Work (Your Computer's Bodyguard!)",
    steps: [
      { title: "Imagine a bouncer at a really exclusive club", desc: "A firewall is a bouncer for your network. It checks every piece of data trying to come in OR go out, and decides: allowed or not? If yes → come in. If no → DENIED. Get out of here malicious packet!!", emoji: "💪", tip: "The word 'firewall' comes from literal fire walls in buildings that stop fire from spreading!! Same idea but for network traffic. Cool origin!!" },
      { title: "Firewalls use RULES to decide what to allow", desc: "Rules like: 'allow web traffic on port 80 and 443', 'block this suspicious IP', 'only allow SSH from my home IP'. The firewall checks every packet against rules in order. First match = that's what happens.", emoji: "📋", tip: "IMPORTANT: Port 80 = normal websites. Port 443 = secure (HTTPS). Port 22 = SSH. Bad guys love trying random ports hoping one is open!!" },
      { title: "Learn the two main types of firewalls", desc: "Hardware Firewall = a physical box between your network and the internet. Usually for businesses. Software Firewall = a program on your computer (Windows Defender has one!!). You probably have one RIGHT NOW and didnt know it.", emoji: "🖥️", tip: "Go to Windows Security → Firewall. Its there!! Its protecting you RIGHT NOW. Say thank you to your firewall. It works hard." },
      { title: "Stateful vs Stateless — don't let these words scare you", desc: "Stateless = checks each packet separately, no memory. Kinda dumb. Stateful = REMEMBERS ongoing connections. Much smarter! Return traffic from a connection you started is automatically allowed. Modern firewalls are stateful.", emoji: "🧠", tip: "Stateful = bouncer who remembers faces. Let you in, recognizes you coming back. Stateless = bouncer with amnesia checking your ID every single time." },
    ],
    color: "#e8eaf6", tags: ["Beginner", "Security"], emoji: "🔥", difficulty: "Easy", diffColor: "#d1ecf1",
  },
  {
    id: 7,
    title: "How to Understand Ports and Protocols (Super Important!!)",
    steps: [
      { title: "Think of ports like apartment numbers in a building", desc: "Your computer is like an apartment building. The IP address is the building address. Inside there are 65,535 apartments (ports!!) and different services live at different numbers. Data needs BOTH an address AND a port to reach the right service.", emoji: "🏢", tip: "65,535 ports!! Ports 0-1023 are 'well-known ports' reserved for official stuff. Ports 1024+ are for everything else." },
      { title: "Memorize these SUPER important port numbers (seriously)", desc: "Port 80 = HTTP. Port 443 = HTTPS. Port 22 = SSH. Port 21 = FTP. Port 25 = SMTP (email). Port 53 = DNS. Port 3389 = RDP (Windows remote desktop). These come up ALL THE TIME in networking!!", emoji: "🔑", tip: "MEMORY TIP: 80 = web (no lock), 443 = web (with lock), 22 = SSH. These are the big three!! If you only memorize 3, make it these." },
      { title: "Understand what a Protocol actually is", desc: "A protocol is a set of rules computers agree to follow when talking. HTTP says 'request pages this way'. SSH says 'encrypt everything this way'. Without agreed protocols, computers would just shout random stuff at each other. Chaos!!", emoji: "📜", tip: "Protocols are like languages. If you both speak English you can talk!! If your browser speaks HTTP and the server speaks HTTP, they can talk!!" },
      { title: "Try checking open ports on your computer RIGHT NOW", desc: "Windows: open Command Prompt → type 'netstat -an'. Mac/Linux: open Terminal → type 'ss -tuln'. You'll see ALL active connections and listening ports. Its a lot at first. Dont panic!! Your computer is just busy being a computer.", emoji: "🕵️", tip: "If you see a port you don't recognize — look it up!! Google the port number. Probably normal software. Maybe sketchy. Probably normal though." },
    ],
    color: "#f3e5f5", tags: ["Beginner", "Ports"], emoji: "🚪", difficulty: "Easy", diffColor: "#d1ecf1",
  },
  {
    id: 8,
    title: "How to Understand Subnetting (Math Warning!!)",
    steps: [
      { title: "Ok yes there's math but I promise it's not THAT bad", desc: "Subnetting = splitting a big network into smaller ones (subnets). Like slicing a pizza!! Why? To organize devices, improve security, reduce traffic, and use IPs more efficiently. Companies do this ALL the time.", emoji: "🍕", tip: "HEADS UP: Subnetting involves binary (0s and 1s). If you've never done binary it feels weird at first. Thats normal!! Everyone struggles here. Keep going!!" },
      { title: "Understand what a Subnet Mask is", desc: "A subnet mask (like 255.255.255.0) tells you which part of the IP is the 'network' and which part is the 'device'. 255 = network part. 0 = device part. Like splitting a street address into street name vs house number.", emoji: "🎭", tip: "255.255.255.0 means first 3 numbers = network, last number = device. So 192.168.1.0 to 192.168.1.255 are all on the same subnet!! 256 addresses." },
      { title: "Learn CIDR notation (the /24 thing you keep seeing)", desc: "192.168.1.0/24 — the /24 means 24 bits are used for the network. IPv4 has 32 bits total, so 8 bits left for devices. 2^8 = 256 addresses (minus 2 reserved = 254 usable). /24 is super common for home networks!!", emoji: "✂️", tip: "REFERENCE: /24 = 254 devices (home). /16 = 65,534 devices (company). /8 = 16 million devices (huge org). Smaller number = bigger network!!" },
      { title: "Calculate your first subnet (you can do this!!)", desc: "Given 192.168.10.0/24: Network address = 192.168.10.0 (reserved, don't assign). Broadcast = 192.168.10.255 (reserved). Usable = 192.168.10.1 to 192.168.10.254. Thats 254 devices. You just calculated a subnet!! Add it to your resume.", emoji: "🧮", tip: "ALWAYS: First address = Network (reserved). Last address = Broadcast (reserved). Everything in between = usable!! Never forget this or things break." },
      { title: "Practice with tools — don't suffer unnecessarily", desc: "FREE subnet calculators exist online!! Search 'subnet calculator'. Real networking pros use these tools all the time. Learn the math to UNDERSTAND it — not to do it by hand forever. Work smarter!!", emoji: "🛠️", tip: "TOOL: 'ipcalc' on Linux. Type 'ipcalc 192.168.1.0/24' and it gives you everything. Very satisfying to use honestly!!" },
    ],
    color: "#e0f7fa", tags: ["Intermediate", "Subnetting"], emoji: "🧮", difficulty: "Hard (but you got this!!)", diffColor: "#f8d7da",
  },
];

// state (the computer remembers finished lessons in this browser)
var completedArticles = [];
var likedSteps = {};
var activeCategory = "All";

try {
  completedArticles = JSON.parse(localStorage.getItem("finished-network-lessons") || "[]");
} catch (error) {
  completedArticles = [];
}

window.onload = function() {
  renderHome();
  renderGlossary();
};

function renderHome() {
  showSection("home-page");
  document.getElementById("home-page").style.display = "block";
  document.getElementById("article-page").style.display = "none";
  updateProgress();
  applyFilters();
}

function updateProgress() {
  var count = completedArticles.length;
  var fill = document.getElementById("progress-fill");
  fill.style.width = (count / 8 * 100) + "%";
  fill.className = "progress-fill" + (count === 8 ? " full" : "");
  document.querySelector(".progress-track").setAttribute("aria-valuenow", count);
  var msg = count === 8 ? "🏆 Networking legend!" : count >= 4 ? "🔥 Halfway there!" : "💪 Keep going!";
  document.getElementById("progress-label").textContent = count + "/8 lessons completed. " + msg;
}

function renderCards(list) {
  var grid = document.getElementById("lessons-grid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state">😢 No lessons found!!<span>(remember we only have 8 lessons so dont get too creative with the search)</span></div>';
    return;
  }

  list.forEach(function(article, idx) {
    var isDone = completedArticles.indexOf(article.id) !== -1;
    var card = document.createElement("div");
    card.className = "lesson-card";
    card.onclick = function() { showArticle(article.id); };
    card.innerHTML =
      (isDone ? '<div class="card-done-badge">✅ DONE!</div>' : "") +
      '<div class="card-num-badge">' + (idx + 1) + "</div>" +
      '<div class="card-color-top" style="background:' + article.color + '">' +
        '<span class="card-emoji">' + article.emoji + "</span>" +
      "</div>" +
      '<div class="card-body">' +
        '<div class="card-title">' + article.title + "</div>" +
        '<div class="card-meta">' +
          '<span class="badge-difficulty" style="background:' + article.diffColor + '">💪 ' + article.difficulty + "</span>" +
          '<span class="badge-steps">' + article.steps.length + " steps</span>" +
        "</div>" +
        '<div class="card-tags">' + article.tags.map(function(t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>" +
      "</div>" +
      '<div class="card-footer"><span class="card-verified">✅ Beginner friendly</span><span class="card-read-link">READ IT →</span></div>';
    grid.appendChild(card);
  });
}

function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll(".btn-category").forEach(function(btn) {
    btn.className = "btn-category" + (btn.textContent.trim() === cat ? " active" : "");
  });
  applyFilters();
}

function doSearch() {
  applyFilters();
}

function applyFilters() {
  var searchVal = document.getElementById("search-input").value.toLowerCase();
  var filtered = articles.filter(function(a) {
    return (activeCategory === "All" || a.tags.indexOf(activeCategory) !== -1) &&
           (searchVal === "" || (a.title + " " + a.tags.join(" ")).toLowerCase().indexOf(searchVal) !== -1);
  });
  renderCards(filtered);
}

function showArticle(id) {
  var article = articles.find(function(a) { return a.id === id; });
  if (!article) return;
  showSection("home-page");
  document.getElementById("home-page").style.display = "none";
  var page = document.getElementById("article-page");
  page.style.display = "block";
  var isDone = completedArticles.indexOf(id) !== -1;

  var stepsHTML = article.steps.map(function(step, i) {
    return '<div class="step-card">' +
      '<div class="step-header">' +
        '<div class="step-number" style="background:' + article.color + '">' + (i + 1) + "</div>" +
        '<div class="step-title">' + step.title + "</div>" +
      "</div>" +
      '<div class="step-body">' +
        '<div class="step-emoji-box">' + step.emoji + "</div>" +
        '<div class="step-content">' +
          '<div class="step-desc">' + step.desc + "</div>" +
          '<div class="step-tip"><strong>💡 Tip: </strong>' + step.tip + "</div>" +
          '<div class="step-helpful"><span>Was this helpful?? 👇</span>' +
            '<button class="btn-helpful btn-yes" id="yes-' + id + '-' + i + '" onclick="toggleLike(' + id + ',' + i + ',\'yes\')">👍 Yes!!</button>' +
            '<button class="btn-helpful btn-no" id="no-' + id + '-' + i + '" onclick="toggleLike(' + id + ',' + i + ',\'no\')">👎 Confusing</button>' +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>";
  }).join("");

  var otherLessons = articles.filter(function(a) { return a.id !== id; }).map(function(a) {
    var done = completedArticles.indexOf(a.id) !== -1 ? " ✅" : "";
    return '<button class="btn-lesson-link" style="background:' + a.color + '" onclick="showArticle(' + a.id + ')">' +
      "<span>" + a.emoji + "</span><span>" + a.title.replace("How to ", "").replace("How ", "") + done + "</span></button>";
  }).join("");

  page.innerHTML =
    '<button class="btn-back" onclick="renderHome()">← Back to all lessons</button>' +
    '<div class="article-header" style="background:' + article.color + '">' +
      '<div class="article-header-emoji">' + article.emoji + "</div>" +
      '<div>' +
        '<div class="article-lesson-label">Lesson ' + article.id + " of 8 · WikiHow2Network</div>" +
        '<div class="article-title">' + article.title + "</div>" +
        '<div class="article-badges">' +
          '<span class="badge-difficulty" style="background:' + article.diffColor + '; border:2px solid #aaa; padding:3px 10px">💪 ' + article.difficulty + "</span>" +
          '<span class="badge-steps" style="padding:3px 10px; border:1px solid rgba(0,0,0,0.2)">⏱️ ~' + (article.steps.length * 2) + " min read</span>" +
          (isDone ? '<span class="already-done-badge">✅ Already done!! (re-reading = extra smart)</span>' : "") +
        "</div>" +
      "</div>" +
    "</div>" +
    '<div class="article-intro"><strong>👋 Hey!!</strong> This article teaches you about ' + article.title.replace("How to ", "").replace("How ", "").toLowerCase() + '. Plain language only. Read steps in order. You got this!! 💪</div>' +
    stepsHTML +
    '<div class="congrats-box">' +
      '<div class="congrats-emojis">🎉🎊🎉</div>' +
      '<div class="congrats-title">YOU FINISHED THE LESSON!!!</div>' +
      '<div class="congrats-text">Congrats!! You are officially smarter than 5 minutes ago. Thats science. Tell your friends.</div>' +
      (!isDone ? '<button class="btn-done" onclick="markDone(' + id + ')">✅ Mark as Completed!!</button>'
               : '<div class="already-done-badge">✅ Already marked done!! 🔥</div>') +
    "</div>" +
    '<div class="more-lessons"><div class="more-lessons-title">📚 More lessons:</div><div class="more-lessons-grid">' + otherLessons + "</div></div>";

  // restore liked button states
  article.steps.forEach(function(_, i) {
    if (likedSteps[id + "-" + i + "-yes"]) { var b = document.getElementById("yes-" + id + "-" + i); if (b) b.classList.add("active"); }
    if (likedSteps[id + "-" + i + "-no"])  { var b = document.getElementById("no-"  + id + "-" + i); if (b) b.classList.add("active"); }
  });
}

function toggleLike(articleId, stepIdx, type) {
  var key = articleId + "-" + stepIdx + "-" + type;
  var btn = document.getElementById(type + "-" + articleId + "-" + stepIdx);
  if (likedSteps[key]) { delete likedSteps[key]; if (btn) btn.classList.remove("active"); }
  else { likedSteps[key] = true; if (btn) btn.classList.add("active"); }
}

function markDone(id) {
  if (completedArticles.indexOf(id) === -1) completedArticles.push(id);
  try {
    localStorage.setItem("finished-network-lessons", JSON.stringify(completedArticles));
  } catch (error) {
    // Progress still works until the page is closed if browser storage is off.
  }
  renderHome();
}

function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach(function(section) {
    section.hidden = section.id !== sectionId;
  });
  document.querySelectorAll(".nav-button").forEach(function(button) {
    button.classList.toggle("active", button.getAttribute("data-section") === sectionId);
  });
  document.getElementById("home-page").style.display = sectionId === "home-page" ? "block" : "none";
  document.getElementById("article-page").style.display = "none";
  window.scrollTo(0, 0);
}

var glossaryWords = [
  { word: "IP address", meaning: "A number used to identify a device on a network, like a return address for data." },
  { word: "DNS", meaning: "The Domain Name System finds the IP address that goes with a website name." },
  { word: "Router", meaning: "A device that moves traffic between different networks, such as your home and the internet." },
  { word: "Switch", meaning: "A device that connects devices together inside the same local network." },
  { word: "Packet", meaning: "A small chunk of data sent across a network." },
  { word: "Protocol", meaning: "An agreed set of rules that devices use to communicate." },
  { word: "Firewall", meaning: "A tool that allows or blocks network traffic using security rules." },
  { word: "Port", meaning: "A numbered doorway that helps a device send data to the right app or service." },
  { word: "Subnet", meaning: "A smaller section of a larger network." },
  { word: "MAC address", meaning: "An address used to identify a network connection on a local network." }
];

function renderGlossary() {
  var searchBox = document.getElementById("glossary-search");
  var searchText = searchBox ? searchBox.value.toLowerCase() : "";
  var list = document.getElementById("glossary-list");
  var matches = glossaryWords.filter(function(item) {
    return (item.word + " " + item.meaning).toLowerCase().indexOf(searchText) !== -1;
  });

  list.innerHTML = "";
  if (matches.length === 0) {
    list.textContent = "No matching words yet. Try another search.";
    return;
  }

  matches.forEach(function(item) {
    var entry = document.createElement("article");
    var title = document.createElement("h2");
    var meaning = document.createElement("p");
    entry.className = "glossary-item";
    title.textContent = item.word;
    meaning.textContent = item.meaning;
    entry.appendChild(title);
    entry.appendChild(meaning);
    list.appendChild(entry);
  });
}

function filterGlossary() {
  renderGlossary();
}

function waitALittle(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

async function runNetworkCheck(event) {
  event.preventDefault();
  var form = document.getElementById("lab-form");
  if (!form.reportValidity()) return;

  var button = document.getElementById("lab-button");
  var status = document.getElementById("lab-status");
  var stepList = document.getElementById("lab-steps");
  var host = document.getElementById("host-input").value.trim();
  var pretendSteps = [
    "Your browser gets the name ready...",
    "A pretend DNS helper looks up " + host + "...",
    "A pretend address is found. No real lookup happened!"
  ];

  button.disabled = true;
  stepList.innerHTML = "";
  status.textContent = "Running a pretend lookup...";

  for (var i = 0; i < pretendSteps.length; i++) {
    await waitALittle(550);
    var newStep = document.createElement("li");
    newStep.textContent = pretendSteps[i];
    stepList.appendChild(newStep);
  }

  status.textContent = "Demo finished. This was only a local animation, not an internet request.";
  button.disabled = false;
}

function checkQuiz(event) {
  event.preventDefault();
  var answer = document.querySelector('input[name="quiz-answer"]:checked');
  var result = document.getElementById("quiz-result");

  if (!answer) {
    result.textContent = "Pick an answer first, then check it.";
  } else if (answer.value === "router") {
    result.textContent = "✅ Correct! Routers move traffic between networks using IP addresses.";
  } else {
    result.textContent = "Not quite. A router connects different networks. Try the lesson about routers and switches!";
  }
}
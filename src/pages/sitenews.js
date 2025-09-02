require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var accountHelper = require("../accounthelper/index.js");
var dialog = require("../dialogs.js");

var siteNews = [
	// Header
	{
		element: "h1",
		textContent: "🚨 RR+ Dev Log – The Chaos Report 🚨",
		style: {
			fontSize: "2em",
			marginBottom: "0.5em",
			textAlign: "center",
		},
	},
	{
		element: "p",
		textContent: "Written September 2nd, 2025",
		style: {
			fontSize: "12px",
			textAlign: "center",
		},
	},

	// Short story
	{
		element: "h2",
		textContent: "⚡ Short Story ⚡",
		style: {
			textAlign: "center",
			marginTop: "0.5em",
			marginBottom: "0.5em",
		},
	},
	{
		element: "p",
		textContent:
			"RR+ updates are on pause. Chromebooks + free IDEs = constant chaos. Site still works, chat still wild, soundboard still slaps — but dev grind is stuck until I find an unblocked IDE or sneak PC time.",
		style: {
			fontWeight: "bold",
			fontSize: "1.05em",
			marginBottom: "1em",
		},
	},

	// Long story
	{
		element: "h2",
		textContent: "📜 Long Story 📜",
		style: {
			textAlign: "center",
			marginBottom: "0.5em",
		},
	},

	// Current status
	{
		element: "p",
		textContent:
			"RR+ updates? Slowed to like… Chromebook wifi levels. Dev grind isn’t dead, but it’s definitely on cooldown. Free IDEs keep nuking my sessions and unblocked options vanish faster than the last pizza slice at lunch.",
		style: {
			fontWeight: "bold",
			fontSize: "1.1em",
			marginBottom: "1em",
			color: "#000",
		},
	},

	// Origin story
	{
		element: "p",
		textContent:
			"Random Rants + was literally built on Chromebooks, for Chromebooks. Not by choice — I’ve pretty much always been grounded, so Windows PCs were off-limits. Even the school ones are locked down, which means the online IDE hustle never ends. (Weirdly, StackBlitz runs fine on the school PCs, but on my Chromebook? Total meltdown.)",
	},
	{
		element: "p",
		textContent:
			"RR and RR+ started on Glitch. It was fast, free, and — best part — unblocked at school. I used to drop updates mid-class. Teachers thought I was taking notes. I wasn’t.",
	},
	{
		element: "p",
		textContent:
			"Glitch dipped, so I hopped to CodeSandbox. Free tier said: enjoy 3 clicks, then pay up. 💀 Strict timers, hard caps — nope. Tried StackBlitz next, but it threw memory errors every five seconds just installing webpack. I optimized until I rage-quit. Gave up on that path.",
	},
	{
		element: "p",
		textContent:
			"Now I survive on Goorm IDE. It works, but it’s risky. If I forget to stop a container or run out of credits (their fancy way of saying time limit), I’m locked out of updates. Only backup is StackBlitz on the school’s Windows PCs, since those somehow run fine. So yeah… RR+ dev is skating on thin ice.",
	},
	{
		element: "p",
		textContent:
			"And yeah… the Node.js code is chaos too. The one server.js file is 2000+ lines of spaghetti. Haven’t split it into modules, kinda scared to even try. It works, so I just leave it — but future-me is gonna hate present-me.",
		children: [],
	},

	// Deployment
	{
		element: "p",
		textContent:
			"Right now the site’s deployed on Render.com. It runs smooth, but I’m low-key worried about their auto-suspend system. If they ever flag RR+ as ‘abuse,’ it could vanish. Hasn’t happened yet though, so for now it’s chill.",
	},

	// Personal chaos
	{
		element: "p",
		textContent:
			"Yes, I own a decent Windows PC. No, I can’t use it — grounded IRL. So RR+ mostly lives on Chromebooks + school wifi until parole.",
	},
	{
		element: "p",
		textContent:
			"Sometimes I get rare PC access (birthdays, random parent approval moments). But instead of updating RR+, I end up coding JavaScript games or editing one of my other sites, just because it feels more fun. Free time + full access = brain everywhere.",
	},
	{
		element: "p",
		textContent:
			"Extra L: I’m already on my second GitHub alt. My first one got locked out from 2FA, and the recovery codes? Gone — parents found my flash drive and took it. If RR+ glitches or repos vanish randomly, that’s why.",
	},
	{
		element: "p",
		textContent:
			"Extra chaos: if I forget to log out of my Chromebook, my parents might straight-up delete my account. They know I use it for coding, and they kinda hate it. So every dev session feels like playing RR+ on hard mode — one slip and it’s game over.",
	},

	// Wrap-up
	{
		element: "p",
		textContent:
			"So updates are on cooldown. The site still runs. Chat still rages. Soundboard still slaps. But dev mode? Paused. Not dead, just cornered. The second I find an unblocked IDE or sneak back into my PC, updates drop. Until then — enjoy the chaos that’s already here.",
	},
	{
		element: "p",
		textContent:
			"My ADHD says yes to updates, but my gut feels like no. So RR+ lives in limbo: not dead, not thriving, just chilling until the stars (and the school wifi) line up.",
		style: {
			fontStyle: "italic",
			textAlign: "center",
			marginTop: "1em",
			fontSize: "0.8em",
		},
	},
];

var elementJSON = [
	{
		element: "div",
		className: "aboutDivCenter",
		children: siteNews,
	},
];

var pageElements = elements.createElementsFromJSON(elementJSON);
elements.appendElements(elements.body, pageElements);

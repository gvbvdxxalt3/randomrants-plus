require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var accountHelper = require("../accounthelper/index.js");
var dialog = require("../dialogs.js");

var siteNews = [
	{
		element: "h1",
		textContent: "RR+ Dev Log – Real Talk",
		style: {
			fontSize: "2em",
			marginBottom: "0.5em",
			textAlign: "center",
		},
		children: [],
	},
	{
		element: "p",
		textContent:
			"Random Rants + development is slowing down... or maybe frozen. The IDE (online code editor) struggle is real, and unblocked options are basically extinct.",
		style: {
			fontWeight: "bold",
			fontSize: "1.1em",
			marginBottom: "1em",
			color: "#000",
		},
		children: [],
	},
	{
		element: "p",
		textContent:
			"This whole thing runs on free containers, zero funding, and vibes. Which means I rely on platforms that don’t lock me out after 10 minutes.",
		children: [],
	},
	{
		element: "p",
		textContent:
			"RR and RR+ were born on Glitch.com. It was fast, free, and — most importantly — unblocked at school. It let me ship updates from the back of the classroom.",
		children: [],
	},
	{
		element: "p",
		textContent:
			"Yeah, I got grounded a lot. Yeah, I pushed updates instead of doing classwork. But RR+ was my escape in code — loud chats, soundboards, alt chaos.",
		children: [],
	},
	{
		element: "p",
		textContent:
			"Then Glitch died. I jumped to CodeSandbox. But I hit limits instantly. Their free tier is strict — like timer-based strict. Not gonna work.",
		children: [],
	},
	{
		element: "p",
		textContent:
			"Yeah, most online IDEs *do* work — for like 3 days. Then boom: outta credits, outta runtime, outta luck. Dev freezes mid-feature. Everything's fine until it's not.",
	},
	{
		element: "p",
		textContent:
			"Yes, I have a legit Windows PC. Yes, it’s way better for dev. No, I can’t use it — it’s locked up because I’m grounded. So RR+ development = surviving on school Chromebooks and free IDEs until further notice.",
	},
	{
		element: "p",
		textContent:
			"Until I find a better option, RR+ updates will be rare or totally paused. The site still works. Chat still runs. Soundboard still slaps. But dev? On hold.",
		children: [],
	},
	{
		element: "p",
		textContent:
			"Bonus pain: lost access to a bunch of dev accounts. 2FA + getting grounded = rip GitHub logins. So if stuff breaks randomly, that’s why.",
		children: [],
	},
	{
		element: "p",
		textContent:
			"This project isn’t dead. It’s just cornered. If I find a way back in — or something new gets unblocked — we’re back.",
		children: [],
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

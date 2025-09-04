require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var accountHelper = require("../accounthelper/index.js");
var dialog = require("../dialogs.js");

var randomRantsSecurity = [
  {
    element: "h1",
    textContent: "🔒 Security & Privacy (RR+ Style)",
    style: { fontSize: "2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Random Rants + is made for fun first, not bank-level security. The setup is simple, and it’ll probably stay that way — so here are a few things to know.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "What to Know",
        style: { fontSize: "1.5em", marginTop: "0.5em" },
        children: [],
      },
      {
        element: "ul",
        children: [
          {
            element: "li",
            textContent:
              "Passwords aren’t stored with heavy-duty hashing. Use a unique one just for here.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "Cookies aren’t fully locked down — so if you’re on a shared computer, just remember to log out when you’re done using RR+.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "There’s no block/report button. If someone’s being annoying, just hop to another room.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "Room owners run their spaces however they want — so pick rooms that match your vibe.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "No password reset. Forget it = account gone. (Write it down somewhere safe!)",
            style: { color: "darkred", fontWeight: "bold" },
            children: [],
          },
        ],
      },
    ],
  },
  {
    element: "p",
    textContent:
      "This platform is a personal project, meant for chatting, ranting, and sometimes total chaos. Just keep in mind it’s not built for handling sensitive/private info.",
    style: { fontSize: "1em", fontStyle: "italic", marginTop: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Best move: use a throwaway password and feel free to rant as wildly as you want — just don’t drop personal details you’d regret later.",
    style: { fontSize: "1em", fontWeight: "bold", marginTop: "0.5em" },
    children: [],
  },
];

var elementJSON = [
  {
    element: "div",
    className: "aboutDivCenter",
    children: randomRantsSecurity,
  },
];

var pageElements = elements.createElementsFromJSON(elementJSON);
elements.appendElements(elements.body, pageElements);

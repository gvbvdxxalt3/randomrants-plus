require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var accountHelper = require("../accounthelper/index.js");
var dialog = require("../dialogs.js");

var randomRantsSecurity = [
  {
    element: "h1",
    textContent: "Security & Privacy",
    style: { fontSize: "2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Random Rants + was made for fun first, not bank account security. Here are some things to read and follow to stay secure.",
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
              "Database is locked with an API key - All your stuff, like rooms and accounts, are locked behind this API key. While I do my best to prevent exposing this key to the public, the risk still exists.",
          },
          {
            element: "li",
            textContent:
              "No site admin report button - Whatever is posted in a room, is what only the room owners can see, they can clear the whole chat out or ban someone, but moderation is managed by the room owners.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "Room owners can run the room however they want - Pick a room that fits what you like best.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "Sometimes one file can overwrite another - If someone were to send a edit request for one thing (like a room or account), and then send another at the same time, there is a chance that one may beat the other and cause a overwrite. This is something that's complicated to fix, so I might never fix this.",
            children: [],
          },
          {
            element: "li",
            textContent:
              "No password reset option - If you forget your password, you're locked out your account forever!",
            style: { color: "darkred", fontWeight: "bold" },
            children: [],
          },
        ],
      },
    ],
  },
  {
    element: "h2",
    textContent: "Things you should do",
    style: { fontSize: "1.5em", marginTop: "0.5em" },
  },
  {
    element: "ul",
    children: [
      {
        element: "li",
        textContent:
          'Use a unique password - Don\'t reuse passwords from other sites, and make sure it can\'t be easily guessed. (Avoid things like "abc123" or "a1b2c3")',
      },
      {
        element: "li",
        textContent:
          "Don't send super personal info through rooms - Do what it says, because if someone's account was hacked, they could be a hacker pretending to be them.",
      },
      {
        element: "li",
        textContent:
          "Sign out when you're done - When you're done with Random Rants +, make sure you sign out if you're on a shared device.",
      },
      {
        element: "li",
        textContent:
          "Check devices, and extensions - There may be malware wanting to steal cookies, if they steal them then they have your account.",
      },
    ],
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

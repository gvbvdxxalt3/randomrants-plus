require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var accountHelper = require("../accounthelper/index.js");
var dialog = require("../dialogs.js");

var randomRantsHistory = [
  // History
  {
    element: "h2",
    textContent: "The Origin Story (Random Rants)",
    style: { fontSize: "1.8em", marginTop: "1.2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    children: [
      { element: "strong", textContent: "Random Rants", children: [] },
      {
        element: "span",
        textContent:
          " started as a janky unsecure chat app.",
      },
    ],
    style: { fontSize: "1.1em", marginBottom: "0.5em" },
  },
  {
    element: "p",
    children: [
      {
        element: "em",
        textContent: "(RIP - The old site is gone now, quite sad)",
      },
    ],
    style: { fontSize: "1em", marginBottom: "0.3em" },
  },
  {
    element: "p",
    textContent:
      "I met a person in middle school, in my elective class. Saw him using scratch, and I was like \"yeah I use it too,\" and then switched topics and showed him an site called Macre's Chat.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "That person was Im_CatmanYT (That's his name on scratch), so he started to use the chat site with his friends, and soon enough he said \"yo, make me a site thats like this but better\".",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "He gave me a google doc with a list of things to do. I did those during class.", //
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "We threw ideas into Google Docs, worked on it during class (sorry teachers), and kept tweaking it until it became the Random Rants people knew.",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [],
  },

  // Shutdown
  {
    element: "h2",
    textContent: "Why It Shut Down (the funeral speech)",
    style: { fontSize: "1.8em", marginTop: "1.2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "OG Random Rants lived on Glitch. Then Glitch pulled the plug on free hosting. Boom, dead site.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Also, I lost motivation. The code was ancient, full of security holes, and the global rooms system was stalker-bait. Kinda sus.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent: "Main problems included:",
    style: { fontSize: "1.1em", fontWeight: "bold", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "ul",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [
      {
        element: "li",
        textContent: "No private rooms — randoms could just barge in",
        children: [],
      },
      {
        element: "li",
        textContent: "People could literally track you. Creepy much?",
        children: [],
      },
      {
        element: "li",
        textContent:
          "Auto-room system kept throwing you in crowded rooms like matchmaking in the worst game ever",
        children: [],
      },
    ],
  },

  {
    element: "h2",
    textContent: "What Came Before (Spaghetti Code Days)",
    style: { fontSize: "1.8em", marginTop: "1.2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Before Random Rants, everything was hacked together from the same spaghetti code base. GVBVDXX Chat and a few other side projects were basically clones with tweaks. Random Rants was the first big glow-up.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Back then, there weren’t even accounts. You’d just type any username, even if someone else in the room already had it, and boom — you were in. The server was a barebones script that just echoed messages back to everyone. Simple, messy, and kinda charming.",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "My school even tried to block Random Rants at one point — but they only blocked the old Glitch URL, which was already on its way down. So in the end, the block didn’t really matter. The site was already disappearing because Glitch had stopped hosting apps.",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [],
  },

  // The glitch bug rant
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "The Glitch Era: Bugs & 403s",
        style: { fontSize: "1.5em", marginTop: "1.2em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Glitch sometimes went full chaos mode — throwing 403 Forbidden errors or yelling 'Too Many Requests' when people tried to join. It made hopping into rooms a gamble. Later versions patched most of that out, so Random Rants + was way smoother.",
        style: { fontSize: "1em", marginBottom: "1em" },
        children: [],
      },
    ],
  },

  // Why not Render
  {
    element: "h2",
    textContent: "Why Not Just Reupload to Render?",
    style: { fontSize: "1.8em", marginTop: "1.2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "When Glitch killed free hosting, I could’ve just thrown Random Rants + onto Render. But the truth? The code had some sketchy security gaps. Reuploading it raw would’ve put people at risk. Protecting users mattered more than keeping it limping along.",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [],
  },

  // Open source note
  {
    element: "p",
    textContent:
      "It’s not gone-gone though — the code lives open-source on GitHub. If you’re brave (and know how to run servers), you can still spin it up yourself.",
    style: { fontSize: "1.1em", marginBottom: "1.5em", fontStyle: "italic" },
    children: [],
  },

  // For non-tech folks
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "For Non-Nerds",
        style: { fontSize: "1.5em", marginTop: "1.2em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "You don’t need to know what ‘WebSocket’ or ‘HTTP’ means. Just think of it like: one system handled live messages, another handled the normal website stuff. That’s it. Fancy words, simple vibes.",
        style: { fontSize: "1em" },
        children: [],
      },
    ],
  },
  // Evolution History
  {
    element: "h2",
    textContent: "How It All Evolved (The Full Lore)",
    style: { fontSize: "1.8em", marginTop: "1.2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Random Rants didn’t just pop out of nowhere. It’s the result of a messy chain of chat apps, each one built on top of spaghetti code from the last. Here’s the glow-up history:",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "ul",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [
      {
        element: "li",
        children: [
          { element: "strong", textContent: "Gvbvdxx Chat", children: [] },
          {
            element: "span",
            textContent:
              " — The very first version, shared on Scratch. Even the name ‘Gvbvdxx’ came from kid-me just smashing the keyboard in the Scratch username box — and the random jumble stuck with me ever since. People actually hopped on and used it, until one hacker showed up and caused chaos by stealing IPs and posting stuff that wasn’t allowed on Scratch. That ended up getting me banned for a while, but it also inspired me to start adding admin commands and improving things. The code itself was super basic and glitchy, but this was the seed of everything that came later.",
            children: [],
          },
        ],
      },
      { element: "br" },
      {
        element: "li",
        children: [
          { element: "strong", textContent: "Macre’s Chat", children: [] },
          {
            element: "span",
            textContent:
              " — A custom spin-off of gvbvdxx chat made for my friend Macre (we talked on Kosmi and Scratch). He wanted his own version of the chat site, so I built one for him. Still spaghetti, but it was the first ‘friend-requested’ chat app.",
            children: [],
          },
        ],
      },
      { element: "br" },
      {
        element: "li",
        children: [
          { element: "strong", textContent: "Random Rants", children: [] },
          {
            element: "span",
            textContent:
              " — The first version that felt like a real app. It had rooms, commands, and a lot more personality than the old ones. By the mid-final version, it even had real screen sharing, cameras, and microphones — a huge step up from the old ‘fake’ screen sharing trick that just spammed blurry images really slowly. This was also when I finally fixed the old bug from gvbvdxx Chat, so people couldn’t mess with the chat in the same way anymore. Later, after enough begging from people at school, I added the soundboard — at first you triggered sounds by typing things like [vineboom], but eventually the proper soundboard button was added.",
            children: [],
          },
        ],
      },
      { element: "br" },
      {
        element: "li",
        children: [
          { element: "strong", textContent: "Random Rants +", children: [] },
          {
            element: "span",
            textContent:
              " — The big remake. Private rooms were added to stop people from abusing commands, and the soundboard got upgraded with a volume booster. Owners (basically the admins of each room) also got new permissions, like being able to turn the soundboard on or off for everyone. The way the site worked under the hood also got a major upgrade: most commands and messages were handled on the server, usernames had to be unique, and accounts were finally real accounts instead of just a temporary name tag. On top of all that, the vibe changed too — unlike the original Random Rants where I just wrote things normally, Random Rants + ran everything through a kind of ‘rant-ification’ filter, giving the site a whole new personality and style. Security was also a lot better than before, though not perfect: accounts were about 98% safe on locked-down school computers, but a little less safe on personal devices since passwords were still stored in a simple way behind the scenes. Still, it was miles ahead of the original Random Rants in terms of protecting users.",
            children: [],
          },
        ],
      },
    ],
  },
  {
    element: "p",
    textContent:
      "Each version carried pieces of the last — sometimes the same spaghetti code, just duct-taped with improvements. Random Rants was the biggest departure, but the DNA of gvbvdxx chat is still buried deep in the history.",
    style: { fontSize: "1.1em", marginBottom: "1.5em" },
    children: [],
  },
];

var elementJSON = [
  {
    element: "div",
    className: "aboutDivCenter",
    children: randomRantsHistory,
  },
];

var pageElements = elements.createElementsFromJSON(elementJSON);
elements.appendElements(elements.body, pageElements);

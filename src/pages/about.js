require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var accountHelper = require("../accounthelper/index.js");
var dialog = require("../dialogs.js");

var randomRantsAbout = [
  // Title and intro
  require("./sitenews-notice.js"),
  {
    element: "h1",
    textContent: "About Random Rants +",
    style: { fontSize: "2.2em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "span",
    textContent: "The page nobody reads, but you should.",
    children: [],
  },
  {
    element: "p",
    textContent:
      "Random Rants + is the goofy little site that lets you hang out with your friends online. Its made for both for school escape, and online chatting.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },

  // Features
  {
    element: "h2",
    textContent: "Things you can do",
    style: { fontSize: "1.5em", marginTop: "1.2em" },
    children: [],
  },
  {
    element: "ul",
    children: [
      {
        element: "li",
        textContent:
          "Video & Voice chat - Scream loud, and make goofy faces. Just like your adverage online chats.",
        children: [],
      },
      {
        element: "li",
        textContent:
          "Screen Sharing — Only one screenshare per room, so expect battles between screensharing content.",
        children: [],
      },
      {
        element: "li",
        textContent:
          "Chat + Commands — Owners and users with ownership get special commands, list them all with \";help\".",
        children: [],
      },
      {
        element: "li",
        textContent:
          "Soundboard — Meme sounds, and goofy noises. Its all you need for laughter, unless the owner shuts it down.",
        children: [],
      },
      {
        element: "li",
        textContent:
          "Owner & Ownership permissions — Owners can give out ownership. Ownership has the same permissions as owner. Owner permissions let you edit the room settings, and run commands. Ownership users can't remove the room owner. The room owner gets to keep their permissions.",
        children: [],
      },
      {
        element: "li",
        textContent:
          "File Uploads — Drop anything you want, memes or cursed content. Whatever it is, its up to you.",
        children: [],
      }
    ],
  },

  // Privacy & Ownership
  {
    element: "h2",
    textContent: "Private & Unlisted Rooms (aka secret bases)",
    style: { fontSize: "1.5em", marginTop: "1.2em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "Every room is unlisted. The only way in is the magic URL. Share it, and boom — now your friends (or enemies) are in. Once they’re in, the room sticks in their list until they nuke it.",
    style: { fontSize: "1em", marginBottom: "0.5em" },
    children: [],
  },
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "Ownership & Control (cue dramatic music)",
        style: { fontSize: "1.5em", marginTop: "1.2em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "You’re the owner when you make a room. You can hand out ‘ownership’ like free candy, but beware: anyone with ownership powers can rename or nuke the room. The one thing they *can’t* do? Take your crown.",
        style: { fontSize: "1em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Room names only update for people in the room or those who join later. No time machines here.",
        style: { fontSize: "1em" },
        children: [],
      },
    ],
  },

  // Moderation
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "No Filters, Barely Any Moderation",
        style: { fontSize: "1.5em", marginTop: "1.2em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "We don’t censor usernames, chat messages, or display names. If you type it, people see it. Simple as that.",
        style: { fontSize: "1em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "No mute button. No ban hammer. Owners can only wipe the whole chat like sweeping crumbs off a table. That’s the vibe.",
        style: { fontSize: "1em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Owners (and co-owners) are the only ones who get to mess with commands or settings. Power trip responsibly.",
        style: { fontSize: "1em" },
        children: [],
      },
    ],
  },

  // Media and sharing
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "Open Media & Sharing (a.k.a. chaos theater)",
        style: { fontSize: "1.5em", marginTop: "1.2em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Each room has an ‘Open Media’ zone where one thing plays at a time — screen share, camera show & tell, or an embedded webpage. Yes, you’re basically fighting for the aux cord.",
        style: { fontSize: "1em", marginBottom: "0.5em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "By default, anyone can throw stuff in there. Owners can lock it down if they get sick of people spamming Shrek videos.",
        style: { fontSize: "1em", marginBottom: "0.5em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Embedded sites just open in everyone’s browser. No syncing, no magic — just chaos coordination.",
        style: { fontSize: "1em", marginBottom: "0.5em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Streams (cam, mic, screen) go straight to other people’s devices peer-to-peer. No creepy servers storing your awkward face.",
        style: { fontSize: "1em", marginBottom: "0.5em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Everything else — chat, commands, user lists — goes through WebSocket + HTTPS. Nerdy but safe.",
        style: { fontSize: "1em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "No filters on embeds or streams. If someone’s being gross, just leave and yeet the room from your list.",
        style: { fontSize: "1em", marginBottom: "1em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "⚠️ Loud sounds happen. Soundboard spam, mic peaks, random screams. Adjust volume unless you like surprise tinnitus.",
        style: {
          fontSize: "1em",
          fontWeight: "bold",
          color: "#b22222",
          marginBottom: "1em",
        },
        children: [],
      },
    ],
  },

  // Teen jokes and culture
  {
    element: "div",
    className: "yellowBoxedText",
    children: [
      {
        element: "h2",
        textContent: "Teen Jokes, Slang, & General Goofiness",
        style: { fontSize: "1.5em", marginTop: "1.2em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "This place started with middle schoolers joking around, so yeah — expect brain-melting humor.",
        style: { fontSize: "1em", marginBottom: "0.5em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Slang, cursed memes, ayo moments… it’s all in here. Most of it’s just dumb fun. Don’t take it too seriously.",
        style: { fontSize: "1em", marginBottom: "0.5em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "If something feels sus or crosses a line, just bounce. No shame in dipping.",
        style: { fontSize: "1em" },
        children: [],
      },
      {
        element: "p",
        textContent:
          "Humor hits different for everyone. Laugh at the silly stuff, roll your eyes at the cringe, and keep scrolling.",
        style: { fontSize: "1em", marginBottom: "1em" },
        children: [],
      },
    ],
  },

  // Audience
  {
    element: "h2",
    textContent: "Who This Is For",
    style: { fontSize: "1.5em", marginTop: "1.2em" },
    children: [],
  },
  {
    element: "ul",
    children: [
      {
        element: "li",
        textContent: "Students dodging homework like ninjas",
        children: [],
      },
      {
        element: "li",
        textContent: "Friends who just wanna vibe in low-effort chaos",
        children: [],
      },
      {
        element: "li",
        textContent: "People who thrive in mild-to-medium mayhem",
        children: [],
      },
      {
        element: "li",
        textContent: "Anyone pretending to ‘study’ while goofing off",
        children: [],
      },
      {
        element: "li",
        textContent: "Literally anyone who wants to chat online",
        children: [],
      },
    ],
  },
  {
    element: "p",
    textContent:
      "Random Rants + is where productivity goes to die — but in the funniest way possible. Rant, chill, and maybe start a soundboard war while looking like you’re working.",
    style: { fontSize: "1.1em", marginTop: "1.5em" },
    children: [],
  },

  // History
  {
    element: "h2",
    textContent: "The Origin Story (Random Rants OG)",
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
          " started as a scrappy chat app that somehow ran on school Chromebooks without bursting into flames.",
      },
    ],
    style: { fontSize: "1.1em", marginBottom: "0.5em" },
  },
  {
    element: "p",
    children: [
      {
        element: "em",
        textContent: "(RIP — the original site is gone now, pour one out.)",
      },
    ],
    style: { fontSize: "1em", marginBottom: "0.3em" },
  },
  {
    element: "p",
    textContent:
      "It all started in middle school when I met a guy on Scratch. Showed him a janky chat app I made called Macre’s Chat. Dude liked it.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "That dude was Im_CatmanYT. He vibed with it, got his friends using it, and told me to make a glow-up version. So I did.",
    style: { fontSize: "1.1em", marginBottom: "1em" },
    children: [],
  },
  {
    element: "p",
    textContent:
      "He wanted Google Docs colors. I gave him grayscale. He dropped meme PNGs. Boom: Random Rants v0.1 was born.",
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
    children: randomRantsAbout,
  },
];

var pageElements = elements.createElementsFromJSON(elementJSON);
elements.appendElements(elements.body, pageElements);

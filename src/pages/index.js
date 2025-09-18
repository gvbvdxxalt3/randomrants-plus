require("../cookiewarning");
require("./stylesheet.js");
var menuBar = require("../menu.js");
var elements = require("../gp2/elements.js");
var shtml = require("../safehtmlencode.js");
var audioEngine = require("../audio.js");
var accountHelper = require("../accounthelper/index.js");
var dialogs = require("../dialogs.js");

var randomDialogText = require("../randomquotes.txt");
var randomQuotes = randomDialogText.trim().split("\n");

async function fetchAsJSON(url, options) {
  var a = await fetch(url, options);
  var b = await a.json();

  return b;
}

function returnRandomValueFromArray(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}

var rainbow = [
  "#ff0000",
  "#ff6600",
  "#ffb300",
  "#ffe600",
  "#d9ff00",
  "#9dff00",
  "#55ff00",
  "#0dff00",
  "#00ff40",
  "#00ff88",
  "#00ffcc",
  "#00eeff",
  "#00aaff",
  "#0066ff",
  "#0026ff",
  "#3700ff",
  "#8800ff",
  "#dd00ff",
  "#ff00e1",
  "#ff00a6",
  "#ff006a",
  "#ff0033",
  "#ff0000",
];

var elementJSON = [
  {
    element: "div",
    className: "scrolling-container",
    gid: "scrollingContainer",
    children: [
      {
        element: "div",
        className: "scrolling-content",
        gid: "scrollingContent",
      },
    ],
  },
  {
    element: "div",
    gid: "emojiContainer",
    style: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0px",
      left: "0px",
      overflow: "hidden",
    },
  },
  {
    element: "img",
    gid: "person1",
    src: "images/person-dialog.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      left: "0px",
      pointerEvents: "none",
      userSelect: "none",
    },
  },
  {
    element: "img",
    gid: "person2",
    src: "images/person-dialog.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      right: "0px",
      transform: "scale(-1, 1)",
      pointerEvents: "none",
      userSelect: "none",
    },
  },
  {
    element: "img",
    GPWhenCreated: function (elm) {
      var anim = elm.animate(
        [
          { transform: "translateY(300px)" },
          { transform: "translateY(-10px)" },
          { transform: "translateY(0px)" },
        ],
        {
          duration: 700,
          iterations: 1,
          easing: "ease-out",
        }
      );
      anim.addEventListener("finish", () => {
        elm.animate(
          [
            { transform: "rotate(0deg)" },
            { transform: "rotate(3deg)" },
            { transform: "rotate(-3deg)" },
            { transform: "rotate(0deg)" },
          ],
          {
            duration: 600,
            iterations: Infinity,
            easing: "ease-out",
          }
        );
      });
    },
    src: "images/person1.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      left: "0px",
      pointerEvents: "none",
      userSelect: "none",
    },
  },
  {
    element: "img",
    GPWhenCreated: function (elm) {
      var anim = elm.animate(
        [
          { transform: "translateY(300px) scale(-1, 1)" },
          { transform: "translateY(-10px) scale(-1, 1)" },
          { transform: "translateY(0px) scale(-1, 1)" },
        ],
        {
          duration: 800,
          iterations: 1,
          easing: "ease-out",
        }
      );
      anim.addEventListener("finish", () => {
        elm.animate(
          [
            { transform: "rotate(0deg) scale(-1, 1)" },
            { transform: "rotate(3deg) scale(-1, 1)" },
            { transform: "rotate(-3deg) scale(-1, 1)" },
            { transform: "rotate(0deg) scale(-1, 1)" },
          ],
          {
            duration: 800,
            iterations: Infinity,
            easing: "ease-out",
          }
        );
      });
    },
    src: "images/person2.svg",
    style: {
      position: "fixed",
      bottom: "-20px",
      right: "0px",
      transform: "scale(-1, 1)",
      pointerEvents: "none",
      userSelect: "none",
    },
  },
  {
    element: "div",
    style: {
      transform: "translate(-50%, -50%)",
      position: "fixed",
      top: "calc(50% + 50px)",
      left: "50%",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      boxShadow: "0 0px 30px black",
      padding: "15px 15px",
      zIndex: "100",

      maxWidth: "90vw", // Set a maximum width based on viewport width (e.g., 90% of the viewport)
      maxHeight: "90vh",
    },
    children: [
      {
        element: "div",
        style: {
          position: "fixed",
        },
        children: [
          {
            element: "img",
            src: "images/person3.svg", //Two random rant characters (just for the home page) looking down at the text below.
            style: {
              position: "fixed",
              left: "50%",
              top: "1px",
              pointerEvents: "none",
              userSelect: "none",
              transform: "translate(-50%, -100%)",
              transformOrigin: "bottom",
            },
            GPWhenCreated: function (elm) {
              elm.animate(
                [
                  {
                    transform: "translate(-50%, -100%) scale(0, 5)",
                    opacity: 0,
                  },
                  {
                    transform: "translate(-50%, -100%) scale(1, 1)",
                  },
                ],
                {
                  duration: 1500,
                  easing: "ease-out",
                }
              );
            },
          },
        ],
      },
      require("./sitenews-notice.js"),
      {
        element: "div",
        className: "fadeIn",
        gid: "mainCenter",
        style: {
          textAlign: "center",
        },
        children: [
          {
            element: "span",
            className: "fadeIn delay-3",
            style: {
              fontSize: "40px",
              color: returnRandomValueFromArray(rainbow),
              display: "inline-block",
              wordBreak: "break-word",
            },
            innerHTML: shtml.getMessageHTML(
              returnRandomValueFromArray(randomQuotes).trim()
            ),
          },
          {
            element: "br",
          },
          {
            element: "span",
            className: "headerText bounceIn",
            gid: "mainHeader",
            textContent: "Welcome to Random Rants +",
          },
          { element: "br" },
          //For people that always look at the center of the site for stuff, here is some "useful" links that you may need.

          {
            element: "div",
            style: {
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            },
            children: [
              {
                element: "div",
                className: "button2",
                textContent: "Chat now!!",
                eventListeners: [
                  {
                    event: "click",
                    func: async function () {
                      if (!accountHelper.getCurrentValidationState()) {
                        if (
                          await dialogs.confirm(
                            "Are you sure you want to chat without an Random Rants + account?"
                          )
                        ) {
                          window.location.href = "/chat";
                        }
                      } else {
                        window.location.href = "/chat";
                      }
                    },
                  },
                ],
              },
              {
                element: "div",
                className: "button2",
                textContent: "Join a code",
                eventListeners: [
                  {
                    event: "click",
                    func: async function () {
                      if (!accountHelper.getCurrentValidationState()) {
                        if (
                          await dialogs.confirm(
                            "Are you sure you want to join someones room without an Random Rants + account?"
                          )
                        ) {
                          window.location.href = "/join";
                        }
                      } else {
                        window.location.href = "/join";
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            element: "div",
            gid: "userAccountStuffA",
            hidden: true,
            children: [
              {
                element: "div",
                style: {
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                },
                children: [
                  {
                    element: "div",
                    className: "button2",
                    textContent: "Sign In",
                    eventListeners: [
                      {
                        event: "click",
                        func: function () {
                          window.location.href = "/signin";
                        },
                      },
                    ],
                  },
                  {
                    element: "div",
                    className: "button2",
                    textContent: "Sign Up",
                    eventListeners: [
                      {
                        event: "click",
                        func: function () {
                          window.location.href = "/signup";
                        },
                      },
                    ],
                  },
                ],
              },
              { element: "br" },
            ],
          },
          {
            element: "div",
            gid: "customizeStuffDiv",
            hidden: true,
            children: [
              {
                element: "div",
                style: {
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                },
                children: [
                  {
                    element: "div",
                    className: "button2",
                    textContent: "My account & customization",
                    eventListeners: [
                      {
                        event: "click",
                        func: function () {
                          window.location.href = "/myaccount";
                        },
                      },
                    ],
                  },
                ],
              },
              { element: "br" },
            ],
          },
          {
            element: "span",
            className: "fadeIn delay-1",
            gid: "description1",
            textContent:
              "Random Rants +, made both for maximum goofyness and your digital escape from school.",
          },
          { element: "br" },
          {
            element: "span",
            className: "fadeIn delay-2",
            gid: "description2",
            textContent:
              "Talk loud as possible, play a meme sound, or type the craziest rants, it's all here.",
          },
          { element: "br" },
          {
            element: "div",
            hidden: true,
            gid: "userAccountStuffB",
            children: [
              {
                element: "span",
                className: "fadeIn delay-3",
                gid: "description3",
                children: [
                  {
                    element: "a",
                    textContent: "Sign in",
                    href: "/signin",
                  },
                  " or ",
                  {
                    element: "a",
                    textContent: "Sign up",
                    href: "/signup",
                  },
                  ", jump into a room, and rant like there is no end.",
                  " Whether its behind a Teachers back, or during research time, Random Rants + is ",
                  {
                    element: "span",
                    style: { fontWeight: "bold" },
                    textContent: "your",
                  },
                  " digital space.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

elements.appendElements(
  elements.body,
  elements.createElementsFromJSON(elementJSON)
);

var style = document.createElement("style");
style.textContent = `
  
  @font-face {
    font-family: ComicSansMS;
    src: url(COMIC.TTF);
  }
  
  .fadeIn {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s forwards;
  }
  .fadeInNoTranslate {
    opacity: 0;
    animation: fadeInNoTranslateAnim 3s forwards;
  }
  .bounceIn {
    animation: bounceIn 1.2s;
  }
  .delay-1 {
    animation-delay: 0.5s;
  }
  .delay-2 {
    animation-delay: 1s;
  }
  .delay-3 {
    animation-delay: 1.5s;
  }

  @keyframes fadeInNoTranslateAnim {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeIn {
    from {
      transform: translate(0px, 100px) scale(2, 2);
      opacity: 0;
    }
    to {
      transform: translate(0px, 80px) scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes fadeIn2 {
    from {
      transform: translate(0px, 100px) scale(-2, 2);
      opacity: 0;
    }
    to {
      transform: translate(0px, 80px) scale(-1, 1);
      opacity: 1;
    }
  }
  
  @keyframes rotating {
    0% {
      transform: translate(0px, 100px) scale(1, 1) rotate(-0.1deg);
    }
    50% {
      transform: translate(0px, 100px) scale(1showSignStuff, 1) rotate(0.1deg);
    }
    100% {
      transform: translate(0px, 100px) scale(1, 1) rotate(-0.1deg);
    }
  }
  
  @keyframes rotating2 {
    0% {
      transform: translate(0px, 100px) scale(-1, 1) rotate(-0.1deg);
    }
    50% {
      transform: translate(0px, 100px) scale(-1, 1) rotate(0.1deg);
    }
    100% {
      transform: translate(0px, 100px) scale(-1, 1) rotate(-0.1deg);
    }
  }
  
  @keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, 100% {
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`;
document.head.appendChild(style);

//Animate persons.

var person1 = elements.getGPId("person1");

var p1Animation = person1.animate(
  [
    { transform: "translateY(300px)" },
    { transform: "translateY(-10px)" },
    { transform: "translateY(0px)" },
  ],
  {
    duration: 700,
    iterations: 1,
    easing: "ease-out",
  }
);
p1Animation.addEventListener("finish", () => {
  person1.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)  scale(1.2, 0.8) rotate(-2deg)" },
      { transform: "translateY(10px) scale(1.5, 0.6) rotate(2deg)" },
      { transform: "translateY(0px)" },
    ],
    {
      duration: 700,
      iterations: Infinity,
      easing: "ease-out",
    }
  );
});

var person2 = elements.getGPId("person2");

var p2Animation = person2.animate(
  [
    { transform: "translateY(300px) scale(-1, 1)" },
    { transform: "translateY(-10px) scale(-1, 1)" },
    { transform: "translateY(0px) scale(-1, 1)" },
  ],
  {
    duration: 900,
    iterations: 1,
    easing: "ease-out",
  }
);

p2Animation.addEventListener("finish", () => {
  person2.animate(
    [
      { transform: "translateY(0px) scale(-1, 1)" },
      { transform: "translateY(-10px) scale(-1.2, 0.8) rotate(-2deg)" },
      { transform: "translateY(10px) scale(-1.5, 0.6) rotate(2deg)" },
      { transform: "translateY(0px) scale(-1, 1)" },
    ],
    {
      duration: 800,
      iterations: Infinity,
      easing: "ease-out",
    }
  );
});

//Floating emojis and behaivor

const emojiContainer = elements.getGPId("emojiContainer");

const EMOJIS = ["😂", "🤣", "💀", "🤨", "😎", "🤪", "🤨", "😭", "🤫"];
var EMOJISound = null;

(async function () {
  var soundURLS = await fetchAsJSON("external/uisound.json");
  EMOJISound = await audioEngine.loadSoundFromURL(soundURLS.select);
})();

const MAX_EMOJIS = 250;
const INITIAL_EMOJIS = 60;

function createFloatingEmoji(spawnAnywhere = false, spawnAt) {
  const emoji = document.createElement("div");
  emoji.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  emoji.style.position = "absolute";
  emoji.style.fontSize = `${200 + Math.random() * 100}%`;

  const startX = Math.random() * window.innerWidth;
  const offsetX = (Math.random() - 0.5) * 100;

  const startY = spawnAnywhere
    ? Math.random() * window.innerHeight
    : window.innerHeight + 30 + Math.random() * 50;
  if (spawnAt) {
    startX = spawnAt.x;
    startY = spawnAt.y;
  }
  const endY = -50;

  emoji.style.left = `${startX}px`;
  emoji.style.top = `${startY}px`;
  emoji.style.opacity = `${0.6 + Math.random() * 0.4}`;
  emoji.style.transformOrigin = "center";
  emoji.style.cursor = "pointer";
  emoji.style.userSelect = "none";
  emoji.style.outline = "none";
  emoji.style.willChange = "transform, top, left";
  var animationRunning = true;
  if (spawnAnywhere) {
    var anim = emoji.animate(
      [{ transform: "scale(0)" }, { transform: "scale(1)" }],
      {
        duration: 350,
        iterations: 1,
        easing: "ease-out",
      }
    );
  }

  emoji.onclick = function () {
    animationRunning = false;
    if (audioEngine.running) {
      var sound = new audioEngine.Player(EMOJISound);
      sound.play();
    }
    emoji.onclick = null;
    emoji.style.pointerEvents = "none";
    var animation = emoji.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(3.5)", opacity: "0", filter: "brightness(5)" },
      ],
      {
        duration: 350,
        iterations: 1,
        easing: "ease-out",
      }
    );
    animation.addEventListener("finish", () => {
      emoji.remove();
    });
  };

  emojiContainer.appendChild(emoji);

  let startTime = performance.now();
  let lastTimestamp = startTime;
  const duration = 3000 + Math.random() * 1000;
  const SPEED = 100;
  var offset = Math.random() * 5;

  function animate() {
    if (!animationRunning) {
      return;
    }
    if (document.visibilityState !== "visible") {
      // pause and wait until visible again
      requestAnimationFrame(animate);
      return;
    }

    const now = performance.now();
    const elapsed = now - startTime;
    const distanceMoved = (elapsed / 1000) * SPEED;
    const currentY = startY - distanceMoved;
    const currentX = startX + offsetX * (elapsed / duration);

    emoji.style.left = `${currentX}px`;
    emoji.style.top = `${currentY}px`;
    emoji.style.transform = `rotate(${Math.sin(elapsed / 400 + offset) * 10}deg)`;

    if (currentY < endY) {
      emoji.remove();
    } else {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Spawn a bunch initially across the screen
for (let i = 0; i < INITIAL_EMOJIS; i++) {
  createFloatingEmoji(true);
}

// New emojis rise from the bottom after
setInterval(() => {
  if (
    document.visibilityState === "visible" &&
    emojiContainer.children.length < MAX_EMOJIS
  ) {
    createFloatingEmoji(false);
  }
}, 100);

//Sign in and sign up stuff shows when not logged in.

var userAccountStuffA = elements.getGPId("userAccountStuffA");
var userAccountStuffB = elements.getGPId("userAccountStuffB");
var customizeStuffDiv = elements.getGPId("customizeStuffDiv");

function showSignStuff() {
  userAccountStuffA.hidden = false;
  userAccountStuffB.hidden = false;
}

(async function () {
  var validated = await accountHelper.checkSessionCookie();
  if (!validated) {
    showSignStuff();
  } else {
    customizeStuffDiv.hidden = false;
  }
})();

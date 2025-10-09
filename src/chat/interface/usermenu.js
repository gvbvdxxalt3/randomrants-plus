var elements = require("../../gp2/elements.js");
var accountHelper = require("../../accounthelper/index.js");

var elementJSON = [
  {
    element: "div",
    className: "userMenuBar",
    gid: "userMenuBar",
    children: [],
  },
];

elements.appendElements(
  elements.getGPId("menuBar"),
  elements.createElementsFromJSON(elementJSON)
);

var signInButton = {
  element: "div",
  className: "menuBarItem",
  textContent: "Sign in",
  gid: "menu_signIn",
};
var signUpButton = {
  element: "div",
  className: "menuBarItem",
  textContent: "Sign up",
  gid: "menu_signUp",
};

var myAccountButton = {
  element: "div",
  className: "menuBarItem",
  gid: "menu_myAccount",
};

function handleSignedOutAccountButtons() {
  var params = new URLSearchParams(window.location.search);
  var signInButton = elements.getGPId("menu_signIn");

  signInButton.addEventListener("click", () => {
    if (params.get("href")) {
      window.location.href = "/signin?href=" + params.get("href");
      return;
    }
    window.location.href = "/signin";
  });

  var signUpButton = elements.getGPId("menu_signUp");

  signUpButton.addEventListener("click", () => {
    if (params.get("href")) {
      window.location.href = "/signup?href=" + params.get("href");
      return;
    }
    window.location.href = "/signup";
  });
}

function handleUserAccountButtons() {
  var myAccountButton = elements.getGPId("menu_myAccount");

  myAccountButton.addEventListener("click", () => {
    window.location.href = "/myaccount";
  });
}

var validated = accountHelper.getCurrentValidationState();
if (validated) {
  myAccountButton = {
    element: "div",
    gid: "menu_myAccount",
    className: "menuBarItemUsername",
    style: {
      display: "flex",
      marginLeft: "auto",
    },
    children: [
      {
        element: "img",
        style: {
          outline: "none",
          borderRadius: "20px",
          backgroundColor: "#969696",
          imageRendering: "pixelated",
          top: "0px",
          width: "40px",
          height: "40px",
        },
        src: accountHelper.getProfilePictureURL(validated.username),
      },
      {
        element: "div",
        style: {
          display: "flex",
          flexDirection: "column",
        },
        children: [
          {
            element: "span",
            style: {
              alignContent: "center",
              fontWeight: "bold",
              color: validated.color || "#000000",
            },
            textContent: validated.displayName,
          },
          {
            element: "span",
            style: {
              alignContent: "center",
              color: validated.color || "#000000",
              fontSize: "10px",
            },
            textContent: validated.username,
          },
        ],
      },
      {
        element: "div",
        style: {
          width: "10px",
        },
      },
    ],
  };
  elements.appendElements(
    elements.getGPId("menuBar"),
    elements.createElementsFromJSON([myAccountButton])
  );
  handleUserAccountButtons();
} else {
  elements.appendElements(
    elements.getGPId("menuBar"),
    elements.createElementsFromJSON([signInButton, signUpButton])
  );
  handleSignedOutAccountButtons();
}

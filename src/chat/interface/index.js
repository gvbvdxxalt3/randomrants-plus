var elements = require("../../gp2/elements.js");
var accountHelper = require("../../accounthelper");
require("./loadingscreen.js");

(async function () {
  var validated = await accountHelper.checkSessionCookie();
  require("./chat.js");
})();

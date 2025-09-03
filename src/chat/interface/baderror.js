function handleErrors(e) {
	document.body.style.color = "red";
	document.body.style.background = "black";
	document.body.style.fontFamily = "Comic Sans MS, sans-serif";

	// Glitch.me is gone, RIP, but hey, chaos finds a way.
	document.body.innerHTML =
		"<h1>⚠️ OH NO. Random Rants+ yeeted itself off a cliff.</h1>" +
		"<p>The site faceplanted harder than a group chat argument at 3AM. Possible causes of this dumpster fire:</p>" +
		"<hr>" +
		"<ul>" +
		"<li>🔁 <strong>Smash that refresh button.</strong> 90% of tech support is just ‘did you try turning it off and on again?’</li>" +
		"<li>🍪 <strong>Cookies & cache:</strong> Your browser might be hoarding stale crumbs. Toss them out. Nobody likes moldy cookies.</li>" +
		"<li>📶 <strong>WiFi limping along?</strong> If your internet moves slower than a sloth in molasses, some files just didn’t show up to work today.</li>" +
		"<li>🚷 <strong>403 Forbidden?</strong> Yeah, free hosting services sometimes gatekeep IPs like a bouncer on a power trip. VPN won’t always save you.</li>" +
		"<li>📈 <strong>Server popularity contest:</strong> Too many users spamming requests? Congrats, you helped DDoS our free-tier hosting.</li>" +
		"<li>🧑‍💻 <strong>Developer mode:</strong> Pop open the console if you want to see *actual* error logs instead of this comedy routine.</li>" +
		"<li>🤖 <strong>AI wrote this code:</strong> Sometimes it nails it. Sometimes it builds spaghetti. Guess which one you just ran into.</li>" +
		"<li>💻 <strong>Localhost test fail:</strong> Dear future Random Rants+ devs: did you *forget to run the server again*? Because this has ‘oops, localhost only’ energy written all over it.</li>" +
		"<li>❌ <strong>Your school’s firewall gremlins (yes, even you Cisco Umbrella):</strong> Sometimes it freaks out over ‘new’ domains and blocks them temporarily—usually unblocks itself after a few days once it calms down. If it’s blocked for real though, congrats, your school just decided Random Rants+ is illegal fun. For the record: <code>github.io</code> handles all the UI sounds + soundboard magic, while <code>onrender.com</code> runs the main site and helps your device ‘talk’ to others for live features. So if one gets nuked, expect missing audio chaos or the entire site faceplanting. And if you’re not on Cisco? You’re still at the mercy of whatever random filter your IT overlords bow down to.</li>" +
		"</ul>" +
		"<br>" +
		"<button onclick='window.location.reload()'>🔄 Rage-Refresh</button>" +
		' <button onclick=\'window.open("https://github.com/random-rants-chat/randomrants-plus/issues", "_blank")\'>🐛 Yeet a Bug Report</button>' +
		"<p><i>If it’s still broken, congrats—you’ve unlocked ‘ULTRA CHAOS MODE.’ Achievement unlocked: suffering.</i></p>" +
		"<hr>" +
		"<pre style='white-space: pre-wrap; word-break: break-word; background:#222; color:#fff; padding:10px; border-radius:10px; font-size: 14px;'>" +
		"Error details:\n" +
		e +
		"</pre>";

	console.error("🚨 Random Rants+ imploded spectacularly:\n", e);
}

module.exports = handleErrors;

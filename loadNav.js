/* 
 *loads nav to .html files withouth having to manually copy paste again and again
 *to use:
 * - pastes : <script src="/nav/loadNav.js"></script>
 **/

Promise.all([
	//get nav elements from /nav folder
	fetch("/nav/nav.js").then((Data) => Data.text()),
	fetch("/nav/nav.html").then((Data) => Data.text()),
	fetch("/nav/nav.css").then((Data) => Data.text())
])
	.then(([Js,Html,Css]) => {

		let content = Js + Html + Css;

		//create shadow
		let shadow = document.body.attachShadow({mode: "open"});
		shadow.innerHTML = content;
	})
	.catch((error) => alert(error))
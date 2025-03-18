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
		let navContainer = document.createElement("div");
		document.body.prepend(navContainer);
		let content = "<style>\n"+Css+"</style>\n"+Html+"<script>\n"+Js+"</script>";

		//create shadow
		let shadow = navContainer.attachShadow({mode: "open"});
		shadow.innerHTML = content;
	})
	.catch((error) => console.log(error))

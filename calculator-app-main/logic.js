const display = document.getElementById("screenOutput");

let buttons = Array.from(document.getElementsByClassName("number"));

buttons.map((button) => {
	button.addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "RESET":
				if (display.innerText) {
					display.innerText = "";
				}
				break;
			case "DEL":
				if (display.innerText)
					display.innerText = display.innerText.slice(0, -1);
				break;
			case "=":
				display.innerText = eval(display.innerText);
				if (display.innerText == "undefined") {
					display.innerText = "";
				}
				break;
			case "":
				display.innerText = "";
				break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});

let theme1 = document.getElementById("one");
let theme2 = document.getElementById("two");
let theme3 = document.getElementById("three");
let body = document.body;

function themePicker() {
	let themes = Array.from(document.getElementsByName("on"));
	themes.map((theme) => {
		if (theme.checked == true) {
			if (theme.value == "theme2") {
				console.log(theme);
			}
		}
	});
}

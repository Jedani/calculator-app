const display = document.getElementById("screenOutput");

let buttons = Array.from(document.getElementsByClassName("number"));

buttons.map((button) => {
	button.addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "RESET":
				if (display.innerText) display.innerText = "";
				break;
			case "DEL":
				if (display.innerText)
					display.innerText = display.innerText.slice(0, -1);
				break;
			case "=":
				display.innerText = eval(display.innerText);
				break;

			default:
				display.innerText += e.target.innerText;
		}
	});
});

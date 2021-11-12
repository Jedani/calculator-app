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
				display.innerText = eval(display.innerText).toFixed(2);
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

let themeOne = document.getElementById("one");
let themeTwo = document.getElementById("two");
let themeThree = document.getElementById("three");
let body = document.body;

themeOne.onclick = () => {
	if (body.classList == "themeTwo") {
		body.classList.replace("themeTwo", "themeOne");
	} else if (body.classList == "themeThree") {
		body.classList.replace("themeThree", "themeOne");
	}
};
themeTwo.onclick = () => {
	if (body.classList == "themeOne") {
		body.classList.replace("themeOne", "themeTwo");
	} else if (body.classList == "themeThree") {
		body.classList.replace("themeThree", "themeTwo");
	}
};
themeThree.onclick = () => {
	if (body.classList == "themeOne") {
		body.classList.replace("themeOne", "themeThree");
	} else if (body.classList == "themeTwo") {
		body.classList.replace("themeTwo", "themeThree");
	}
};

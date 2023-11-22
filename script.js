//@ts-check
/** @type {string} */
let result;
/** @type {string} */
let isit;
console.log(Date.now(), "hello");
let checkbox = document.getElementById("mycheckbox");
console.log(checkbox);
if (checkbox) {
	checkbox.addEventListener("change", onChange);
}

function onChange() {
	if (!checkbox) return;

	console.log(Date.now(), "onChange");
	if (checkbox.checked) {
		result = " Check box is checked. ";
		console.log(result);
		isit = "is";
	} else {
		result = " Check box is not checked. ";
		console.log(result);
		isit = "isn't";
	}
	const paragraph = document.getElementById("text-to-say");
	if (!paragraph) return;

	paragraph.innerHTML = `The checkbox ${isit} checked`;
}

const sb = /** @type {HTMLSelectElement} */ (
	document.querySelector("#weather")
);

sb.addEventListener("change", (e) => {
	console.log(e.target.selectedOptions[0].value);
});

/* function validate() {
 var ddl = document.getElementById("weather") as HTMLSelectElement;
 var selectedValue = (<HTMLScriptElement>ddl.options[ddl.selectedIndex]).text;
    if (selectedValue == "sun"){
    console.log("sun is warm and makes you happy");
   }
}*/

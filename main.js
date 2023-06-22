let cnt = document.getElementById("container");

let crtBtn = document.getElementById("create");
crtBtn.addEventListener("click", function () {
	let array = ["tamil", "english", "maths", "science", "social", "total", "average"];
	for (let index = 0; index < 7; index++) {
		let inputs = document.createElement('input');
		inputs.id = array[index];
		inputs.className = array[index];
		inputs.placeholder = array[index];
		cnt.append(inputs);
	}
});

let avgBtn = document.getElementById("avg");
avgBtn.addEventListener("click", function () {

	let tamilMark = parseInt(document.getElementsByClassName("tamil")[0].value);
	let englishMark = parseInt(document.getElementsByClassName("english")[0].value);
	let mathsMark = parseInt(document.getElementsByClassName("maths")[0].value);
	let scienceMark = parseInt(document.getElementsByClassName("science")[0].value);
	let socialMark = parseInt(document.getElementsByClassName("social")[0].value);

	total = tamilMark + englishMark + mathsMark + scienceMark + socialMark;

	let totEle = document.getElementsByClassName("total")[0];
	totEle.value = total;
	// console.log(totEle)

	let avgEle = document.getElementsByClassName("average")[0];
	avgEle.value = (total / 5);

	let aveg = (total / 5);
	let res = document.getElementById("result");
	// console.log(averageValue);

	if (aveg >= 90) {
		res.innerText = "You Got O Grade";
	}
	else if (aveg >= 80 && aveg <= 89) {
		res.innerText = "You Got A Grade";
	}
	else if (aveg >= 70 && aveg <= 79) {
		res.innerText = "You Got B Grade";
	}
	else if (aveg >= 60 && aveg <= 69) {
		res.innerText = "You Got C Grade";
	}
	else if (aveg >= 50 && aveg <= 59) {
		res.innerText = "You Got D Grade";
	}
	else {
		res.innerText = "You are Unfit";
	}

});
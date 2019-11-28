console.log("Hello");

// Булев тип
var bool = true // true or false, да / нет, 1 / 0

// Числов
var num = 4 // число 4.1232

// Строка
var strNew = "Alice";

// Массив
var ourArray = ["Danil", 376, false, [1, 2376], strNew];

showMe();

// Object
var human = {
	name: "Danil",
	age: 30,
	box: ["Danil", 376, false, [1, 2376], strNew]
}

ourArray.push(human);


function showMe(word, word2) {
	console.log("inside showMe");
	console.log("Your word is: " + word);
	console.log(word2);
}

function summa(a, b) {
	var result = a + b;
	console.log("Your summ is " + result);
	return result;
}



var calc__startBtn = document.querySelector(".calc__startBtn");

calc__startBtn.addEventListener("click", calculator);
calc__startBtn.addEventListener("mouseover", function(e) {
	console.log("m over");
});

calc__startBtn.addEventListener("mouseout", function(event){
	console.log("m out");
	console.log(event.target);
});

document.body.addEventListener('click', function(event){
	console.log("body click");
	console.log(event.target);
	var target = event.target;
	target.style.color = getRandomColor();
	target.style.backgroundColor = getRandomColor();

});

function calculator() {
	var calc__num1 = document.querySelector(".calc__num1");
	var calc__num2 = document.querySelector(".calc__num2");
	var calc__result = document.querySelector(".calc__result");

	console.log(calc__num1.value);
	console.log(calc__num2.value);

	var val1 = parseFloat(calc__num1.value);
	var val2 = parseInt(calc__num2.value);

	calc__result.textContent = summa(val1, val2);
}

calculator();
// 0. Находим нужные html-узлы
// 1. Считываем значения input (узнаем введеные цифры)
// 2. Запускаем функцию подсчёта, передв в неё нужные введенные цифры
// 3. Полученный результат выводим на сайт

// Для запуска функции нужен слушатель события (тип события - клик)

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // return color;
}



// 1 Задание
// changeMainBg()

function changeMainBg(color) {
	var body = document.querySelector("body")

	body.style.backgroundColor = color;
}



// 2 задание
var treugolnik = document.querySelector(".treugolnik");
treugolnik.addEventListener('click', function(e) {
	moveToRight("100px");
});


function moveToRight(shift) {


	if (treugolnik.style.marginLeft == "") {
		//то мы задаём отступ как 0
		treugolnik.style.marginLeft = 0;
	}

	var currentElShift = parseInt(treugolnik.style.marginLeft);
	console.log(currentElShift);
	var newShift = currentElShift + parseInt(shift);
	console.log(newShift);
	treugolnik.style.marginLeft = newShift  + "px";

	// 1. Узнать текущий сдвиг
	// 2. По клику - свдигаем элемент на Х пикселей. (Сдвигаем - означает получить текущий сдвиг в пикселях и прибавить новое значение)
}



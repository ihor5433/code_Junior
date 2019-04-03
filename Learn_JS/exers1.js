var location1 = 3;
var location1 = 4;
var location1 = 5;
var guess; // координаты выстрела
var hits = 0;
var guesses = 0;
var isSunk = false; // станет true когда кораблю потонет
while (isSunk == false); {
guess = prompt("Введите точку выстрела (1-6)");
if (guess < 0 || guess > 6  ) {
	alert ('Выберите правильный номер');
} else {
	guesses = guesses + 1;
	if (guess == location1 || guess == location2 || guess == location3) {
	hits = hits + 1;

		if (hits == 3) {
			isSunk = true;
	alert("Ты потопил корабль")
			 }
		}
	}
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
				"which means your shooting accuracy was " + (3/guesses);
alert(stats);
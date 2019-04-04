function f1() {
	var a=document.getElementById('stach').value;
	a = parseInt(a);
	var p=document.getElementById("out")
	percent= (a>=0 && a<=3) ? "Надбавка 0%" :
			 (a>=4 && a<=10) ? "Надбавка 10%" :
			( a>=11 && a<=20) ? "Надбавка 20%" :
			 (a>=21) ? "Надбавка 25%" : "Неправильный стаж"
	p.innerHTML = (percent);
} 
function result() {
    var a, b, c;
    c = document.getElementById('out');
    a = document.getElementById('num1').value;
    a = parseInt(a);
    b = document.getElementById('num2').value;
    b = parseInt(b);
    suma = (a>b) ? 'Первое число больше второго' :
    (a < b) ? 'Первое число меньше второго' : 'Числа одинаковые';
    c.innerHTML = (suma);
   }




  /* if (a > b) {
        c.innerHTML = 'Первое число больше второго';

    } else if (a < b) {

        c.innerHTML = 'Первое число меньше второго';
    }  else {
    	c.innerHTML = 'Числа одинаковые';
    }
   }*/
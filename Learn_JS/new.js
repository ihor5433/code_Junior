function result() {
    var a, b, p;
    c = document.getElementById('out');
    a = document.getElementById('num1').value;
    a = parsentInt(a);
    b = document.getElementById('num2').value;
    b = parseInt(b);
    if (a > b) {
        p.innerHTML = 'Первое число больше второго';

    } else if (a < b) {

        p.innerHTML = 'Первое число меньше второго';
    }
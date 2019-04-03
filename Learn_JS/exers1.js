document.getElementById('check').onclick = function() {
        let log = document.getElementById('login').value;
        let pass = document.getElementById('password').value;
        let result = document.getElementById('result');
     	suma = (log == 'ivan' && pass1 == '334455') ? 'Вход разрешен' :
            (log == 'alex' && pass == '777') ? 'Вход разрешен' : 
            (log == 'petr' && pass == 'b5678') ? 'Вход разрешен' : 'Ошибка входа';
     	result.innerHTML = (suma);

}





// result.innerHTML = (check);




  
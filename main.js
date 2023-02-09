const digitos = document.querySelector('.digitos');
const operatorGrid = document.querySelector('.operatorGrid');
var count = [];
var numbers = [];

digitos.style.setProperty('--grid-rows', 3); //this one create the number buttons
digitos.style.setProperty('--grid-cols', 3);
  for (c = 0; c < 12; c++) {                 
    var cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.textContent = c+1;
    digitos.appendChild(cell); 
    if (c==9){cell.textContent = '0'}
    if (c==10){cell.textContent = '.'}
    if (c==11){cell.textContent = 'C'}
  };

  operatorGrid.style.setProperty('--grid-rows', 5); //this one create the operator buttons
  operatorGrid.style.setProperty('--grid-cols', 1);
    for (c = 0; c < 5; c++) {                       
      var cell = document.createElement('div');
      cell.classList.add('operators');
      operatorGrid.appendChild(cell); 
      if (c==0){cell.textContent = '+'}
      if (c==1){cell.textContent = '-'}
      if (c==2){cell.textContent = '*'}
      if (c==3){cell.textContent = '/'}
      if (c==4){cell.textContent = '='}
    };screenLeft
    
    var button = document.getElementsByClassName('grid-item'); // this code read and and print in result  screen
    for (var i = 0 ; i < button.length; i++) {
      button[i].addEventListener('click', function (e) {

        var newnum=e.target.innerHTML;
        if(newnum === '.' && count[0] === '.'){newnum = ''}
        count.push(newnum);
        console.log('count '+count+' count.length '+count.length);

        var print = parseFloat(count.join('')); // join and turn to float, take the first dot the otherones no!!!
        console.log('print '+print);
        numbers[0]=print; // store the first number to be calculated
        console.log(numbers);

        if(e.target.innerHTML == '.'&& document.getElementById("result").innerHTML === '0'){ print = 0;} // no print NaN in the screen 
        document.getElementById("result").innerHTML = print;

        

        if(e.target.innerHTML == 'C'){
          count = [];
          document.getElementById("result").innerHTML = 0;
        }
      });
   }
  

const digitos = document.querySelector('.digitos');
const operatorGrid = document.querySelector('.operatorGrid');
var temporalCero = []; // gets every number clicked
var numbers = []; // contain first number, operator and second number

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
    };

    var buttonOper = document.getElementsByClassName('operators'); //read operators grid
    for (var i = 0 ; i < buttonOper.length; i++) {
      buttonOper[i].addEventListener('click', function  calculatorOper (e) { // create function to recall it
        temporalCero = [];
        resultScreen(e.target.innerHTML);
        
        if(e.target.innerHTML == '='){ // show the result after click '=' <---------------------------------------------------
          console.log('inside = ' + numbers[1]);
          if(numbers[1] == '+'){var result = numbers[0] + numbers[2];}
          if(numbers[1] == '-'){result=numbers[0] - numbers[2];}
          if(numbers[1] == '*'){result=numbers[0] * numbers[2];}
          if(numbers[1] == '/'){result=numbers[0] / numbers[2];}
          resultScreen(result);
          numbers[0] = result;
        }else{numbers[1]=e.target.innerHTML;} // store the operator <---------------------------------------------------------
      });
    }
    
    function resultScreen(value){ // show everything in the screen result
      document.getElementById("result").innerHTML = value;
    }
    
    var button = document.getElementsByClassName('grid-item'); //read numbers grid
    for (var i = 0 ; i < button.length; i++) {
      button[i].addEventListener('click', function  calculator (e) { // create function calculator to recall it

        var newnum=e.target.innerHTML;
        if(newnum === '.' && temporalCero.includes('.')==true){calculator()}//only read one dot else recall calculator()
        
        temporalCero.push(newnum); // push evey new digit
        var temporal = parseFloat(temporalCero.join('')); // join and turn to float, take the first dot the otherones no!!!

        if(numbers.length >= 2) {
          numbers[2]=temporal; // store the second number to be calculated  <---------------------------------------------------------
          console.log('filling third box '+numbers);
        }else{
          numbers[0]=temporal; // store the first number to be calculated  <---------------------------------------------------------
          console.log('filling first box '+numbers);  
         }

        if(e.target.innerHTML === '.' && document.getElementById("result").innerHTML === '0'){ temporal = 0;} // no print NaN in the screen 
        resultScreen(temporal);

        if(e.target.innerHTML == 'C'){
          temporalCero = [];
          temporal = 0;
          numbers = [];
          resultScreen(0);
        }
      });
    }


  

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

    function operations (){
      console.log('inside operationss ' + numbers[1]);
      if(numbers[1] == '+'){var result = numbers[0] + numbers[2];}
      if(numbers[1] == '-'){result = numbers[0] - numbers[2];}
      if(numbers[1] == '*'){result = numbers[0] * numbers[2];}
      if(numbers[1] == '/'){result = numbers[0] / numbers[2];}
      result = parseFloat(result);
      var xx= result.toString().split('');
      //xx = xx.split('');                    xx.length>=5 || 
      //console.log('longgg ' +xx)
      if (xx.includes('.') === true ){result = result.toFixed(2);}else{result = result.toFixed();}  
      return (result);
    }
    
    function resultScreen(value){ // show everything in the screen result
      if (Number.isNaN(value) === true // avoid to show some errors
          || typeof value === 'undefined' 
          || value === Infinity)
          { value = 0; } 
          var xx = numbers[1];
          
      document.getElementById("result").innerHTML = value;
    }
    
    var buttonOper = document.getElementsByClassName('operators'); //read operators grid
    for (var i = 0 ; i < buttonOper.length; i++) {
      buttonOper[i].addEventListener('click', function  calculatorOper (e) { // create function to recall it
        temporalCero = [];
        resultScreen(e.target.innerHTML);
        
        if(e.target.innerHTML == '='){ // show the result after click '=' <---------------------------------------------------
          operations();
          var result = operations();
          resultScreen(result);
          numbers[0] = result;
          temporalCero = []; // celan all var and start a new operation
          temporal = 0;
          numbers = [];
        }else{ // show result and continued with nex operation 
          operations();
          var result = operations();
          numbers[1]=e.target.innerHTML; // store the operator <---------------------------------------------------------
          if(numbers.length <= 2) { // read tthe very first operations else continued
            resultScreen(numbers[0]);
            return;
          } else {
            resultScreen(result);
            numbers[0] = result;
          }
        }
      });
    }

    var button = document.getElementsByClassName('grid-item'); //read numbers grid
    for (var i = 0 ; i < button.length; i++) {
      button[i].addEventListener('click', function  calculator (e) { // create function calculator to recall it

        var newnum=e.target.innerHTML;
        if(newnum === '.' && temporalCero.includes('.')==true){calculator()}//only read one dot else recall calculator()
        
        temporalCero.push(newnum); // push every new digit
        var temporal = parseFloat(temporalCero.join('')); // join and turn to float, take the first dot the otherones no!!!

        if(numbers.length >= 2) { // store the second number to be calculated  <--------------------------------------------------
          numbers[2]=temporal; 
          console.log('filling third box '+numbers);
        }else{
          numbers[0]=temporal; // store the first number to be calculated  <------------------------------------------------------
          console.log('filling first box '+numbers);  
         }

         resultScreen(temporal);

        if(e.target.innerHTML == 'C'){
          temporalCero = [];
          temporal = 0;
          numbers = [];
          resultScreen(0);
        }
      });
    }


  

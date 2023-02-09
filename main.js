const digitos = document.querySelector('.digitos');
const operatorGrid = document.querySelector('.operatorGrid');
const count=[];

digitos.style.setProperty('--grid-rows', 3);
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

  operatorGrid.style.setProperty('--grid-rows', 5);
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

    var data = document.getElementsByClassName('grid-item');
    for (var i = 0 ; i < data.length; i++) {
      data[i].addEventListener('click', function (e) {
      console.log('digitos ' +e.target.innerHTML);
      //count.push(data.innerHTML);
      //e.target.style.backgroundColor = 'blue';

      });
   }
  

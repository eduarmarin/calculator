const digitos = document.querySelector('.digitos');

digitos.style.setProperty('--grid-rows', 3);
digitos.style.setProperty('--grid-cols', 3);
  for (c = 0; c < 12; c++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.textContent = c+1;
    digitos.appendChild(cell); 
    if (c==9){cell.textContent = '*'}
    if (c==10){cell.textContent = '.'}
    if (c==11){cell.textContent = 'C'}
  };



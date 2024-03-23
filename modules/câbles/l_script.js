const leftPoints = document.querySelectorAll('.left');
const rightPoints = document.querySelectorAll('.right');
let lines = []; // Array to store lines

leftPoints.forEach((point, index) => {
  point.style.top = `${10 + index * 15}%`; // Espacement vertical entre les points
  point.addEventListener('click', handleClick);
});

rightPoints.forEach((point, index) => {
  point.style.top = `${10 + index * 15}%`; // Espacement vertical entre les points
  point.addEventListener('click', handleClick);
});

function handleClick() {
  const activeLeftPoint = document.querySelector('.left.active');
  const activeRightPoint = document.querySelector('.right.active');
  
  if (activeLeftPoint && activeRightPoint) {
    // Si des points sont déjà actifs, désactivez-les
    activeLeftPoint.classList.remove('active');
    activeRightPoint.classList.remove('active');
  }
  
  this.classList.add('active');
  
  if (activeLeftPoint && !activeRightPoint) {
    // Si un point de chaque côté est actif, dessinez la ligne
    const line = drawLine(activeLeftPoint, this);
    lines.push(line); // Ajoute la ligne à l'array des lignes
  }
}

function drawLine(startPoint, endPoint) {
  const startX = startPoint.offsetLeft + startPoint.offsetWidth / 2;
  const startY = startPoint.offsetTop + startPoint.offsetHeight / 2;
  const endX = endPoint.offsetLeft + endPoint.offsetWidth / 2;
  const endY = endPoint.offsetTop + endPoint.offsetHeight / 2;

  const lengthX = endX - startX;
  const lengthY = endY - startY;
  const length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

  const angle = Math.atan2(lengthY, lengthX) * 180 / Math.PI;

  const line = document.createElement('div'); // Crée un élément div pour la ligne
  line.classList.add('line'); // Ajoute la classe 'line'
  line.style.width = length + 'px';
  line.style.height = '2px';
  line.style.left = startX + 'px';
  line.style.top = startY + 'px';
  line.style.transform = 'rotate(' + angle + 'deg)';
  document.body.appendChild(line); // Ajoute la ligne au body

  const lineOffsetY = (startPoint.offsetHeight - line.offsetHeight) / 2;
  line.style.top = (startY + lineOffsetY) + 'px';
  
  return line; // Retourne la ligne créée
}

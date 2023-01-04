const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.parentNode.removeChild(mainElement);
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const name = 'Demarcus';
newHeader.innerHTML = `${name} is the champion`;

document.body.appendChild(newHeader);
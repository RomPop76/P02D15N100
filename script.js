// Parametry
let activeElement = 0;

// Pobieramy 4 elementy, na których pracujemy
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

// Informacje w tablicach o elementach podmienianych
const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Zofia Paluch', 'Zdzisław Dyrma', 'Ryszard Ochódzki', ];
const profession = ['Programista JS', 'UX i UI designer', 'Frontend developer'];

function changeElement() {
    activeElement++;
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = profession[activeElement];
}

if activeElement ==2

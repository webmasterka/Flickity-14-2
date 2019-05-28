'use strict';
//GLOBAL VARIABLES 

const templateList = document.getElementById('template-product-list').innerHTML;
const results = document.getElementById('result');
let listItems = '';
let coordinates = [];
const elem = document.querySelector('.main-carousel');
const progressBar = document.querySelector('.progress-bar')
const button = document.getElementById('button');

// HTML TEMPLATE

Mustache.parse(templateList);

for (let i = 0; i < productsData.length; i++) {
  listItems += Mustache.render(templateList, productsData[i]);
  coordinates.push(productsData[i].coords);
}

results.insertAdjacentHTML('beforeend', listItems);

// CAROUSEL

const flkty = new Flickity(elem, {
  // options
  hash: true,
  pageDots: false,
  cellAlign: 'left',
  contain: true
});

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

button.addEventListener('click', function () {
  flkty.select(0)
});


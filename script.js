const searchBlock = document.querySelector('.search-block')
const search = document.querySelector('.search-button')

search.addEventListener('click', () => {
  searchBlock.classList.toggle('active-search')

  var bodyElement = document.body;

  bodyElement.classList.toggle('toggle');


});

const lines = [
  document.getElementById('active1'),
  document.getElementById('active2'),
  document.getElementById('active3')
];

const lineElements = [
  document.querySelector('.line-left'),
  document.querySelector('.line-center'),
  document.querySelector('.line-right')
];

const images = [
  document.querySelector('.image-crana'),
  document.querySelector('.image-dysha'),
  document.querySelector('.image-big-dysha')
];

let currentIndex = 0;

function increaseWidth() {
  lines[currentIndex].style.width = `${(parseFloat(lines[currentIndex].style.width) || 0) + 0.1}%`;

  if (parseFloat(lines[currentIndex].style.width) >= 100) {
    resetWidthAndSwitch();
  }
}

function resetWidthAndSwitch() {
  lines[currentIndex].style.width = '0';
  currentIndex = (currentIndex + 1) % lines.length;

  updateImageDisplay();
}

function updateImageDisplay() {
  images.forEach((image, index) => {
    image.style.display = currentIndex === index ? 'block' : 'none';
  });

  lines.forEach((line, index) => {
    if (currentIndex === index) {
      line.style.width = `${(parseFloat(line.style.width) || 0) + 0.1}%`;
    } else {
      line.style.width = '0';
    }
  });
}

lineElements.forEach((lineElement, index) => {
  lineElement.addEventListener('click', () => {
    currentIndex = index;
    updateImageDisplay();
  });
});

setInterval(increaseWidth, 5.8);


const menuButton = document.querySelector('.menu-button')
const svgMenuOpen = document.querySelector('.menu1')
const svgMenuClose = document.querySelector('.menu2')
const openMenu = document.querySelector('.open-menu')
const html = document.querySelector('html');

menuButton.addEventListener('click', () => {
  toggleIconInMenu()
  toggleHtmlTeg()

  if (openMenu.style.display === 'none') {
    openMenu.style.display = 'block'
  } else {
    openMenu.style.display = 'none'
  }
} )


function toggleIconInMenu() {
  if (svgMenuOpen.style.display === 'none') {
    svgMenuOpen.style.display = 'block'
    svgMenuClose.style.display = 'none'
    } else {
      svgMenuClose.style.display = 'block'
      svgMenuOpen.style.display = 'none'
    }
}

function toggleHtmlTeg() {
  if (svgMenuOpen.style.display === 'none') {
    html.style.overflow = 'hidden';
  } else {
    html.style.overflow = 'auto';
  }
}

const list = document.querySelector('.list')

const svgOpen = document.querySelector('.svg1')

const svgClose = document.querySelector('.svg2')

const openKatalog = document.querySelector('.katalog-tovarov')

const text = document.getElementById('p-katalog')


openKatalog.addEventListener('click', () => {
  
  if (list.style.display === 'none') {
    text.style.color = 'white'
    list.style.display = 'block'
    svgClose.style.display = 'block'
    svgOpen.style.display = 'none'
  } else {
    text.style.color = '#bebebe'
    list.style.display = 'none'
    svgClose.style.display = 'none'
    svgOpen.style.display = 'block'
  }

  if (openMenu.style.display !== 'block') {
    text.style.color = '#bebebe'
    list.style.display = 'none'
    svgClose.style.display = 'none'
    svgOpen.style.display = 'block'
  }

})

const searchMenu= document.querySelector('.search-button-media')
const svgGray= document.querySelector('.svg-gray')
const svgWhite= document.querySelector('.svg-white')
const openSearchMenu= document.querySelector('.open-searchMenu')
const html1 = document.querySelector('html');

searchMenu.addEventListener('click', () => {
  if (svgWhite.style.display === 'none') {
    html1.style.overflow = 'hidden';
    openSearchMenu.style.display = 'block'
    svgWhite.style.display = 'block'
    svgGray.style.display = 'none'
  } else {
    html1.style.overflow = 'auto';
    openSearchMenu.style.display = 'none'
    svgWhite.style.display = 'none'
    svgGray.style.display = 'block'
  }
})


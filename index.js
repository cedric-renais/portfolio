//--------------------//
// Header typing text //
//--------------------//

const text = document.querySelector('.text-4');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'développeur';
  }, 0);
  setTimeout(() => {
    text.textContent = 'intégrateur';
  }, 4000);
};
textLoad();
setInterval(textLoad, 8000);

//-------------------//
// ABOUT TABS TOGGLE //
//-------------------//

const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}

//------------------//
// SCROLL-UP BUTTON //
//------------------//

const calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');
  let position = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round(position * 100) / calcHeight;
  if (position > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }
  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#b84041 ${scrollValue}%, #ababab ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//-------------//
// MENU TOGGLE //
//-------------//

const sideMenu = document.getElementById('side-menu');

function openMenu() {
  sideMenu.style.right = '0px';
}

function closeMenu() {
  sideMenu.style.right = '-200px';
}

//--------------//
// CONTACT FORM //
//--------------//

const form = document.forms['contactForm'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  msg.innerHTML = 'Message envoyé avec succès.';
  setTimeout(() => {
    msg.innerHTML = '';
  }, 5000);
});

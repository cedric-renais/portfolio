//--------------------//
// Header typing text //
//--------------------//

const text = document.querySelector('.second-text');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Cédric';
  }, 0);
  setTimeout(() => {
    text.textContent = 'développeur';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'intégrateur';
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

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

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

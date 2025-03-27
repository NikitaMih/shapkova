export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const expandableList = document.querySelector('.about__list-block');
const expandButton = document.querySelector('.expandButton');

expandButton.addEventListener('click', () => {
  expandableList.classList.toggle('expanded');
  expandButton.textContent = expandableList.classList.contains('expanded') ? 'Скрыть мои услуги' : 'Показать остальное...';
});

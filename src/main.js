import '@styles/main.scss'

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

if (expandableList && expandButton) {
  expandButton.addEventListener('click', () => {
    expandableList.classList.toggle('expanded');

    const isExpanded = expandableList.classList.contains('expanded');
    expandButton.textContent = isExpanded ? 'Скрыть мои услуги' : 'Показать остальное...';
    expandButton.setAttribute('aria-expanded', String(isExpanded));
  });
}

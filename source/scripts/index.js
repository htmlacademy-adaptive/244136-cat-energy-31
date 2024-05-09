/* в этот файл добавляет скрипты*/
document.querySelector('.nav-button').addEventListener('click', () => {
  document.querySelector('.site-nav__list').classList.toggle('site-nav__list--opened');
  document.querySelector('.nav-button').classList.toggle('nav-button--opened');
});

/* в этот файл добавляет скрипты*/
document.querySelector('.main-header__wrapper').classList.remove('main-header__wrapper--noscript');
document.querySelector('.logo').classList.remove('logo--noscript');
document.querySelector('.nav-button').classList.remove('nav-button--opened');
document.querySelector('.site-nav').classList.remove('site-nav--noscript');
document.querySelector('.site-nav__list').classList.remove('site-nav__list--opened');
document.querySelector('.site-nav__list').classList.remove('site-nav__list--noscript');
document.querySelector('.nav-button').classList.remove('nav-button--noscript');
document.querySelector('.map__iframe').classList.remove('map__iframe--noscript');

document.querySelector('.nav-button').addEventListener('click', () => {
  document.querySelector('.site-nav__list').classList.toggle('site-nav__list--opened');
  document.querySelector('.nav-button').classList.toggle('nav-button--opened');
});


  document.addEventListener('DOMContentLoaded', () => {
    const genderButtons = document.querySelectorAll('.passenger-gender-btn');

    genderButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        genderButtons.forEach(btn => {
          btn.classList.remove('passenger-gender-btn--active');
          btn.classList.remove('passenger-gender-btn--selected'); // если хотите убрать и этот класс
        });
        // Добавляем активный класс на нажатую кнопку
        button.classList.add('passenger-gender-btn--active');
      });
    });
  });


// script.js
// function loadContent(section) {
//   const contentContainer = document.getElementById('content-container');

//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', section + '-content.html', true);

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       contentContainer.innerHTML = xhr.responseText;
//     }
//   };

//   xhr.send();
// }

// async function loadContent(section) {
//   const contentContainer = document.getElementById('content-container');

//   // Добавляем класс с анимацией
//   contentContainer.classList.add('fade-out');

//   // Ждем завершения анимации перед изменением контента
//   setTimeout(async () => {
//     try {
//       // Загружаем контент с использованием fetch
//       const response = await fetch(section + '-content.html');
//       const htmlContent = await response.text();

//       // Заменяем контент внутри contentContainer
//       contentContainer.innerHTML = htmlContent;
//     } catch (error) {
//       console.error('Ошибка загрузки контента:', error);
//     }

//     // Убираем класс анимации для будущих изменений
//     contentContainer.classList.remove('fade-out');
//   }, 500); // Время анимации в миллисекундах (0.5 секунды в данном случае)
// }

async function loadContent(section) {
  const contentContainer = document.getElementById('content-container');

  // Добавляем класс с анимацией
  contentContainer.classList.add('slide-left');

  // Ждем завершения анимации перед изменением контента
  setTimeout(async () => {
    try {
      // Загружаем контент с использованием fetch
      const response = await fetch(section + '-content.html');
      const htmlContent = await response.text();

      // Заменяем контент внутри contentContainer
      contentContainer.innerHTML = `<div class="content-wrapper">${htmlContent}</div>`;
    } catch (error) {
      console.error('Ошибка загрузки контента:', error);
    }

    // Убираем класс анимации для будущих изменений
    contentContainer.classList.remove('slide-left', 'slide-right');
  }, 500); // Время анимации в миллисекундах (0.5 секунды в данном случае)
}

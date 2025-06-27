  document.querySelectorAll('h2, h3').forEach(title => {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
      const next = title.nextElementSibling;
      if (!next) return;
      if (next.classList.contains('content')) {
        next.classList.toggle('active');
      }
    });
  });
// Кнопки копирования кода
  document.querySelectorAll('button.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const codeElem = document.getElementById(targetId);
      if (!codeElem) return;
      navigator.clipboard.writeText(codeElem.textContent).then(() => {
        button.textContent = 'Скопировано!';
        setTimeout(() => button.textContent = 'Копировать код', 1500);
      }).catch(() => {
        alert('Ошибка копирования');
      });
    });
  });


document.addEventListener('DOMContentLoaded', function () {
    // Проверяем состояние аутентификации через background.js
    chrome.runtime.sendMessage({ type: 'checkAuth' }, (response) => {
      if (response.authenticated) {
        // Если пользователь авторизован, показываем кнопку "Sign Out"
        document.getElementById('auth').innerHTML = '<button id="signout">Sign Out</button>';
        document.getElementById('signout').addEventListener('click', () => {
          chrome.runtime.sendMessage({ type: 'signOut' }, () => {
            window.location.reload(); // Перезагружаем для обновления
          });
        });
      } else {
        document.getElementById('auth').innerHTML = `
          <button id="connect">Connect</button>
        `;
        document.getElementById('connect').addEventListener('click', () => {
          chrome.tabs.create({ url: 'http://localhost:3000/auth' });
        
        });
      }
    });
  });
  
  // Логика входа пользователя
  // function loginUser() {
  //   const username = prompt('Enter your username');
  //   const password = prompt('Enter your password');
  
  //   fetch('http://localhost:3102/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ username, password })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.token) {
  //         // Отправляем токен в background.js для хранения
  //         chrome.runtime.sendMessage({ type: 'loginSuccess', token: data.token }, () => {
  //           window.location.reload(); // Перезагружаем интерфейс
  //         });
  //       } else {
  //         alert('Login failed');
  //       }
  //     });
  // }
  
  // Логика регистрации пользователя
  // function registerUser() {
  //   const username = prompt('Enter your username');
  //   const password = prompt('Enter your password');
  
  //   fetch('http://localhost:3102/register', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ username, password })
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         alert('Registration successful, please login');
  //       } else {
  //         alert('Registration failed');
  //       }
  //     });
  // }

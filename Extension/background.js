chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
    // Можно очистить токен при установке или инициализировать состояние
    chrome.storage.local.remove('token');
  });
  
  // Функция для проверки состояния авторизации
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'checkAuth') {
      chrome.storage.local.get(['token'], (result) => {
        if (result.token) {
          sendResponse({ authenticated: true });
        } else {
          sendResponse({ authenticated: false });
        }
      });
      return true; // Асинхронный ответ (используем sendResponse позже)
    }
  
    if (message.type === 'signOut') {
      chrome.storage.local.remove('token', () => {
        sendResponse({ success: true });
      });
      return true;
    }
  });
  
  // Логика для хранения токена при успешной аутентификации
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'loginSuccess') {
      chrome.storage.local.set({ token: message.token }, () => {
        sendResponse({ success: true });
      });
      return true;
    }
  });
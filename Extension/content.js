

function getHorizontalLines() {

  return document.querySelectorAll('.xjbqb8w.xso031l.x1q0q8m5.xqtp20y.xb9moi8.xfth1om.x21b0me.xmls85d.xw7yly9.xktsk01.x1yztbdb.x1d52u69');
}

async function downloadVideo(videoUrl, downloadButton,userId) {
  try {

    downloadButton.disabled = true;

    const response = await fetch('http://localhost:3101/savedAd', {
      videoUrl,
      userId,
    })

    if (response.status == 200) {
      downloadButton.innerText = 'Saved';
      downloadButton.style.backgroundColor = '#4CAF50';
      downloadButton.style.backgroundImage = 'linear-gradient(rgb(98 255 102), rgb(95 241 99) 29%, rgb(36 190 40) 58%, rgb(13 153 17))';
      downloadButton.style.color = 'white'; downloadButton.style.animation = 'successAnimation 0.5s';
    }
  } catch (error) {
    downloadButton.disabled = false;
    console.error('Ошибка при загрузке видео:', error);

  }
}

function addDownloadButtons() {
  const horizontalLines = getHorizontalLines();

  horizontalLines.forEach((line) => {

    if (!line.previousElementSibling || !line.previousElementSibling.classList.contains('saved-btn')) {

      const downloadButton = document.createElement('button');
      downloadButton.innerText = 'Save to My Ads';
      downloadButton.classList.add('saved-btn');

      downloadButton.addEventListener('click', () => {
        const parentCard = line.closest('.xh8yej3');
        if (parentCard) {

          const video = parentCard.querySelector('video.x1lliihq.x5yr21d.xh8yej3');
          if (video && video.src) {
            downloadVideo(video.src, downloadButton);
          } else {
            alert('Видео не найдено в данной карточке.');
          }
        } else {
          alert('Родительская карточка не найдена.');
        }
      });


      line.parentNode.insertBefore(downloadButton, line);
    }
  });
}

window.addEventListener('load', () => {
  addDownloadButtons();
});

const observer = new MutationObserver(() => {
  addDownloadButtons();
});

observer.observe(document.body, { childList: true, subtree: true });
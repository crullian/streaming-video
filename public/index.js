const init = () => {
  const VP = document.getElementById('videoPlayer');
  const VPToggle = document.getElementById('toggleButton');

  VPToggle.addEventListener('click', () => {
    if (VP.paused) {
      VPToggle.innerText = 'Pause';
      VP.play();
    } else {
      VPToggle.innerText = 'Play';
      VP.pause();
    }
  })

  VP.addEventListener('ended', () => {
    console.log('VIDEO ENDED');
    VPToggle.innerText = 'Play';
  })
}

document.addEventListener('DOMContentLoaded', init, false);

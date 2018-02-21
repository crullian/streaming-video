document.addEventListener('DOMContentLoaded', init, false);

/** 
* You can manipulate the video here
* For example: Uncomment the code below and in the index to get a Start/Stop button
*/
function init() {
  const VP = document.getElementById('videoPlayer');
  const VPToggle = document.getElementById('toggleButton');

  VPToggle.addEventListener('click', function() {
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

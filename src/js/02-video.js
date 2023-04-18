import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



const currentTime = localStorage.getItem(CURRENT_TIME);
if (currentTime) player.setCurrentTime(currentTime);

const saveCurrentTime = function (time) {
  localStorage.setItem(CURRENT_TIME, Math.round(time.seconds));
};
player.on('timeupdate', throttle(saveCurrentTime, 1000));

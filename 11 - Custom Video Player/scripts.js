const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skip = player.querySelectorAll('[data-skip]');

function toggleButton(){
    video[video.paused ? 'play' : 'pause']();
}

function toggleIcon(){
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skipPressed(e){
    video.currentTime +=  parseFloat(e.srcElement.dataset.skip);
}


function rangUpdate(){
    video[this.name] = this.value;
}

function handleProgress() {
    const timeProgress = this.currentTime /this.duration * 100;
    progressBar.style.flexBasis = `${timeProgress}%`;
}



////////////////////////////////
video.addEventListener('click',toggleButton);
video.addEventListener('pause',toggleIcon);
video.addEventListener('play',toggleIcon);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click',toggleButton);


skip.forEach(i => {
    i.addEventListener('click', skipPressed);
})

ranges.forEach(i => {
    i.addEventListener('click', rangUpdate);
})


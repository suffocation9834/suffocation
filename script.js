var video = document.getElementById("background-video");

window.onload = function() {
    var button = document.getElementById("muteUnmuteButton");
    button.textContent = video.muted ? '🔊' : '🔇';
};

function toggleMuteUnmute() {
    var button = document.getElementById("muteUnmuteButton");
    if (video.muted) {
        video.muted = false;
        button.textContent = '🔇';
    } else {
        video.muted = true;
        button.textContent = '🔊';
    }
}

function adjustVolume(volume) {
    video.volume = volume;
}

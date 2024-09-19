document.addEventListener("DOMContentLoaded", function() {
const video = document.getElementById('sports-stream');
const hls = new Hls();

function loadStream(source) {
    if (Hls.isSupported()) {
    hls.loadSource(source);
    hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = source;
    }
}

// Load a default stream (e.g., football)
loadStream('http://125.209.88.166:45793/BRN/PTVSports.stream/playlist.m3u8');});

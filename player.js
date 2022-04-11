
const song = document.querySelector('.song'); // audio object
const songTitle = document.querySelector('.song-title'); // element where track title appears
const background = document.querySelector('.background'); // background colour can't get it to work
const thumbnail = document.querySelector('.thumbnail'); // album cover 

songIndex = 0;
songs = ['https://www.bensound.com/bensound-music/bensound-ukulele.mp3', 'https://www.bensound.com/bensound-music/bensound-betterdays.mp3', 'https://www.bensound.com/bensound-music/bensound-sunny.mp3']; // object storing paths for audio objects
songTitles = ["Ukulele", "Better Days", "Sunny"]; // object storing track titles
thumbnails = ['https://www.bensound.com/bensound-img/ukulele.jpg', 'https://www.bensound.com/bensound-img/betterdays.jpg', 'https://www.bensound.com/bensound-img/sunny.jpg']; // object storing paths for album covers and backgrounds
background = ['#DAA0B2', '#EB5E82', '#726CFB']
// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex;
    if (songIndex === 0) {
        songIndex = 1;
    } else {
        if (songIndex === 1){
            songIndex = 2;
        } else {
            if (songIndex === 2){
                songIndex = 0;
            }
        }
    };
    song.src = songs[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    thumbnail.src = thumbnails[songIndex];
    background.src = background[songIndex];

    playing = true;
    
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex;
    if (songIndex === 0) {
        songIndex = 2;
    } else{
        if (songIndex === 2){
            songIndex = 1
        } else {
            if (songIndex === 1){
                songIndex = 0
            }
        }
    };
    song.src = songs[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    thumbnail.src = thumbnails[songIndex];
    background.src = background[songIndex];

    playing = true;
    
}

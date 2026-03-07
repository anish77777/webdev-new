async function getSongs() {
  let a = await fetch("songs/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      // 1. Decode the URL (removes %5C and other encodings)
      let decoded = decodeURIComponent(element.href);
      // 2. Get the filename whether it uses / or \
      let filename = decoded.split(/[/\\]/).pop();
      songs.push(filename);
    }
  }
  return songs;
}

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

let currentAudio = new Audio();
let play = document.getElementById("play");

const playMusic = (track) => {
  console.log("Playing:", "songs/" + track);
  currentAudio.src = "songs/" + track;
  currentAudio.play();
  if (play) {
    play.src = "img/pause.svg";
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}
// just to print 
async function main() {
  let currentSong = "";
  // Get the list of all songs
  let songs = await getSongs();
  console.log("Your Songs List:", songs);

  //Show all the song in play list
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  let songHTML = "";
  for (const song of songs) {
    songHTML += `   <li>
                <img class="invert" src="img/music.svg" alt=""/>
                <div class="info">
                   <div>${song.replaceAll("%20", " ")}</div>
                   <div>Anish</div>
                </div>
                
                <div class="playnow">
                   <span>Playnow</span><img src="img/play.svg" class="invert "></div>
              </li>`;
  }
  songUL.innerHTML = songHTML;

  //attach an event listener to each song
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(element.querySelector(".info").firstElementChild.innerHTML);
      playMusic(element.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  // Attach an event listener to play next and previous song

  play.addEventListener("click", () => {
    if (currentAudio.paused) {
      currentAudio.play()
      play.src = "img/pause.svg"
    }
    else {
      currentAudio.pause()
      play.src = "img/play.svg"
    }
  })



  //Listen for timeupdate event
  currentAudio.addEventListener("timeupdate", () => {
    console.log(currentAudio.currentTime, currentAudio.duration);
    document.querySelector(".songtime").innerHTML = `
    ${secondsToMinutesSeconds(
      currentAudio.currentTime
    )}/${secondsToMinutesSeconds(currentAudio.duration)}`;
    document.querySelector(".circle").style.left =
      (currentAudio.currentTime / currentAudio.duration) * 100 + "%";
  }
  )
  //aDD AN EVENT LISTENER   TO SEEKBAR
  document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = e.offsetX / e.target.getBoundingClientRect().width * 100;
    document.querySelector(".circle").style.left = (percent + "%")
    // gets the ration in which the seekbar is click

    currentAudio.currentTime = (currentAudio.duration) * percent / 100;
  })
  // Add an event listener for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
  })

  // Add an event listener for close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%"
  })
}

main();

let songs;
let currFolder;
let allSongsData;
let currentAudio = new Audio();
let play = document.getElementById("play");


async function getSongs(folder) {
  currFolder = folder;
  // Get track list from our pre-loaded JSON database
  songs = allSongsData[folder].songs;

  //Show all the song in play list
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    if (song) {
      songUL.innerHTML =
        songUL.innerHTML +
        `   <li>
                <img class="invert" src="img/music.svg" alt=""/>
                <div class="info">
                   <div>${song}</div>
                   <div>Anish</div>
                </div>
                
                <div class="playnow">
                   <span>Playnow</span><img src="img/play.svg" class="invert "></div>
              </li>`;
    }
  }


  //attach an event listener to each song
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li"),
  ).forEach((element) => {
    element.addEventListener("click", (e) => {
      playMusic(
        element.querySelector(".info").firstElementChild.innerHTML.trim(),
      );
    });
  });

  return songs;
}

function secondsToMinutesSeconds(seconds) {
  // Utility function to convert seconds to MM:SS format
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = (track, pause = false) => {
  // Clean the track name to ensure it's just the filename
  let cleanTrack = track.split(/[/\\]/).pop();
  // Set the audio source based on the current album folder
  currentAudio.src = `songs/${currFolder}/` + cleanTrack;
  console.log("Setting src to:", currentAudio.src);

  if (!pause) {
    currentAudio.play();
    document.getElementById("play").src = "img/pause.svg";
  }

  document.querySelector(".songinfo").innerHTML = decodeURI(track.split(/[/\\]/).pop());
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function displayAlbums() {
  console.log("displaying albums");
  let cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = ""; // Clear the container before adding new cards

  // Iterate through our pre-loaded JSON database to create album cards
  for (const folder in allSongsData) {
    let response = allSongsData[folder];
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      ` <div data-folder="${folder}" class="card">
              <div class="play">
                <img src="img/play.svg" alt="" srcset="" />
              </div>
              <img src="songs/${folder}/cover.jpg" alt="" />
              <h2>${response.title}</h2>
              <p>${response.description}</p>
            </div>`;
  }

  // Load the playlist whenever card is clicked
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener("click", async (item) => {
      console.log("Fetching songs for folder:", item.currentTarget.dataset.folder);
      songs = await getSongs(item.currentTarget.dataset.folder);
      playMusic(songs[0]);
    });
  });
}

async function main() {
  // Fetch our song database JSON first
  let a = await fetch(`songs.json`);
  allSongsData = await a.json();

  // Load and display all available albums on startup
  displayAlbums();

  // Attach an event listener to play, next and previous song
  let play = document.getElementById("play");
  let previous = document.getElementById("previous");
  let next = document.getElementById("next");


  play.addEventListener("click", () => {
    if (currentAudio.paused) {
      currentAudio.play();
      play.src = "img/pause.svg";
    } else {
      currentAudio.pause();
      play.src = "img/play.svg";
    }
  });

  // Update the song time display and seekbar circle as the audio plays
  currentAudio.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `
    ${secondsToMinutesSeconds(
      currentAudio.currentTime,
    )}/${secondsToMinutesSeconds(currentAudio.duration)}`;
    document.querySelector(".circle").style.left =
      (currentAudio.currentTime / currentAudio.duration) * 100 + "%";
  });
  // Move the playhead to the clicked position on the seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentAudio.currentTime = (currentAudio.duration * percent) / 100;
  });
  // Open the sidebar in mobile view
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  // Close the sidebar in mobile view
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });

  // Play the previous song in the current album list
  previous.addEventListener("click", () => {
    currentAudio.pause();
    let index = songs.indexOf(
      decodeURI(currentAudio.src.split("/").slice(-1)[0]),
    );
    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  // Play the next song in the current album list
  next.addEventListener("click", () => {
    currentAudio.pause();
    let index = songs.indexOf(
      decodeURI(currentAudio.src.split("/").slice(-1)[0]),
    );
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });
  // Update the audio volume when the slider is changed
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      console.log(e.target.value);
      currentAudio.volume = parseInt(e.target.value) / 100;
    });
}

main();

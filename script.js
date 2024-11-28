   <div class="episode-selector">
        <label for="episode-select">Select Episode:</label>

const episodes = [
  { title: "Episode 1: saukiya hindi part 2", videoSrc: "https://www.filmyzilla.com.fj/downloads/16433/12/server_1/" },
  { title: "Episode 2: saukiya hindi part 2", videoSrc: "https://www.filmyzilla.com.fj/downloads/16404/11/server_4/" },
  { title: "Episode 3: saukiya hindi part 2", videoSrc: "https://www.filmyzilla.com.fj/downloads/16405/1/server_4/" },
    { title: "Episode 4: saukiya hindi part 2", videoSrc: "https://video.maalcdn.com/ULLU/Shaukiya/Shaukiya%20Episode%204.mp4" },
  { title: "Episode 5 : saukiya hindi part 2", videoSrc: "https://video.maalcdn.com/ULLU/Shaukiya/Shaukiya%20Episode%205.mp4" },
  { title: "Episode 6: saukiya hindi part 2", videoSrc: "https://video.maalcdn.com/ULLU/Shaukiya/Shaukiya%20Episode%206.mp4" }
];

let currentEpisodeIndex = 0;

const episodeTitle = document.getElementById("episode-title");
const videoPlayer = document.getElementById("video-player");
const episodeSource = document.getElementById("episode-source");
const episodeList = document.getElementById("episode-list");

function changeEpisode(direction) {
  currentEpisodeIndex += direction;
  
  // Ensure we stay within the episode range
  if (currentEpisodeIndex < 0) currentEpisodeIndex = 0;
  if (currentEpisodeIndex >= episodes.length) currentEpisodeIndex = episodes.length - 1;

  loadEpisode(currentEpisodeIndex);
}

function loadEpisode(index) {
  const episode = episodes[index];
  episodeTitle.textContent = episode.title;
  episodeSource.src = episode.videoSrc;
  videoPlayer.load(); // Reload video with new source

  // Update the navigation buttons state
  document.getElementById("prev-episode").disabled = currentEpisodeIndex === 0;
  document.getElementById("next-episode").disabled = currentEpisodeIndex === episodes.length - 1;
}

// Populate episode list for easy selection
function generateEpisodeList() {
  episodes.forEach((episode, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = episode.title;
    listItem.onclick = () => {
      currentEpisodeIndex = index;
      loadEpisode(currentEpisodeIndex);
    };
    episodeList.appendChild(listItem);
  });
}

// Initialize
generateEpisodeList();
loadEpisode(currentEpisodeIndex);

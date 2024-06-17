// Add JavaScript code here
const form = document.getElementById('songRequests')

const printSong = (event) => {
  let name = document.getElementById('name').value;
  let song = document.getElementById('song').value;
  let artist = document.getElementById('artist').value;
  console.log(name, artist,song)
  event.preventDefault();
  
}

form.addEventListener('submit', printSong);
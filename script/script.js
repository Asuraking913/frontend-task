function updateUTCDateTime() {
    const now = new Date();
  
    let hours = now.getUTCHours();
    let minutes = now.getUTCMinutes();
    let seconds = now.getUTCSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm} UTC`;
  
    const month = now.getUTCMonth() + 1; 
    const day = now.getUTCDate();
    const year = now.getUTCFullYear();
    const dateString = `${month}/${day}/${year}`;
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayString = days[now.getUTCDay()];
  
    document.getElementById('time-utc').textContent = timeString;
    document.getElementById('utc-day').textContent = dayString;

    document.getElementById('time-utc1').textContent = timeString;
    document.getElementById('utc-day1').textContent = dayString;
  }
  
  setInterval(updateUTCDateTime, 1000);
  
  updateUTCDateTime();
  

const menu = document.getElementById("menu-btn")
const nav = document.getElementById("nav")

menu.addEventListener("click", () => {
    nav.style.display = 'block'
    menu.style.display = 'none'
})

// nav.addEventListener("click", (e) => {
//     nav.style.display = 'none'
//     menu.style.display = 'block'
// })
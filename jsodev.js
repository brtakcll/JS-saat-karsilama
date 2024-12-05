let user = prompt("lütfen isminizi giriniz")

let infos = document.querySelector("#info")
info.innerHTML = `Merhaba! ${user} Hoşgeldin!`

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
}

setInterval(updateClock, 1000);
updateClock();

let bilgi = document.querySelector("#bilgi")
bilgi.innerHTML = `tarihinde Kodluyoruz Frontend Web Development Patikası'nın Javascript <br>bölümü 1. Ödevindesiniz`

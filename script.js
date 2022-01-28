// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle('change')
});
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = () => {
    if (video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', () => {
    playPause()
})


video.addEventListener('timeupdate', () => {
        console.log(video.currentTime, video.duration)
        const barWidth = video.currentTime / video.duration;
        bar.style.width = `${barWidth * 100}%`
        if (video.ended) {
            btn.className = 'far fa-play-circle'
            video.style.opacity = '.3'
        }
    })
    // End of Section 2 Video

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});


function sendJSON() {

    let result = document.querySelector('.result');
    let height = document.querySelector('#height');
    let weight = document.querySelector('#weight');
    let age = document.querySelector('#age');
    let presugar = document.querySelector('#presugar');
    let carbo = document.querySelector('#carbo');

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://52.196.243.199:8080/getResult";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
            // if (xhr.status === 201) {

            // Print received data from server
            // result.innerHTML = this.responseText;
            result.innerHTML = this.responseText;

        }
    };

    // var height_f = parseFloat(carbo.value)
    // Converting JSON data to string
    var data = JSON.stringify({
        "height": 180.5,
        "weight": 180.5,
        "age": 180.5,
        "preSugar": 180.5,
        "carbo": 180.5
    });
    // result.innerHTML = typeof height_f;
    // Sending data with the request
    xhr.send(data);
}
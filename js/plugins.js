let videoShow = document.querySelector('.trailer'),
    videoToggle = document.querySelector('.play'),
    videoClose = document.querySelector('.far'),
    video = document.querySelector('video'),
    menu = document.querySelector('.navbar-toggler');

videoToggle.addEventListener('click', function () {

    videoShow.classList.toggle('active');
    video.autoplay="true";
    video.play();
});

videoClose.addEventListener('click', function () {
    videoShow.classList.remove('active');
    video.currentTime = 0;
    video.pause();
});

menu.addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('toggle');
    document.querySelector('.navbar-toggler i').classList.toggle('fa-bars');
    document.querySelector('.navbar-toggler i').classList.toggle('fa-times');
})
// @ Constants
const navBar = document.getElementById('nav-list');

const buttonVisionMain = document.getElementById('vision-Main');
const buttonVisionAudio = document.getElementById('vision-Audio');
const buttonVisionVideo = document.getElementById('vision-Video');

const contentUmovy = document.getElementById('content-umovy');
const contentAudio = document.getElementById('content-audio');
const contentVideo = document.getElementById('content-video');

// @ Variavles
let activeContent = contentUmovy;
let pastActiveContent = null;
let activeContentButton = null;

// ! Constants
const navBar = document.getElementById('nav-list');

const buttonVisionMain = document.getElementById('vision-Main');
const buttonVisionAudio = document.getElementById('vision-Audio');
const buttonVisionVideo = document.getElementById('vision-Video');
const buttonVisionPropozuciaDoors = document.getElementById('vision-Produccia-doors');
const buttonVisionModenrDoors = document.getElementById('vision-Modenr-doors');
const buttonVisionCardList = document.getElementById('vision-CardList');
const buttonVisionBasicConceptsAboutTheIntercomSystem = document.getElementById('vision-basicConceptsAboutTheIntercomSystem');

const contentUmovy = document.getElementById('content-umovy');
const contentAudio = document.getElementById('content-audio');
const contentVideo = document.getElementById('content-video');
const contentPropozuciaDoors = document.getElementById('content-propozuiciaDoors');
const contentModernDoors = document.getElementById('content-modenrDoors');
const contentCardList = document.getElementById('content-card');
const contentBasicConceptsAboutTheIntercomSystem = document.getElementById('content-basicConceptsAboutTheIntercomSystem');

const videoList = document.querySelectorAll('.video-list-item_active');
const videoListUl = document.getElementById('video-list');
const videoPages = document.getElementById('video-pages');
const videoPagesAddCardList = document.querySelectorAll('.add-card');
const buttonUndoVideoPage = document.getElementById('button-undo-video-page');

const cardlist = [
	{
		name: 'SQ-04',
		count: 0,
	},
	{
		name: 'SQ-04M',
		count: 0,
	},
	{
		name: 'SQ-07IPHD',
		count: 0,
	},
	{
		name: 'Sonik 7 cloud',
		count: 0,
	},
	{
		name: 'Sonik 10',
		count: 0,
	},
	{
		name: 'SM-07M',
		count: 0,
	},
];
const cardlistHTML = document.getElementById('cardList');
const counterCardListHTML = document.querySelectorAll('.counter')
const cardlistItemsHTML = document.querySelectorAll('.list-card__item');

// @ Variables
let activeContent = contentUmovy;
let pastActiveContent;
let activeContentButton;
let liPageFromPageVideoFunction;


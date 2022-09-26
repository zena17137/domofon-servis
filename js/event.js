// ? Change Content
navBar.addEventListener('click', toggleContent);
// ? Video
videoList.forEach((element) => {
	element.addEventListener('click', pageVideo);
});
buttonUndoVideoPage.addEventListener('click', unPageVideo);
// ? Add Item In Card List
videoPagesAddCardList.forEach((element) => {
	element.addEventListener('click', upCount);
});
// ? Delete Item From Card List
cardlistItemsHTML.forEach((element) => {
	element.addEventListener('click', downCount);
});

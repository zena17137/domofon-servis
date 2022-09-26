function toggleContent(e) {
	if (e.target === activeContent) {
		// ? If Content already vision
		return;
	} else if (e.target === buttonVisionMain) {
		// ? Main
		pastActiveContent = activeContent;
		activeContent = contentUmovy;
	} else if (e.target === buttonVisionAudio) {
		// ? Audio
		pastActiveContent = activeContent;
		activeContent = contentAudio;
	} else if (e.target === buttonVisionVideo) {
		// ? Video
		pastActiveContent = activeContent;
		activeContent = contentVideo;
	} else if (e.target === buttonVisionPropozuciaDoors) {
		// ? Porpozucia Doors
		pastActiveContent = activeContent;
		activeContent = contentPropozuciaDoors;
	} else if (e.target === buttonVisionModenrDoors) {
		// ? Modernization Doors
		pastActiveContent = activeContent;
		activeContent = contentModernDoors;
	} else if (e.target === buttonVisionCardList) {
		// ? Card List
		pastActiveContent = activeContent;
		activeContent = contentCardList;
	} else if (e.target === buttonVisionBasicConceptsAboutTheIntercomSystem) {
		// ? Basic Domofon
		pastActiveContent = activeContent;
		activeContent = contentBasicConceptsAboutTheIntercomSystem;
	}

	// ^ Change Content
	contentVis(activeContent);
}

function contentVis(content) {
	// # Переммение для функции
	let className = content.className;

	try {
		if (className.indexOf('-active') !== -1) {
			return false;
		} else {
			pastActiveContentClassName = pastActiveContent.className.split('-');
			if (pastActiveContentClassName.length > 1) {
				pastActiveContentClassName.length--;
			}
			pastActiveContent.className = pastActiveContentClassName.join('');
			className = className + '-active';
			content.className = className;
		}
	} catch (Error) {
		// ** Output Error
		console.log(Error);
		return false;
	}

	return true;
}

function pageVideo(e) {
	// # Переммение для функции
	const currentTarget = e.currentTarget;
	const liId = currentTarget.id;
	const liPage = document.getElementById(liId + '_page');
	liPageFromPageVideoFunction = liPage;

	if (liPage.className.includes('_active')) {
		// >>> Убирание класса _active обєкту video-page-item
		let liPageArrayClassName = liPage.className.split('_');
		liPageArrayClassName.pop();
		liPage.className = liPageArrayClassName.join('');

		// >>> Убирание класса _active обєкту video-page
		let videoPagesArrayClassName = videoPages.className.split('_');
		videoPagesArrayClassName.pop();
		videoPages.className = videoPagesArrayClassName.join('');

		// @ Добавление класса _active обєкту video-list
		videoListUl.className += '_active';

		// @ Добавление класса _active обєктам video-list-item
		videoList.forEach((element) => {
			element.className += '_active';
		});

		return;
	} else {
		// >>> Добавление класса _active обєкту video-page-item
		liPage.className += '_active';

		// >>> Добавление класса _active обєкту video-page
		videoPages.className += '_active';

		// @ Убирание класса _active обєкту video-list
		let videoListUlArrayClassName = videoListUl.className.split('_');
		videoListUlArrayClassName.pop();
		videoListUl.className = videoListUlArrayClassName.join('');

		// @ Убирание класса _active обєктам video-list-item
		videoList.forEach((element) => {
			let elementArrayClassName = element.className.split('_');
			elementArrayClassName.pop();
			element.className = elementArrayClassName.join('');
		});
	}
}

function unPageVideo(e) {
	// # Переммение для функции
	const liPage = liPageFromPageVideoFunction;

	// >>> Убирание класса _active обєкту video-page-item
	let liPageArrayClassName = liPage.className.split('_');
	liPageArrayClassName.pop();
	liPage.className = liPageArrayClassName.join('');

	// >>> Убирание класса _active обєкту video-page
	let videoPagesArrayClassName = videoPages.className.split('_');
	videoPagesArrayClassName.pop();
	videoPages.className = videoPagesArrayClassName.join('');

	// @ Добавление класса _active обєкту video-list
	videoListUl.className += '_active';

	// @ Добавление класса _active обєктам video-list-item
	videoList.forEach((element) => {
		element.className += '_active';
		//console.log(element.className);
	});
}

function upCount(e) {
	let put = e.currentTarget.dataset.name;

	cardlist.forEach((element) => {
		if (element.name === put) {
			element.count++;
		}
	});

	updateCountCardList();
}

function downCount(e) {
	let put = e.currentTarget.dataset.name;
	//let elementCounter = document.querySelector(put + '_counter')

	cardlist.forEach((element) => {
		if (element.name === put) {
			if (element.count === 0) {
				//alert('Нахуй Пидар!');
			} else {
				element.count--;
			}
		}
	});

	updateCountCardList();
}

function updateCountCardList() {
	counterCardListHTML.forEach((element, ind) => {
		element.textContent = cardlist[ind].count;
	});
}

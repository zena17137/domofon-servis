function toggleContent(e) {
	if (e.target === activeContent) {
		// ** If Content already vision
		return;
	} else if (e.target === buttonVisionMain) {
		pastActiveContent = activeContent;
		activeContent = contentUmovy;
	} else if (e.target === buttonVisionAudio) {
		pastActiveContent = activeContent;
		activeContent = contentAudio;
	} else if (e.target === buttonVisionVideo) {
		pastActiveContent = activeContent;
		activeContent = contentVideo;
	}

	// ^ Change Content
	contentVis(activeContent);
}

function contentVis(content) {
	try { // Scale
		let className = content.className;

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
		console.log(Error);
		return false;
	}

	return true;
}

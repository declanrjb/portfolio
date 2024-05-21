var allClips = document.querySelectorAll('.portfolio-clip');

for (var i=0; i<allClips.length; i++) {
	var currClip = allClips[i];
	if (currClip.hasAttribute('href')) {
		currClip.onclick = function() {
			window.open(currClip.getAttribute('href'),'_self');
		}
	}
}
const menuItems = document.querySelectorAll('.menu-item');

for (var i=0; i<menuItems.length; i++) {
    menuItems[i].onmouseover = function() {
        console.log(this.getAttribute("selected"))
        if (this.getAttribute("selected") == 'false') {
            this.style.borderBottom = "2px solid #91a6ff";
        }
    }

    menuItems[i].onmouseout = function() {
        if (this.getAttribute('selected') == 'false') {
            this.style.borderBottom = 'none';
        }
    }

    menuItems[i].onclick = function() {
        var clips = document.querySelectorAll('.clip')
        if (this.getAttribute('selected') == 'false') {
            for (var j=0; j<menuItems.length; j++) {
                menuItems[j].style.borderBottom = 'none';
                menuItems[j].setAttribute('selected','false');
            }
            this.setAttribute('selected','true')
            this.style.borderBottom = '2px solid #eb5e28';

            var clickedTag = this.textContent.trim();
            if (clickedTag != 'All') {
                console.log(clips[z])
                for (var z=0; z<clips.length; z++) {
                    if (clips[z].getAttribute('type') != clickedTag) {
                        clips[z].style.display = 'none'
                    } else {
                        clips[z].style.display = 'block'
                    }
                }
            } else {
                for (var z=0; z<clips.length; z++) {
                    clips[z].style.display = 'block'
                }
            }
        }
    }
}
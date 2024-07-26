const clipHolder = document.querySelector('#main-clips')

function addChildClassed(parent,newClass,tag='div') {
    var newDiv = document.createElement(tag);
    newDiv.classList.add(newClass);
    parent.appendChild(newDiv);
    return newDiv;
}

d3.json('../database/clips.json')
    .then(data => {
        data = data['clips']
        for (var i=0; i<data.length; i++) {
            var clipData = data[i];

            var newClip = addChildClassed(clipHolder,'clip')

            var imageCol = addChildClassed(newClip,'clip-image-column')
            imageCol.classList.add('column')
            var contentCol = addChildClassed(newClip,'clip-content-column')
            contentCol.classList.add('column')

            var clipImage = addChildClassed(imageCol,'clip-image','img')
            clipImage.setAttribute('src',clipData['image'])

            addChildClassed(contentCol,'clip-title','h2').textContent = clipData['title']

            var metadataElem = addChildClassed(contentCol,'clip-metadata','p')
            addChildClassed(metadataElem,'clip-date','a').textContent = clipData['date']
            metadataElem.textContent += ' | '
            addChildClassed(metadataElem,'clip-publication','a').textContent = clipData['publication']

            addChildClassed(contentCol,'clip-award','p').textContent = clipData['award']
            addChildClassed(contentCol,'clip-about','p').textContent = clipData['about']

            newClip.setAttribute('href',clipData['link'])
            newClip.setAttribute('type',clipData['type'])

            newClip.onclick = function() {
                window.open(this.getAttribute('href'),'_self')
            }
        }
    })
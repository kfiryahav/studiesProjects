const lightBox = document.createElement('div');
lightBox.id = 'lightbox';
document.body.appendChild(lightBox);

const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('click', e => {
        lightBox.classList.add('active')
        const img2 = document.createElement('img')
        img2.src = img.src;
        while (lightBox.firstChild) {
            lightBox.removeChild(lightBox.firstChild)
        }
        lightBox.appendChild(img2);
    })
})

lightBox.addEventListener('click', go => {
    if (go.target !== go.currentTarget) return
    lightBox.classList.remove('active');
})
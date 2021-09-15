const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg'
];

let imgindex = 0;
const imageElement = document.getElementById('image-slide');
setInterval(() => {
    if (imgindex >= images.length) {
        imgindex = 0;
    }

    const imgurl = images[imgindex];
    imgindex++;
    imageElement.setAttribute('src', imgurl);
}, 1000);

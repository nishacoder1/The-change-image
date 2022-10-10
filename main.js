function btn()
{
    let image = document.getElementById('image');
    let images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image.jpg',];
    let random = Math.floor(Math.random() * 6);
    image.src = image[random];
}
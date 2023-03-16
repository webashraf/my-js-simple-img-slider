const sliderImagesArr = [
      './img/slider1.jpg',
      './img/slider2.jpg',
      './img/slider3.png'
]

let imgCount = 0;
setInterval( () =>{
      imgCount === sliderImagesArr.length ? imgCount = 0 : sliderImagesArr.length;
      document.getElementById('slider-img').setAttribute('src', sliderImagesArr[imgCount])
      imgCount++
} , 1000)
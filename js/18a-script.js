 // create an array of image sources;
let images = [
    "img/niteesh-kalangi.jpg", 'img/niteesh-kalangi-2.jpg', 'img/niteesh-kalangi-3.jpg','img/niteesh-kalangi-4.jpeg', 'img/niteesh-kalangi-5.jpeg'
]
let i = 0;


//add initial image to canvas
let canvas = document.getElementById('canvas');
canvas.style.background = `url(${images[0]})`

//add eventListeners to arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){
                if (e.target.id === "left"){
            //check to see if at beginning of array
            i--;
            if (i < 0){
                i = images.length -1;
            }
            canvas.style.background = `url(${img[i]})`;
        } else if (e.target.id === "right") {
            i++;
            if (i >= images.length ){
                i = 0;
            }
            canvas.style.background = `url(${images[i]})`;
        }
    })
});
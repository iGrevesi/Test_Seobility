//проверка браузера на отображение картинок WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
        
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });  
        const contentBox = document.querySelector('#' + this.dataset.tab); 
        contentBox.classList.remove('hidden');
    })
})














;
let bg = document.querySelector('.union');
let bg2 = document.querySelector('.union_2');
let bg3 = document.querySelector('.union_3');

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  

    bg.style.transform = 'translate(-' + x * 125 + '%, -' + y * 125 + '%)';
    bg2.style.transform = 'translate(-' + x * 125 + '%, -' + y * 125 + '%)';
    bg3.style.transform = 'translate(-' + x * 125 + '%, -' + y * 125 + '%)';
});





const prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      img = document.querySelector('.image_One'),
      img2 = document.querySelector('.image_Two');
   
next.addEventListener('click', () => {
    
    img.classList.toggle("left");
    img.classList.toggle("image_One");
    img2.classList.toggle("left");
    
});

prev.addEventListener('click', () => {
    img.classList.toggle("left");
    img.classList.toggle("image_One");
    img2.classList.toggle("left");
    img2.classList.toggle("image_Two");
    
});;

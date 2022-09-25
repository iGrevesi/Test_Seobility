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
      img2 = document.querySelector('.image_Two'),
      background = document.querySelector('.main__Wrapper'),
      title = document.querySelector('.pop__Title'),
      subtitle = document.querySelector('.pop__Subtitle'),
      type = document.querySelector('.type'),
      industry = document.querySelector('.industry');

next.addEventListener('click', () => {
    
    img.classList.toggle("left");
    img.classList.toggle("image_One");
    img2.classList.toggle("left");
    
    background.classList.toggle("purple");

    bg.classList.toggle("union");
    bg.classList.toggle("balls");

    bg2.classList.toggle("union_2");
    bg2.classList.toggle("balls2");

    bg3.classList.toggle("union_3");
    bg3.classList.toggle("balls3");

    if (background.classList.contains('purple')){
        
        title.textContent = "Создание маркетплейса для бизнеса по перепродаже одежды";
        subtitle.textContent = "Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.";
        type.textContent = "Интернет-магазины ";
        industry.textContent = "Торговля";
        
    } else {
        title.textContent = "Создание корпоративного сайта для холдинга «АМКОДОР»";
        subtitle.textContent = "Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” для развития дилерской сети на рынках Беларуси и стран СНГ.";
        type.textContent = "Корпоративные сайты";
        industry.textContent = "Производство, Торговля";
    }
    
});

prev.addEventListener('click', () => {
    img.classList.toggle("left");
    img.classList.toggle("image_One");
    img2.classList.toggle("left");
    
    background.classList.toggle("purple")

    bg.classList.toggle("union")
    bg.classList.toggle("balls")

    bg2.classList.toggle("union_2")
    bg2.classList.toggle("balls2")

    bg3.classList.toggle("union_3")
    bg3.classList.toggle("balls3")
    
});;

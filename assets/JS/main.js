let sliderImg = [

    'assets/Photos/image1.jpg',
    'assets/Photos/image2.jpg',
    'assets/Photos/image3.png'
]
let sliderNum = 0

let img = document.querySelector('.slider-img img')
img.src = sliderImg[sliderNum]

let next = document.querySelector('.next')
let previous = document.querySelector('.previous')




next.addEventListener('click', () => {
    sliderNum++;

    if (sliderNum > sliderImg.length - 1) {
        sliderNum = 0
    }
    img.src = sliderImg[sliderNum];

})
previous.addEventListener('click', () => {
    sliderNum--;

    if (sliderNum === -1) {
        sliderNum = sliderImg.length - 1

    }

    img.src = sliderImg[sliderNum];
})

let dots = document.querySelectorAll('.slider-dots i')
for(let dot of dots){
    dot.addEventListener('click',()=>{
        let active = document.querySelector('.active')
        active.classList.remove('active')
        dot.classList.add('active')
       let dotId =  dot.getAttribute('id')
        if (dotId==1 ) {
            img.src=sliderImg[0]
        }
        if (dotId==2 ) {
            img.src=sliderImg[1]
        }
        if (dotId==3) {
            img.src=sliderImg[2]
        }
    })
}
function AutoPlay() {
    sliderNum++;

    if (sliderNum > sliderImg.length - 1) {
        sliderNum = 0
    }
    img.src = sliderImg[sliderNum];
}
setInterval(() => {
    AutoPlay()
}, 2500);


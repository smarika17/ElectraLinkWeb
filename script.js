const modelViews = document.querySelectorAll(".product_model"),
      modelBtn = document.querySelectorAll(".product_btn"),
      modelClose = document.querySelectorAll(".product_model-close");

let model = function(modelClick) {
    modelViews[modelClick].classList.add("active_model")
}

modelBtn.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        model(i)
    })
})

modelClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modelViews.forEach((mv) => {
            mv.classList.remove("active_model")
        })
    })
})


const swiper = new Swiper('.js_testimonials_slider', {
    grabCursor: true,
    loop: true,
    spaceBetween: 30,

    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: '.js_testimonials_pagination',
        clickable: true
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 69,
        },
    },  
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.header', {origin: "top", delay: 200})
sr.reveal('.about', {origin: "top", interval: 200, delay: 400})
sr.reveal('.info', {origin: "top", interval: 200, delay: 400})
sr.reveal('.info_data', {origin: "right", interval: 200, delay: 400})
sr.reveal('.counter_container', {origin: "top", interval: 200, delay: 400})
sr.reveal('.banner_img, .banner_title', {origin: "top", interval: 200, delay: 400})
sr.reveal('.banner_icons', {origin: "left", interval: 200, delay: 400})
sr.reveal('.subtitle, .banner_info', {origin: "right", interval: 200, delay: 500})
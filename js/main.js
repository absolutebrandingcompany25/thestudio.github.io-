// Ejemplo de animación con jQuery (puerta se abre hacia los lados)
$(document).ready(function () {
    setTimeout(() => {
        $('.intro-door').addClass('slide-right');

        setTimeout(() => {
            $('.intro-title').addClass('show');
        }, 1000); // después del deslizamiento
    }, 500); // pequeño delay al inicio
});

$(document).ready(function () {
    const slides = $('.door .slide');
    let i = 0;

    setInterval(() => {
        slides.removeClass('active');
        i = (i + 1) % slides.length;
        slides.eq(i).addClass('active');
    }, 600); // Cambio rápido cada 1.5s
});

setTimeout(function () {
    $('.loading-screen').fadeOut();
}, 4000); // por ejemplo, después de 10 segundos
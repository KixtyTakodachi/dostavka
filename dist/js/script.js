$(document).ready(function(){
    $('.carousel').slick({
        centerMode: true,
        centerPadding: '405px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right.png"></button>',
    });
    function validateForms(form){
        $(form).validate({
            rules:{
                name: {
                required: true,
                minlength: 2
                },
                phone: "required",
                email: {
                required: true,
                email: true
                }
            },
            messages:{
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символов")
                },
                phone: "Пожалуйста, введите номер телефона",
                email:{
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес потчы"
                }
            }
        });
    };
    validateForms('#cons-form');
    validateForms('#ques-form');
});

$(document).ready(function(){
    $('.carousel').slick({
        centerMode: true,
        centerPadding: '405px',
        slidesToShow: 1,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right.png"></button>',
    });
    /* $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #thanks').fadeIn('slow')
    }); */
    $('.modal__close').on('click', function(){
        $('.overlay, #thanks').fadeOut('slow')
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
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e){
        e.preventDefault();
        let input_value = $(this).find("input").val();
        if(input_value != ""){
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).success(function(){
                $(this).find("input").val("");
                $('.overlay, #thanks').fadeIn('slow');
                $('form').trigger('reset');
            });
            return false
        }
    });
});

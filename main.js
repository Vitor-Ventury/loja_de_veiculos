$('document').ready(function(){
    
    $('.hamburguerMenu').click(function(){
        $('.subMenu').slideToggle();
    })

    $('.carousel').slick({
        autoplay:true,
        arrows:false,
    });

    $('#cellphone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            name: {
                required:true
            },
            cellphone: {
                required:true
            },
            email: {
                required: true,
                email: true
            },
            interestVehicle: {
                required: false
            },
            message: {
                required: true
            }
        },
        messages: {
            name: '<p class="required">Este campo é obrigatório',
            cellphone: '<p class="required">Este campo é obrigatório',
            email: '<p class="required">Este campo é obrigatório',
            message: '<p class="required">Este campo é obrigatório'
        }
    });

    $('section button').click(function(){

        const destiny = $('#contactForm')

        const valueChoice = $(this).parent().find('h3').text()

        $('#interestVehicle').val(valueChoice)

        $('html').animate({
            scrollTop: destiny.offset().top
        }, 1000);
    })

})
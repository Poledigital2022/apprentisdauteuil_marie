jQuery(function($) {

 //var url_s =  window.location.host+window.location.pathname+'actions/form_submit.php';
var url_s =  'https://marie.apprentis-auteuil.org/actions/form_submit.php';
 //console.log(url_s);
    function valid_submit(){
        if($("#form-1")[0].checkValidity()) {
            var isValid = true, $form = $('#form-1'), $quizSuccess = $form.find('.msg-success');
            if (isValid) {
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: url_s,
                    dataType: 'json',
                    data: $form.serialize()
                }).complete(function (response) {
                    if (response.success) {
                        $('#form-1').trigger('reset');
                        $('.owl-reviews').owlCarousel('destroy');
                        $('.owl-reviews').remove();
                        $('#b_vosmots .owl_wrapper').append(response.responseText);
                        setTimeout(function () {
                            $('.owl-reviews').owlCarousel({
                                loop: true,
                                nav: true,

                                dots:false,
                                navText: [ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>' ],
                                responsive: {
                                    0: {
                                        items:1
                                    },
                                    420: {
                                        items:1,
                                        stagePadding:30
                                    },
                                    720: {
                                        items: 2
                                    },
                                    1200: {
                                        items: 3
                                    }

                                }
                            });
                        },100);
                        setTimeout(function () {
                            $.fn.fullpage.setAllowScrolling(true);
                            $('.fp_popup').removeClass('active');
                        },500);
                    }
                    else if (response.errors) {
                        console.log('error');
                        $quizSuccess.html('Errors');
                    }
                    else {
                        $quizSuccess.html('Require empty fields');
                        console.log('errer 2');
                    }
                });
            } else {
                $quizSuccess.html('No success. Try again leter');

            }
            // return false;
            // e.preventDefault();
        }
        else {
            $("#form-1")[0].reportValidity();
        }
        console.log(window);
        if(window.redirect) {
            window.open('https://donner.apprentis-auteuil.org/b?cid=83', '_blank');
            window.redirect = false;
        }
        return false;
    }

    // $('#form-1').on('submit', function () {
    //
    // });

    $('#form-1').on('click', '#donate', function(e) {
        window.redirect = true;
    });
    $('#form-1').on('click', '#nodonate', function(e) {
        window.redirect = false;
    });


    $('#form-1 input').on('click',function () {
     $('div.error').hide();
    });
    $('#form-1 textarea').on('click',function () {
        $('div.error').hide();
    });


    $.validator.addMethod("customemail",
        function(value, element) {
            return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
        },
        "Sorry, I've enabled very strict email validation"
    );
    $.validator.setDefaults({ ignore: ".civilite" });

// initialize validate plugin on the form
    $('#form-1').validate({
        errorElement : 'div',
        messages: {
            nom: "Merci de renseigner ce champs afin d'envoyer votre message.",
            prenom: "Merci de renseigner ce champs afin d'envoyer votre message.",
            email: "Merci de saisir une adresse mail correcte pour pouvoir envoyer votre message",
            // phone: "Tous les champs doivent être remplis",
            message: "Merci de renseigner ce champs afin d'envoyer votre message."
            //message: "Tous les champs doivent être remplis"
        },
        success: function (label, element) {
        //    $(element).tooltipster('hide');
        },

        rules: {
            message:"required",
            nom: "required",
            prenom: "required",
            email: {
                required: {
                    depends:function(){
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                customemail: true
            }

        },
        submitHandler: function (form) { // for demo
            console.log('validate success');
            valid_submit();

        },
        invalidHandler: function(event, validator) {
            // 'this' refers to the form
            console.log('again');

        }
    });

});

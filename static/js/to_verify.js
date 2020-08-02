$(document).ready(function() {

    $('.updateButton').on('click', function() {

        var member_id = $(this).attr('member_id');


        req = $.ajax({
            url : '/verify',
            type : 'POST',
            data : { id : member_id }
        });

        req.done(function(data) {

            $('#memberSection'+member_id).fadeOut(1000).fadeIn(1000);

        });


    });

});

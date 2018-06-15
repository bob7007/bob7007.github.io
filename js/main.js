

$(document).ready(function () {

    var i = 2;


    $("#add").on("click", function () {

        i++;
        var a = $("#userInput").val();

        var items = $('#myList li').length
        $("#myList").append('<li class="list-group-item list-group-item-primary"><p id="' + (items + 1) + '-text">' + a + '</p><label class="check2 container2"><input id="' + (items + 1) + '-check" class="check-test" type="checkbox"><span class="checkmark"></span></label></li>');




        //$("label").addClass("check2");


        //alert($(".check2").length);

    });


   

    $(document).on('click', '.check-test', function (event) {
        console.log(event.target.id);
        var id = event.target.id;
        var auxSplit = id.split('-');
        var intId = auxSplit[0];
        console.log(intId);

        $('#' + intId + "-text").addClass("scratch");
    })


    $('input[name=3]').click(function () {
        if ($('input[name=3]').is(':checked')) {
            $("li p").eq(3).addClass("scratch");
        }
        else {

            $("li p").eq(3).removeClass("scratch");
        }
    });







    $("input").on("click", "input[name=3]", function () {

        if ($('input[name=3]').is(':checked')) {
            $("li p").eq(3).addClass("scratch");
        }
        else {

            $("li p").eq(3).removeClass("scratch");
        }




    });






















});
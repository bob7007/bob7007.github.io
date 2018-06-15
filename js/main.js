
	
	$(document).ready(function(){
	
	var i = 2;

	
	$("#add").on("click", function(){
	
	i++;
	var a = $("#userInput").val();	
	
    $("#frame ul").append('<li class="list-group-item list-group-item-primary"><p>'+a+'</p><label class="check2 container2"><input type="checkbox" name="3"><span class="checkmark"></span></label></li>');
	
	//$("label").addClass("check2");
	
	
	//alert($(".check2").length);
	
								});
	
	

	
	
	
	$('input[name=0]').click(function () {
    if ($('input[name=0]').is(':checked')) {
        $("li p").eq(0).addClass("scratch");
    }
    else{
   
		$("li p").eq(0).removeClass("scratch");
    }
});
	
	
	$('input[name=1]').click(function () {
    if ($('input[name=1]').is(':checked')) {
        $("li p").eq(1).addClass("scratch");
    }
    else{
   
		$("li p").eq(1).removeClass("scratch");
    }
});
	
	
	$('input[name=2]').click(function () {
    if ($('input[name=2]').is(':checked')) {
        $("li p").eq(2).addClass("scratch");
    }
    else{
   
		$("li p").eq(2).removeClass("scratch");
    }
});
	
	
	
	
	
	
	
	$("input").on("click", "input[name=3]", function() {
		
		if ($('input[name=3]').is(':checked')) {
        $("li p").eq(3).addClass("scratch");
    }
    else{
   
		$("li p").eq(3).removeClass("scratch");
    }
		
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
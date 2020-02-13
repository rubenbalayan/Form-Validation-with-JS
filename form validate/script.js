$(document).ready(function(){

 var submit = $("#submit");
 var name = $("#name");
 var lastname = $("#lastname");
 var city = $("#city");
 var email = $("#email");
 var phone = $("#phone");
 var password = $("#password");
 var c_password = $("#c_password");
 var age = $("#age");

var errors = {

	mail : 0,
 	age : 0,
 	password : 0,
 	cpassword : 0,
 	phone : 0
};

$("*").keyup(function(){
	var text = $(this).val();
	maxlength = 30;

    if(maxlength > 0)  
    {
        $(this).val(text.substr(0, maxlength)); 
    }
});

$(phone).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^0-9]/ig, '');
  });
});

$("select").click(function(){
	if($("select").val() == "374"){
    	$(phone).attr("placeholder","XX - XX - XX - XX");
    }
    else if($("select").val() == "7"){
    	$(phone).attr("placeholder","(XXX) XXX - XX - XX");
    }
});

$(phone).keyup(function(){
	var text = $(this).val();
        var maxlength;
        if($("select").val() == "374"){
        	maxlength = 8;
        }
        else if($("select").val() == "7"){
        	maxlength = 10;
        }

        if(maxlength > 0)  
        {
                $(this).val(text.substr(0, maxlength)); 
        }
});

$(email).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^a-z\.@\0-9]/ig, '');
  });

});

$(email).change(function(){
	var regex = ["@mail.ru","@gmail.com","@inbox.ru","@list.ru","@bk.ru","@yahoo.com"];
	var text = $(this).val();

	if(text.match(regex[0]) || text.match(regex[1]) || text.match(regex[2]) || text.match(regex[3]) || text.match(regex[4]) || text.match(regex[5])){
		$(".error_mail").remove();
		errors.mail = 0;

	}
	else{
		if($(".error_mail").css("display")=="block"){}
		else{
			$(this).parent().prepend("<p class = 'error_mail'>Invalid type of mail</p>");
			errors.mail = 1;
		}
	}

});

$(phone).change(function(){
	if($("select").val() == "374" && $(phone).val().length == 8){
        	$(".error_phone").remove();
        	errors.phone = 0;	
        }
    else if($("select").val() == "7" && $(phone).val().length == 10){
        	$(".error_phone").remove();
        	errors.phone = 0;
        }
    else{
			if($(".error_phone").css("display")=="block"){}
			else{
			$(this).parent().prepend("<p class = 'error_phone'>You must enter at least 8-10 characters</p>");
			errors.phone = 1;
			}
		}

});


$(age).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^0-9]/ig, '');
  });

});

$(age).keyup(function(){
	var text = $(this).val();
	maxlength = 2;

    if(maxlength > 0)  
    {
        $(this).val(text.substr(0, maxlength)); 
    }
});

$(age).change(function(){
	if($(this).val() < 18 || $(this).val() > 70){
		if($(".error_age").css("display")=="block"){}
			else{
			$(this).parent().prepend("<p class = 'error_age'>You don`t have permisson to this site</p>");
			errors.age = 1;
			}
	}
	else{
		$(".error_age").remove();
		errors.age = 0;
	}
});

$(name).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^a-z]/ig, '');
  });

});

$(lastname).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^a-z]/ig, '');
  });

});

$(city).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^a-z]/ig, '');
  });

});

$(password).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^a-z\_\0-9]/ig, '');
  });

});

$(c_password).on('input blur keyup paste', function() {
  $(this).val(function(i, v) {
    return v.replace(/[^a-z\_\0-9]/ig, '');
  });

});

$(password).change(function(){
	if($(this).val().length < 8){
		if($(".error_pass").css("display")=="block"){}
		else{
			$(this).parent().prepend("<p class = 'error_pass'>You must enter at least 8 characters</p>");
			errors.password = 1;
		}
	}
	else{
		$(".error_pass").remove();
		errors.password = 0;
	}
});

$(c_password).change(function(){
	if($(c_password).val() != $(password).val()){
		if($(".error_c_pass").css("display")=="block"){}
		else{
			$(this).parent().prepend("<p class = 'error_c_pass'>Passowords are different</p>");
			errors.cpassword = 1;
		}
	}
	else{
		$(".error_c_pass").remove();
		errors.cpassword = 0;
	}
});

$(submit).click(function(){
	if($(name).val() == "" || $(lastname).val() == "" || $(phone).val() == "" || $(email).val() == "" || $(age).val()== "" || $(city).val() == "" || $(password).val() == "" || $(c_password).val() == ""){
		alert("You have (an) empty field(s)");
		return false;
	}
	else if($(".error_c_pass").css("display")=="block" || $(".error_pass").css("display")=="block" || $(".error_age").css("display")=="block" || $(".error_phone").css("display")=="block" || $(".error_mail").css("display")=="block"){
		alert("You have (an) error(s), fix it");
		return false;
	}
	else if(errors.mail == 1 || errors.phone == 1 || errors.password == 1 || errors.age == 1 || errors.cpassword == 1 ){
		alert("You have (an) error(s), fix it");
		return false;
	}
});

	
});

$(document).ready(function(){
			$("#topNavContent").load("/assets/templates/partial/home_top_nav.html"); 
    		$("#bottomNavContent").load("/assets/templates/partial/home_bottom_nav.html"); 
			$("#signupform").hide();
    		$("#signup").click(function(){
        		$(this).prop("disabled", true);
        		$("#login").prop("disabled", false);
        		$("#loginform").hide();
        		$("#signupform").show();
    		});
    		$("#login").click(function(){
        		$(this).prop("disabled", true);
        		$("#signup").prop("disabled", false);
        		$("#signupform").hide();
        		$("#loginform").show();
    		});
	});
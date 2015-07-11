$(document).ready(function(){
 $("#msg-error").click(function(){ $(this).hide('slow'); });
$("#contact-form").submit(function(){  // actions when form is submitted
		$("#msg-success").hide();
		$("#msg-error").hide(); //hide the msg alert			
	    var btn = $("#sendBtn");          
		btn.button('loading')       // change button state to loading till ajax complete
		name = $("#ame").val();
		email = $("#email").val();
		mobile = $("#mobile").val();
		message = $("#message").val();
        if ((name==null || name=="") || (email==null || email=="") || (mobile==null || mobile=="") || (message==null || message==""))  // i.e if any of the username password field is empty
        {
         $("#msg-error").html("Please Fill the form completely");
		 btn.button('reset');
		 $("#msg-error").show(200);
		  return false;
        }
		else{
		  $.ajax({
			type: "POST",
			url: "contact-page.php",
			data: "name="+name+"&email="+email+"&mobile="+mobile+"&message="+message,
			success: function(resp){
			   if(resp == 'true'){ // if values are added
			    $("#msg-success").html("<strong>Thanks!</strong> Your message has been sent.");
				$("#msg-success").show(200);
				$("#contact-form").hide();
			   }
			   else if(resp == 'false')
			   {
				//else display error
			    $("#msg-error").html("<strong>Sorry!</strong> Message sending failed");
				$("#msg-error").show(200);
			    btn.button('reset');
			   }
			   else if(resp == 'false name')
			   {
				//else display error
			    $("#msg-error").html("<strong>ERROR!</strong> Please enter valid name.");
				$("#msg-error").show(200);
			    btn.button('reset');
			   }
			   else if(resp == 'false email')
			   {
				//else display error
			    $("#msg-error").html("<strong>ERROR!</strong> Please enter valid email address.");
				$("#msg-error").show(200);
			    btn.button('reset');
			   }
			},
		  });
		  return false;
		}
      });  // .submit function ends
		
});
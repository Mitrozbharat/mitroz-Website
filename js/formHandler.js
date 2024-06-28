function handleFormSubmit() {

  var Name = document.getElementsByName('Name')[0].value;
  var Phone = document.getElementsByName('Phone')[0].value;
  var Email = document.getElementsByName('Email')[0].value;
  var Message = document.getElementsByName('Message')[0].value;

  if(Name != "" && Email != "" && Phone != "" && Message != "" && isValidEmail(Email)){
        $.ajax({
          url: "https://mitroz-email-api.mitroztech.com/api/Email/send-text-email",
          type: "POST",
          data: JSON.stringify({ Name: Name, Email: Email, Phone: Phone, Message: Message }),
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          success: function (response) {
              // Handle success
          },
          error: function (xhr, status, error) {
              // Handle error
              console.log(xhr, status, error);
          }
      });

      
    document.getElementsByName('Name')[0].value="";
    document.getElementsByName('Phone')[0].value="";
    document.getElementsByName('Email')[0].value="";
    document.getElementsByName('Message')[0].value="";
      
      document.getElementById("magalert").style.display = "block";

      setTimeout(function () {
          document.getElementById("magalert").style.display = "none";
      }, 6000);
  }
  else{
     if(Name==""){
      $('#Name').focus();
     }
     else if(Email==""){
      $('#Email').focus();
     }
     else if(Phone==""){
      $('#Phone').focus();
     }
     else if(Message==""){
      $('#Message').focus();
     }
     else if(!isValidEmail(Email)){
      $('#Email').focus();
     }
  }

 
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

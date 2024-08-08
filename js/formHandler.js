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
function handleFormSubmitindex() {
  var Name = document.getElementsByName('Name')[0].value;
  var Phone = document.getElementsByName('Phone')[0].value;
  var companyName = document.getElementsByName('companyName')[0].value;
  var Email = document.getElementsByName('Email')[0].value;
  var Message = document.getElementsByName('Message')[0].value;

  var solutionCheckboxes = document.querySelectorAll('#solutionCheckboxes input[type="checkbox"]:checked');
  var improvementCheckboxes = document.querySelectorAll('#improvementCheckboxes input[type="checkbox"]:checked');

  var Solutionlookingselect = Array.from(solutionCheckboxes).map(cb => cb.value).join(', ');
  var Improvementneededselect = Array.from(improvementCheckboxes).map(cb => cb.value).join(', ');

  if (Name !== "" && Email !== "" && Phone !== "" && companyName !== "" && Message !== "" && Solutionlookingselect !== "" && Improvementneededselect !== "" && isValidEmail(Email)) {
    $.ajax({
      url: "https://mitroz-email-api.mitroztech.com/api/Email/send-text-movingemail",
      type: "POST",
      data: JSON.stringify({ Name: Name, Email: Email, Phone: Phone, Message: Message, companyName: companyName, Solutionlookingselect: Solutionlookingselect, Improvementneededselect: Improvementneededselect }),
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

    document.getElementsByName('Name')[0].value = "";
    document.getElementsByName('Phone')[0].value = "";
    document.getElementsByName('Email')[0].value = "";
    document.getElementsByName('Message')[0].value = "";
    document.getElementsByName('companyName')[0].value = "";

    document.querySelectorAll('#solutionCheckboxes input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('#improvementCheckboxes input[type="checkbox"]').forEach(cb => cb.checked = false);

    document.getElementById("magalert").style.display = "block";

    setTimeout(function () {
      document.getElementById("magalert").style.display = "none";
    }, 6000);
  } else {
    if (Name == "") {
      $('#Name').focus();
    } else if (Email == "") {
      $('#Email').focus();
    } else if (Phone == "") {
      $('#Phone').focus();
    } else if (companyName == "") {
      $('#companyName').focus();
    } else if (Message == "") {
      $('#Message').focus();
    } else if (!isValidEmail(Email)) {
      $('#Email').focus();
    }
  }
}


// function handleFormSubmitindex() {

//   var Name = document.getElementsByName('Name')[0].value;
//   var Phone = document.getElementsByName('Phone')[0].value;
//   var companyName = document.getElementsByName('companyName')[0].value;
//   var Email = document.getElementsByName('Email')[0].value;
//   var Message = document.getElementsByName('Message')[0].value;

//   var Solutionlooking = document.getElementById("Solutionlooking");
//   var Solutionlookingselect = Solutionlooking.options[Solutionlooking.selectedIndex].value;

//   var Improvementneeded = document.getElementById("Improvementneeded");
//   var Improvementneededselect = Improvementneeded.options[Improvementneeded.selectedIndex].value;

//   if(Name != "" && Email != "" && Phone != "" && companyName != "" && Message != "" && Solutionlookingselect != "0" && Improvementneededselect != "0" && isValidEmail(Email)){
//         $.ajax({
//           url: "https://mitroz-email-api.mitroztech.com/api/Email/send-text-movingemail",
//           type: "POST",
//           data: JSON.stringify({ Name: Name, Email: Email, Phone: Phone, Message: Message,companyName:companyName,Solutionlookingselect:Solutionlookingselect,Improvementneededselect:Improvementneededselect }),
//           dataType: "json",
//           contentType: "application/json; charset=utf-8",
//           success: function (response) {
//               // Handle success
//           },
//           error: function (xhr, status, error) {
//               // Handle error
//               console.log(xhr, status, error);
//           }
//       });

      
//     document.getElementsByName('Name')[0].value="";
//     document.getElementsByName('Phone')[0].value="";
//     document.getElementsByName('Email')[0].value="";
//     document.getElementsByName('Message')[0].value="";
//     document.getElementsByName('companyName')[0].value="";

//     document.getElementsByName('Solutionlookingselect')[0].value="";
//     document.getElementsByName('Improvementneededselect')[0].value="";

//       document.getElementById("magalert").style.display = "block";

//       setTimeout(function () {
//           document.getElementById("magalert").style.display = "none";
//       }, 6000);
//   }
//   else{
//      if(Name==""){
//       $('#Name').focus();
//      }
//      else if(Email==""){
//       $('#Email').focus();
//      }
//      else if(Phone==""){
//       $('#Phone').focus();
//      }
//      else if(companyName==""){
//       $('#companyName').focus();
//      }
//      else if(Message==""){
//       $('#Message').focus();
//      }
//      else if(!isValidEmail(Email)){
//       $('#Email').focus();
//      }
//   }

 
// }

function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var pdfFile = document.getElementById('pdfFile').files[0];

  var formData = new FormData();
  formData.append('Name', name);
  formData.append('Email', email);
  formData.append('Phone', phone);
  formData.append('pdfFile', pdfFile);

  try {
    $.ajax({
      url: "https://mitroz-email-api.mitroztech.com/api/Email/send-pdf-job",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        // Handle success
        // console.log('Email sent successfully:', response);
        // alert('Email sent successfully');
        
        // Clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('pdfFile').value = '';

        // Show megaalert
        document.getElementById("megalert").style.display = "block";

        // Hide megaalert after 6 seconds
        setTimeout(function () {
          document.getElementById("megalert").style.display = "none";
        }, 6000);
      },
      error: function(xhr, status, error) {
        // Handle error
        console.log(xhr, status, error);
        alert('Error sending email: ' + error);
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email');
  }
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


function toggleCheckboxes(containerId) {
    const container = document.getElementById(containerId);
    container.classList.toggle('active');

    // Close other open dropdowns
    document.querySelectorAll('.checkbox-container').forEach(div => {
        if (div.id !== containerId) {
            div.classList.remove('active');
        }
    });
}

// Close dropdowns if clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-button')) {
        document.querySelectorAll('.checkbox-container').forEach(div => {
            div.classList.remove('active');
        });
    }
});

// Prevent dropdown from closing when clicking inside
document.querySelectorAll('.checkbox-container').forEach(container => {
    container.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

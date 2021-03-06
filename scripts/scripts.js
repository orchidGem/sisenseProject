(function() {
  'use strict';
  window.addEventListener('load', function() {

    // Form validation
    var forms = document.getElementsByClassName('validate-form');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
          processFormSubmission();
        }
        form.classList.add('was-validated');
      }, false);
    });

    (function fillerInfo() {
      $('#firstNameInput').val("Laura");
      $('#lastNameInput').val("Testing");
      $('#emailInput').val("test@gmail.com");
      $('#timeFrameSelect').val("over 6 months");
    })

    // Process form with ajax
    function processFormSubmission() {
      var formData = {
          'firstName' : $('#firstNameInput').val(),
          'lastName'  : $('#lastNameInput').val(),
          'timeframe' : $('#timeFrameSelect').val(),
          'email'     : $('#emailInput').val()
      };

      var request = $.ajax({
        url: "processForm.php",
        method: "POST",
        data: formData,
        dataType: "json"
      });

      request.done(function( msg ) {
        console.log(msg);
        if (msg['success']) {
          showSuccess();
          resetForm();
        } else {
          showError();
          console.log("error");
        }
      });

      request.fail(function( jqXHR, textStatus ) {
        showError();
        console.log(textStatus);
      });
    }

    // show success on form submit
    function showSuccess() {
      $('form .alert').html("&#10003; Success! Information sent.")
      $('form .alert').toggleClass('alert-success');
      $('form .alert').toggleClass('invisible');
    }

    // show error on form submit
    function showError() {
      $('form .alert').html("&#10007; Error submitting form!")
      $('form .alert').toggleClass('alert-danger');
      $('form .alert').toggleClass('invisible');
    }

    // reset form
    function resetForm() {
      $('form').removeClass("was-validated");
      $('form').trigger("reset");

      setTimeout(function(){
        $('form .alert').toggleClass("invisible");
        $('form .alert').toggleClass("alert-success");
      }, 3000);
    }

    // Clear validation on modal close
    $('#contactFormModal').on('hidden.bs.modal', function (e) {
      $('form').trigger("reset");
      $('form').removeClass("was-validated");
    })

  }, false);
})();

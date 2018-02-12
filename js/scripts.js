(function() {
  'use strict';
  window.addEventListener('load', function() {

    // Form validation
    var forms = document.getElementsByClassName('validate-form');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
        }
        form.classList.add('was-validated');
      }, false);
    });

    (function fillerInfo() {
      $('#firstNameInput').val("Laura");
      $('#lastNameInput').val("Evans");
      $('#emailInput').val("laephoto@gmail.com");
      $('#timeFrameSelect').val("over 6 months");
    })();


    // Clear validation on modal close
    $('#contactFormModal').on('hidden.bs.modal', function (e) {
      $('form').removeClass("was-validated");
    })

  }, false);
})();

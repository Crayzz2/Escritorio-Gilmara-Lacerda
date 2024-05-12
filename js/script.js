$(document).ready(function() {
    $('#emailForm').submit(function(event) {
        event.preventDefault(); // Evitar envio padrão do formulário
        
        let hideMsg = function(){
            $('#sendConfirm').toggle();
        }

        // Obter dados do formulário
        var formData = {
            name: $('input[name=name]').val(),
            email: $('input[name=email]').val(),
            message: $('textarea[name=message]').val()
        };

      // Enviar dados via AJAX
      $.ajax({
        url: "https://formsubmit.co/ajax/glacerda74@outlook.com",
        method: "POST",
        data: formData,
        dataType: "json",
        success: function(response) {
            console.log(response);
            hideMsg()
            setTimeout(hideMsg, 5000);
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#inputMessage').val('');

        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
            hideMsg()
            setTimeout(hideMsg, 5000);
        }
      });
    
    });
  });
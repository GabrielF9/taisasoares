// $(document).ready(function() {
//     
//     var submit = document.getElementById("submit")

//     submit.onsubmit(function() {
//         console.log('huahuaha')
//         // var name = document.getElementById(".name").value
//         // var email = document.getElementById(".email").value
//         // var subject = document.getElementById(".subject").value
//         // var message = document.getElementById(".message").value
        
//         // if (name.length >= 1 && re.test(email) && subject.length >= 1 && message.length >= 1) {
//         //     alert("Tudo Certo!")
//         // }else{
//         //     alert("Erro ao enviar e-mail:\nVerifique se todos os campos estão preenchidos corretamente!")
//         // }
//     })
// })

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var submit = document.getElementById("submit");

        if (name.length >= 1 && re.test(email) && subject.length >= 1 && message.length >= 1) {
            var template_params = {
                "subject": subject,
                "from_name": name,
                "message_html": message,
                "from_mail": email
            }
                
            var service_id = "default_service";
            var template_id = "template_2URAr0s4";

            submit.value = "Enviando...";
            emailjs.send(service_id, template_id, template_params)
                .then(function(){ 
                    document.getElementById('contact-form').reset();
                    submit.value = "Enviar Mensagem";
                }, function(err) {
                    alert("Erro ao enviar e-mail:\nPor favor, tente novamente.")
                    console.log(err);
                });
        }else{
            alert("Erro ao enviar e-mail:\nVerifique se todos os campos estão preenchidos corretamente!");
        }
        
    });
}
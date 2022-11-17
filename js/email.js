window.onload = function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        let captcha = document.forms['contact-form']['captcha'];
        if (captcha.value != 365) {
            document.getElementById('validate-message').innerHTML = "Неправильне число!";
            return false;
        }
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_q8xztod', 'template_ofamausa@gmail.', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        document.getElementById('validate-message').innerHTML = "Лист відправленно!";
        form.reset();
    });
}
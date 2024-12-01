document.getElementById('malicious-link').addEventListener('click', function (event) {
    // Mencegah tautan default
    event.preventDefault();

    // Membuka tab baru ke URL jahat
    window.open('https://evil.com');

    // Memaksa logout di tab sumber
    window.location.href = 'https://www.codepolitan.com/logout/';
});

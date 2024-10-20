document.getElementById('encouragement-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nama pengguna
    const name = document.getElementById('name-input').value;

    // Fetch kata penyemangat dari Quotable API dengan CORS proxy
    fetch('http://localhost:3000/quote')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Tampilkan kata penyemangat dengan nama pengguna
            const personalizedMessage = `${name}, ${data.content} — ${data.author}`;
            document.getElementById('output-name').innerText = name;
            document.getElementById('output-message').innerText = personalizedMessage;
            document.querySelector('.result-section').style.display = 'block';
        })
        .catch(error => console.error('Error fetching quote:', error));
});

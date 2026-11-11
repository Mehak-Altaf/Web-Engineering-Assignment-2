
const form = document.getElementById('profileForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('studentName').value.trim();
    let email = document.getElementById('studentEmail').value.trim();

    let error = document.getElementById('errorMessage');
    let card = document.getElementById('outputCard');

    if (name === '' || email === '') {
        error.classList.remove('hidden');
        card.classList.add('hidden');
    } 
    else {
        error.classList.add('hidden');

        document.getElementById('displayName').textContent = name;
        document.getElementById('displayEmail').textContent = email;

        card.classList.remove('hidden');

        document.getElementById('studentName').value = '';
        document.getElementById('studentEmail').value = '';
    }
});

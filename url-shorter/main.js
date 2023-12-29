function sendlink()
{
    fullScreen = createButton('FullScreen');
    fetch('/sendlink', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            link: document.getElementById('link').value
        })
    }) .then(response => {
        if (response.ok) {
            // Redirect to the new page if the response is successful
            window.location.href = '/k.html';
        } else {
            // Handle error cases
            console.error('Error:', response.status);
        }
    })
    .catch(error => console.error('Error:', error));
}

// script.js
document.addEventListener('DOMContentLoaded', function () {
    //click-eventlistener
    document.getElementById('searchButton').addEventListener('click', performSearch);
});

function performSearch() {
    var searchTerm = "Alan_Turing";
    var apiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(searchTerm);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.extract) {
                document.getElementById('result-content').innerHTML = data.extract;
            } else {
                document.getElementById('result-content').innerHTML = "No results found.";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result-content').innerHTML = "An error occurred.";
        });
}

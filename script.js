
function mainSearch() {
    let clientId2 = "taligljG-L0DlFOiWbVJD2JLhuVq1dKlmMclzWyKtU8";
    let query = document.getElementById('searchMe').value;

    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId2 + "&query=" +query;

    //make request to the api
    fetch(url)
    .then(function(data) {
        return data.json(); 
    })
    .then(function(data){
        console.log(data);

        data.results.forEach(photo  => {
            let result = `
                <img src="${photo.urls.regular}">
                <a href="${photo.links.download}">
                `;
                let photoSpace = document.getElementById('results');
                function displayPhotos () {
                    photoSpace.innerHTML = result
                }
                displayPhotos();
        });

            // document.getElementById('results').append(result);
    });
}
    


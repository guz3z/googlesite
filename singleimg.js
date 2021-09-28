function searchPhoto() {
    let clientId = "LEIe9GLnkRsNK1OL9IvVZsaz-m0WWmi0-9Z4rMQFtv0";
    let query = document.getElementById('searchMe').value;

    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" +query;


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

                document.getElementById('results').append(result);
        });
    });

}

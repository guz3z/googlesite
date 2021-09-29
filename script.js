function mainSearch() {
    let clientId2 = "taligljG-L0DlFOiWbVJD2JLhuVq1dKlmMclzWyKtU8";
    let query = document.getElementById('searchMe').value;

    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId2 +"&query=" +query;

    //make request to the api
    fetch(url)
    .then(function(data) {
        return data.json(); 
    })
    .then(function(data){
        console.log(data);

        data.results.forEach(photo  => {
            let result = `
                <img src="${photo.urls.regular + "&w=400"}">
                <a href="${photo.links.download}">
                `;
                let photoSpace = document.getElementById('results');
                function displayPhotos () {
                    if (result){
                        photoSpace.innerHTML = result
                    } else {
                        photoSpace.innerHTML = '';
                    }
                }
                displayPhotos();
                searchBar.setAttribute('class', 'postClick')
        });

            // document.getElementById('results').append(result);
    });
}
    
let searchBar = document.getElementById('searchMe')
searchBar.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "Enter":
            mainSearch()
        break;
        default: 
        console.log('press the enter key to search')
    }
})

const input = document.getElementById('myInputContainer')
const photoSpace = document.getElementById('photo-space')

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        loadImg();
})

function loadImg(){
    removeImages();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=1&client_id=taligljG-L0DlFOiWbVJD2JLhuVq1dKlmMclzWyKtU8'
    fetch(url)
    .then(response => {
        console.log(response);
            if(response.ok)
                return response.json()
            else
                alert(response.status)
            })
    .then(data =>{
        const imageNodes = [];
        for(let i = 0; i < data.results.length; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
        }
    })
}

function removeImages(){
    photoSpace.innerHTML = '';
}
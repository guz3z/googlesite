const input = document.getElementById('searchbar')
const photoSpace = document.getElementById('photo-space')
// import cors from 'cors';

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        loadImg();
})

function loadImg(response, request){
    // removeImages();
    const url = `https://api.unsplash.com/search/photos/?query=${input.value}&per_page=10&client_id=taligljG-L0DlFOiWbVJD2JLhuVq1dKlmMclzWyKtU8`
    fetch(url)
    .then(response => response.json())
    // let data = response.json()
    // {
        // console.log(response);
        //     if(response.ok)
        //         return response.json.stringify
        //     else
        //         alert(response.status)
        //     })
    .then(data => generateContent(data));
    console.log(response)
    // console.log(data);
        // {
        // const imageNodes = [];
        // for(let i = 0; i < data.results.length; i++){
        //     imageNodes[i] = document.createElement('div');
        //     imageNodes[i].className = 'img';
        //     imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
        // }
    // }
    // )
}

function removeImages(){
    photoSpace.innerHTML = '';
}
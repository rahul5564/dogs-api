var img = document.getElementById('dogs')
img.src = 'https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg';
img.style.width = '500px'
img.style.background = 'cover';
function chnage(){
    var url = 'https://dog.ceo/api/breeds/image/random';
   
    fetch(url).then((resp) => {
        return resp.json();
    }).then((data) => {
        img.src = data.message;
        img.style.width = '800px'
        img.style.background = 'cover';
        console.log(data);
    }).catch((err) => {
        console.log(err);
        img.alt = 'NO IMAGE HERE'
    })
}


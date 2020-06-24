let searchBox = document.querySelector('#search');
let pictures = document.querySelectorAll('a');

searchBox.addEventListener('keyup', (event) => {
    console.log(searchBox.value);
    for( let i = 0; i < pictures.length; i++ ) {
        if( searchBox.value.length == 0 ){
            pictures[i].style.display = 'inline';
        }
        else if(pictures[i].dataset.title.includes(searchBox.value)) {
            pictures[i].style.display = 'inline';
        } else {
            pictures[i].style.display = 'none';
        }
    }
});
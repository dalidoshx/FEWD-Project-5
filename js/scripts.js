const searchBox = document.querySelector('#search');
const pictures = document.querySelectorAll('a');

searchBox.addEventListener('keyup', (event) => {
    for( let i = 0; i < pictures.length; i++ ) {
        if(pictures[i].dataset.title.includes(searchBox.value.toLowerCase()) || searchBox.value.length == 0) {
            pictures[i].style.display = 'inline';
        } else {
            pictures[i].style.display = 'none';
        }
    }
});
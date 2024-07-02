const movies = document.querySelector(".movies-section")
const shows = document.querySelector(".shows-section")
const music = document.querySelector(".music-section")
const moviesButton = document.getElementById("movies-button")
const showsButton = document.getElementById("shows-button")
const musicButton = document.getElementById("music-button")
const moreOptions = document.querySelector("#more-options-tab")
const perfil = document.getElementById("perfil-button")
const loopScroll = document.querySelector('.loopingScroll')

function scrolll() {
    var left = document.querySelector(".section-active")
    left.scrollBy(-380, 0)
}
function scrollr() {
    var right = document.querySelector(".section-active")
    right.scrollBy(380, 0)
}



function changeToShows(){
    movies.classList.remove('section-active')
    music.classList.remove('section-active')
    shows.classList.add('section-active')

    moviesButton.classList.remove('active')
    musicButton.classList.remove('active')
    showsButton.classList.add('active')
}
function changeToMusic(){
    movies.classList.remove('section-active')
    shows.classList.remove('section-active')
    music.classList.add('section-active')

    moviesButton.classList.remove('active')
    showsButton.classList.remove('active')
    musicButton.classList.add('active')
}
function changeToMovies(){
    shows.classList.remove('section-active')
    music.classList.remove('section-active')
    movies.classList.add('section-active')

    showsButton.classList.remove('active')
    musicButton.classList.remove('active')
    moviesButton.classList.add('active')
}

function perfilShowClose(){
    document.onclick = function(event){
        if(!perfil.classList.contains('hidden')){
            if(event.target.id != 'perfil-button' & event.target.id != 'sair-perfil'){
                perfil.classList.add("hidden")
            }
        } else {
            if(event.target.id === 'user-photo'){
                perfil.classList.remove('hidden')
            }
        }
    }
}
function moShowClose(){
    document.onclick = function(event){
        if(!moreOptions.classList.contains('hidden')){
            if(event.target.id != 'more-options-tab' & event.target.id != 'redes-sociais' 
                & event.target.id != 'mo-buttons' & event.target.id != 'text-sociais' & event.target.id != 'icon-sociais'){
                moreOptions.classList.add("hidden")
            }
        } else {
            if(event.target.id === 'more-options-button'){
                moreOptions.classList.remove('hidden')
            }
        }
    }
}

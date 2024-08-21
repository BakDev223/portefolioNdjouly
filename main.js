// gestion du chargeur :

const loader = document.getElementById("loader")
window.addEventListener('load',()=>{
    loader.classList.add("hidden")
})

// La navigation à cote pour les écrans de taille moyenne

const sideBar = document.getElementById("sideBar");
const buttonIcon = document.getElementById("iconBtn");
const menuButton = document.getElementById("menuBtn");

menuButton.addEventListener("click",()=>{
    if(sideBar.classList.contains("left-[-100%]")){
        sideBar.classList.replace("left-[-100%]","left-0")
        buttonIcon.setAttribute("src","images/icons/x-lg.svg")
    }else{
        sideBar.classList.replace("left-0","left-[-100%]")
        buttonIcon.setAttribute("src","images/icons/list.svg")
    }
})

// Cacher la barre de navigation d'à coté à lien cliqué
const links = document.querySelectorAll("#sideBar a")
links.forEach(link =>{
    link.addEventListener("click",()=>{
        sideBar.classList.replace("left-0","left-[-100%]")
        buttonIcon.setAttribute("src","images/icons/list.svg")
    })
})


// animation au scroll
const ratio = 0.25
const options = {
    root: null,
    roootMargin:"0px",
    threshold: ratio,
}
const handleIntersection = function(entries,aboutObserver){
    entries.forEach(function(entry){
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add("visible")
            aboutObserver.unobserve(entry.target)
        }
    })
}

const aboutObserver = new IntersectionObserver(handleIntersection,options);
const about = document.getElementById("textApropos");
aboutObserver.observe(about)

const handleCardObserve = function(entries,cardObserver){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio>ratio){
           entry.target.classList.add('card-visible')
           cardObserver.unobserve(entry.target)
        }
    })
}
const cardObserver = new IntersectionObserver(handleCardObserve,options)
const cards = document.querySelectorAll('.card')
cards.forEach(card=>{
    cardObserver.observe(card)
})

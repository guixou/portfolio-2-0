//tout charger
async function loadElements() {

    const response = await fetch("public/data/data.json")
    const dataObject = await response.json()
    const pictures = dataObject.pictures
    return pictures
};

// afficher toute les photo
function displayElements(pictures) {

    const section = document.querySelector(".grid") 
    const template = document.querySelector("#displayElements")

    for (const picture of pictures) {
        const clone = document.importNode(template.content, true)
        
        clone.querySelector(".grid-item").setAttribute("id", "showElement")
        clone.querySelector(".grid-item").setAttribute("data-id", picture.id)
        clone.querySelector(".grid-item").setAttribute("data-desc", picture.description)
        clone.querySelector(".grid-item").setAttribute("data-img", `public/image/${picture.id}.jpg`)

        clone.querySelector(".photo").setAttribute("src", `public/image/${picture.id}.jpg`)
        clone.querySelector(".photo").setAttribute("alt", picture.description)
        section.appendChild(clone)
    }

    const elements = document.querySelectorAll("#showElement");
    
    // afficher le pop up/modal 

    elements.forEach((element) => {
        element.addEventListener("click", function(){
            const id = element.getAttribute("data-id");
            const desc = element.getAttribute("data-desc");
            const img = `public/image/${id}.jpg`
            show(id, desc, img);
        });
    });
    
};

// afficher le pop up/modal 

const modal = document.querySelector(".modal")


function show(id, desc, img){
    const modalPhoto = document.querySelector(".modalPhoto")
    const modalText = document.querySelector(".modalText")
    // console.log(id, desc, img)
 
    modal.classList.add("modalActive")
    modalPhoto.setAttribute("src", img)
    modalText.innerHTML= desc
};

// cacher la modal

modal.addEventListener('click', function(){
    modal.classList.remove("modalActive")
});

// afficher le dernier projet

const LastProject = document.querySelector(".LastProject")
LastProject.addEventListener('click', function(){
    show(3, "station de lavage et décapotable", "public/image/3.jpg")
});

// afficher le projet phare

const bestProject = document.querySelector(".bestProject")
bestProject.addEventListener('click', function(){
    show(14, "TRIPLE S", "public/image/14.jpg")
});

const random = document.querySelector(".random")
random.addEventListener('click', async function(){
    let id = getRandom(1, 23)
    let img = `public/image/${id}.jpg`

    
    const pictures = await loadElements()
    const fdp = pictures[id-1]
    const desc = fdp.description


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    show(id, desc, img)
});

// attendre le chargement final
async function init() {
    const pictures = await loadElements()
    displayElements(pictures)
} 


init()

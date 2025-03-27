let galler = document.querySelector(".container");
let gallerOverlay = document.querySelector(".gallerOverlay");
let imagebox = document.querySelector(".imagebox")

galler.addEventListener("click",(e) => {
    let cruntImagePath = e.target.src;
    if(cruntImagePath != undefined){
        gallerOverlay.classList.add("show");
        imagebox.classList.add("show");
        imagebox.firstElementChild.src = cruntImagePath;
    }
})
imagebox.lastElementChild.addEventListener("click",() => {
    gallerOverlay.classList.remove("show");
    imagebox.classList.remove("show");
})
gallerOverlay.addEventListener("click",() => {
    gallerOverlay.classList.remove("show");
    imagebox.classList.remove("show");
})
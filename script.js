const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    imageNum = 7;
    addNewImages();
});

function addNewImages(){
    for(let index=1; index<imageNum; index++){
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*200)}`;
        imageContainerEl.appendChild(newImgEl);
    }

}

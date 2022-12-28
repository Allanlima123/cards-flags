const modeBarkAndClear = document.querySelector(".mode-bark-and-clear");
const boxMoon = document.querySelector(".fa-moon");
const boxMain = document.querySelector(".box_main");
const cabecalho = document.querySelector(".cabecalho");

const changeMode = () =>{
    boxMain.classList.toggle("active");
    cabecalho.classList.toggle("active");

    const cardsFlags = [...document.querySelectorAll(".card_flag")];

    cardsFlags.map(card =>{
        let nameFlag = card.querySelectorAll(".name_flag")[0];
        let descritionFlags = card.querySelectorAll("strong");

        descritionFlags.forEach(descriFlag =>{
            descriFlag.classList.toggle("active")
        })
        
        nameFlag.classList.toggle("active")
        card.classList.toggle("active")
    })
    
    if(boxMoon.classList.contains("fa-moon")){
        boxMoon.classList.remove("fa-moon");
        boxMoon.classList.add("fa-sun");
    }else{
        boxMoon.classList.remove("fa-sun");
        boxMoon.classList.add("fa-moon");
    }
}

export { changeMode, modeBarkAndClear };
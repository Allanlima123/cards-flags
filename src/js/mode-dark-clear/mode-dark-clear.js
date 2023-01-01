const modeBarkAndClear = document.querySelector(".mode-bark-and-clear");
const boxtheme = document.querySelector(".fa-moon");
const boxMain = document.querySelector(".box_main");
const cabecalho = document.querySelector(".cabecalho");
const mode = document.querySelector(".mode")

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
    
        if(boxtheme.classList.contains("fa-moon")){
            mode.innerHTML = "Light mode"
            boxtheme.classList.remove("fa-moon");
            boxtheme.classList.add("fa-sun");
        }else{
            mode.innerHTML = "Dack mode"
            boxtheme.classList.remove("fa-sun");
            boxtheme.classList.add("fa-moon");
        }
}

export { changeMode, modeBarkAndClear };
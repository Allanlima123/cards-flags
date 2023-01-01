import { criateCardFlag } from "../js/card/card.js";
import { changeMode } from "../js/mode-dark-clear/mode-dark-clear.js"
import { modeBarkAndClear } from "../js/mode-dark-clear/mode-dark-clear.js";

const urlFlags = all => `https://restcountries.com/v3.1/${all}`;

const containerFlags = document.querySelector(".container_flags");
const namesContinentes = document.querySelector("#names_continentes");
const nameFlag = document.querySelector("#name_flag");

const all = "all";

const searchDateFlags = async flags =>{
    const dateAPI = await fetch(urlFlags(flags));
    return await dateAPI.json();
}

const addFlagsIntoDOM =  async allFlags =>{
    let searchFlags = await searchDateFlags(allFlags);

    containerFlags.innerHTML = "";

    let inputFlags = criateCardFlag(searchFlags);

    containerFlags.innerHTML += inputFlags.join("");
};

const filtercards = inputValue => card =>{
    let cardFlag = card.querySelector(".name_flag").textContent.toLocaleLowerCase();
    
    const cardContainsInputValue = cardFlag.includes(inputValue);

    if(cardContainsInputValue){
        card.style.display = 'flex';
        return
    }

    card.style.display = 'none';
}

const filterByContinent = selectedValue => card =>{
    if(selectedValue ===  "all"){
        card.style.display = 'flex';
        return
    }

    let continents = card.querySelector(".region").textContent.toLocaleLowerCase()
    
    const cardContainsInputValue = continents.includes(selectedValue);

    if(cardContainsInputValue){
        card.style.display = 'flex';
        return
    }

    card.style.display = 'none';
}

const selectOfContinents = event =>{
    event.preventDefault();

    let selectedValue = event.target.value.toLocaleLowerCase();
    let cards = document.querySelectorAll(".card_flag");
    cards.forEach(filterByContinent(selectedValue));
}

const handInputValue = event =>{
    event.preventDefault();

    let inputValue = event.target.value.toLocaleLowerCase();
    let cards = document.querySelectorAll(".card_flag")

    cards.forEach(filtercards(inputValue))
}

addFlagsIntoDOM(all);

namesContinentes.addEventListener("change", selectOfContinents);
nameFlag.addEventListener("input", handInputValue);
modeBarkAndClear.addEventListener("click", changeMode);


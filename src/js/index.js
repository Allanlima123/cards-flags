const urlFlags = all => `https://restcountries.com/v3.1/${all}`;
const urlRegion = region => `https://restcountries.com/v3.1/region/${region}`;
const urlName = name => `https://restcountries.com/v3.1/name/${name}`

const containerFlags = document.querySelector(".container_flags");
const namesContinentes = document.querySelector("#names_continentes");

const all = "all";

const searchDateFlags = async flags =>{
    const dateAPI = await fetch(urlFlags(flags));
    return await dateAPI.json();
}

const printFlagOnCanvas =  async allFlags =>{
    let dateFlags = await searchDateFlags(allFlags);

    containerFlags.innerHTML = "";

    let createFlags = dateFlags.map(flag =>{
        const { name, population, region, flags, capital } = flag;

        return `
        <div class="card_flag">
            <div class="img_flag">
                <img src="${flags.svg}" alt="${name.common}">
            </div>
    
            <div class="description_flag">
                <h3 class="name_flag">${name.common}</h3>
                <ul class="about_flag">
                    <li>
                        <strong class="populatin">Population:</strong> ${Number.parseFloat(population)
                                                                               .toLocaleString()}
                    </li>
                    <li>
                        <strong class="region">Region:</strong> ${region}
                    </li>
                    <li>
                        <strong class="capital">Capital:</strong> ${capital}
                    </li>
                </ul>
            </div>
        </div>`;
    })

    containerFlags.innerHTML += createFlags.join("")
};

const selectOfContinents = async event =>{
    let selectedValue = event.target.value;

    if(selectedValue === "all"){
        printFlagOnCanvas(selectedValue);
        return
    }

    let dataByRegion = await fetch(urlRegion(selectedValue))
    let continentsAndTheirRegions = await dataByRegion.json();

    containerFlags.innerHTML = " ";


    let createFlags = continentsAndTheirRegions.map(flag =>{
        return `
        <div class="card_flag">
            <div class="img_flag">
                <img src="${flag.flags.svg}" alt="${flag.name.common}">
            </div>
    
            <div class="description_flag">
                <h3 class="name_flag">${flag.name.common}</h3>
                <ul class="about_flag">
                    <li>
                        <strong class="populatin">Population:</strong> ${Number.parseFloat(flag.population).toLocaleString()}
                    </li>
                    <li>
                        <strong class="region">Region:</strong> ${flag.region}
                    </li>
                    <li>
                        <strong class="capital">Capital:</strong> ${flag.capital}
                    </li>
                </ul>
            </div>
        </div>`;
    })

    containerFlags.innerHTML += createFlags.join("")
}

namesContinentes.addEventListener("change", selectOfContinents);
printFlagOnCanvas(all);



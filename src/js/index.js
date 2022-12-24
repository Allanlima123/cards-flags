const urlFlags = all => `https://restcountries.com/v3.1/${all}`;

const containerFlags = document.querySelector(".container_flags")
const all = "all";

const searchDateFlags = async flags =>{
    const dateAPI = await fetch(urlFlags(flags));
    return await dateAPI.json();
}

const printFlagOnCanvas =  async allFlags =>{
    let dateFlags = await searchDateFlags(allFlags);

    let createFlags = dateFlags.map(flag =>{
        console.log(flag.capital)
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




printFlagOnCanvas(all);



const criateCardFlag = (dateCards) =>{
    let createFlags = dateCards.map(flag =>{
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
                        <strong class="populatin">Population:</strong> ${Number.parseFloat(population).toLocaleString()}
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

    return createFlags;
};


export { criateCardFlag };
const criateCardFlag = dateCards =>{
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
                        <strong>Population:</strong>
                        <span class="populatin">${Number.parseFloat(population).toLocaleString()}</span>
                    </li>
                    <li>
                        <strong>Region:</strong>
                        <span class="region">${region}</span> 
                    </li>
                    <li>
                        <strong>Capital:</strong>
                        <span class="capital">${capital}</span>
                    </li>
                </ul>
            </div>
        </div>`;
    })

    return createFlags;
};


export { criateCardFlag };
const searchBtn = document.getElementById('search-btn')
const countyInp = document.getElementById('country-inp')


searchBtn.addEventListener('click', () => {
    const countryName = countyInp.value
    const fetchURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(fetchURL)
    fetch(fetchURL).then((response) => response.json())
    .then((data) => {
        console.log(data[0])
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0])
        console.log(data[0].population)
        console.log(Object.keys(data[0].currencies)[0])
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        console.log(Object.values(data[0].languages).toString().split(',').join(','))

        result.innerHTML =` 
        <img src= "${data[0].flags.svg}" class = "flag-img">
        <h2>${data[0].name.common}</h2>

        <div class = "wrapper">
        <div class = "data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
        </div>
        </div>


        <div class = "wrapper">
        <div class = "data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
        </div>
        </div>


        <div class = "wrapper">
        <div class = "data-wrapper">
            <h4>Population:</h4>
            <span>${(data[0].population / 1000000).toFixed(2)}</span>
        </div>
        </div>


        <div class = "wrapper">
        <div class = "data-wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} 
             -${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>


        <div class = "wrapper">
        <div class = "data-wrapper">
            <h4>Languages:</h4>
            <span>${Object.values(data[0].languages).toString().split(',').join(',')}</span>
        </div>
        </div>
        `
    }).catch(() => {
        if(countryName.length === 0){
            result.innerHTML = `
            <h3> The input field cannot be empty</h3>
            `
        }else {
            result.innerHTML = `
            <h3>Please Enter a Valid Country Name</h3>
            `
        }
    })
})
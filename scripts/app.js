const cityForm = document.querySelector('form');
const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city).then(data => console.log(data))
        .catch(err => console.log(err));
});

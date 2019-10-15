
// Fonction appelée lors du click du bouton
function start(city) {

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);

  // Appel de la fonction getThreeDayForecast
  apiWeather
    /*.fetchTodayForecast()*/
    .getThreeDayForecast()
    .then(function(response) {

      // Récupère la donnée d'une API
      const data = response.data.list;
      
      for(let i=0; i<4; i++) {

        // On récupère l'information principal
        const main = data[i].weather[0].main;
        const description = data[i].weather[0].description;
        const icon = apiWeather.getHTMLElementFromIcon(data[i].weather[0].icon);
        /*alert("ok");
        const temp = data[i].main.temp;
        alert("ok+++");*/

        // Modifier le DOM
        document.getElementById('day'+i+'-forecast-main').innerHTML = main;
        document.getElementById('day'+i+'-forecast-more-info').innerHTML = description;
        document.getElementById('icon'+i+'-weather-container').innerHTML = icon;
        /*document.getElementById('day'+i+'-forecast-temp').innerHTML = `${temp}°C`;*/
      }
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
      alert("Ville introuvable !");
    });
}

//Fonction appelée lors de l'actualisation de la ville
function searchCity() {

  //Récupérer la valeur de l'input
  const ville = document.getElementById('city-input').value;

  // Vérifier que l'input n'est pas vide
  ville === "" ? alert("Veuillez indiquer une ville !") : start(ville);
}

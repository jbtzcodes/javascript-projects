const loader = document.querySelector(".loader-app");

const keyAPI = "f0c38b39f20aec689ec05e4e76f8fcad";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const long = location.coords.longitude;
      const lat = location.coords.latitude;
      meteoData(long, lat);
    },
    () => {
      loader.textContent =
        "Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer.";
    }
  );
}

async function meteoData(long, lat) {
  try {
    const results = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${keyAPI}`
    );

    if (!results.ok) {
      throw new Error(`Erreur: ${results.status}`);
    }
    const data = await results.json();

    console.log(data);

    loader.classList.add("loader-end");
  } catch (e) {
    loader.textContent = e;
  }
}

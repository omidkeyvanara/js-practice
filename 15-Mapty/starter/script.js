'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (new Date() + ' ').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // in KM
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
  }
}
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener(`submit`, this._newWorkout.bind(this)); //*1*
    inputType.addEventListener(`change`, this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`we can't acces your location`);
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // HANDLING CLICKS ON MAP
    this.#map.on(`click`, this._showForm.bind(this)); //*2*
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove(`hidden`);
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
  }

  _newWorkout(e) {
    e.preventDefault();

    // CLEAR INPUT FIELDS
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        ``;

    // DISPLAY MARKER
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxwidth: 250,
          minwidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `running-popup`,
        })
      )
      .setPopupContent(`workout`)
      .openPopup();
  }
}
const app = new App();

// *2
//  In the Leaflet library, map.on() is a method that allows you to attach an event listener to a specific map instance.نمیتوان به یک نقشه ایونت لیسنر اضافه کرد، از

// 1* در ایونت لیسنر کلمه دیس به المانی که رخداد به آن اضافه شده الصاق میشود، یعنی به دام موردنظر ما، ولی در اینجا ما نیاز داریم که دیس به آبجکت اصلی ما ارجاع دهد پس به کمک متد بایند ارجاع را اصلاح میکنیم.

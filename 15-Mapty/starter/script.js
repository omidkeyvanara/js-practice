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
  id = (Date.now() + ' ').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat , lng]
    this.distance = distance; // in KM
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  type = `running`;
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = `cycling`;
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }

  calcSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

// ************* APP ARCHITECTURE *************
class App {
  #map;
  #mapEvent;
  #workout = [];
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
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    // get data from form
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // check if data is valid

    // if workout running, create running object
    if (type === `running`) {
      const cadence = +inputCadence.value;
      if (
        !validInputs(cadence, distance, duration) ||
        !allPositive(cadence, distance, duration)
      )
        return alert(`input have to be positive number`);
        workout = new Running([lat, lng], cadence, distance, duration);
    }


    // if workout cycling, create cycling object
    if (type === `cycling`) {
      const elevation = +inputElevation.value;
      if (
        !validInputs(elevation, distance, duration) ||
        !allPositive(distance, duration)
      )
        return alert(`input have to be positive number`);

      workout = new Cycling([lat, lng], distance, duration,elevation);
    }

    // add new object to the workout array
    this.#workout.push(workout);

    // render workout on map as marker
    this.renderWorkoutMarker(workout);

    // render workout on list

    // hide form + clear input fields
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        ``;
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxwidth: 250,
          minwidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`workout`)
      .openPopup();
  }

  _renderWorkoutMarker(workout){
    const html = `<li class="workout workout--${workout.name}" data-id="${workout.id}">
    <h2 class="workout__title">Running on April 14</h2>
    <div class="workout__details">
      <span class="workout__icon">${workout.name=== `running`?`🏃‍♂️`:`🚴‍♀️`}</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`
  } 
}
const app = new App();

// 1* در ایونت لیسنر کلمه دیس به المانی که رخداد به آن اضافه شده الصاق میشود، یعنی به دام موردنظر ما، ولی در اینجا ما نیاز داریم که دیس به آبجکت اصلی ما ارجاع دهد پس به کمک متد بایند ارجاع را اصلاح میکنیم.

// *2
//  In the Leaflet library, map.on() is a method that allows you to attach an event listener to a specific map instance.نمیتوان به یک نقشه ایونت لیسنر اضافه کرد، از

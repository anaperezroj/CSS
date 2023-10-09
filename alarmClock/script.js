

// Obtén la referencia al elemento de reloj
const clock = document.getElementById('time');

const alarmSound = document.getElementById('alarmSound');
let alarmTimeout;

// Función para actualizar el reloj digital
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Función para configurar la alarma
function setAlarm() {
    console.log("setAlarm ejecutada");
    const alarmTimeInput = document.getElementById('alarmTime').value;
    const [alarmHours, alarmMinutes] = alarmTimeInput.split(':');
    const now = new Date();
    const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes);

    const edDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(checkbox => checkbox.value);
    const selectedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(checkbox => checkbox.value);
    if (selectedDays.length === 0) {
      alert('Por favor, seleccione al menos un día de la semana.');
      return;
    }

  
    let alarmDay; // Declara alarmDay fuera de la función setAlarm
const cancelAlarmButton = document.getElementById('cancelButton');

cancelAlarmButton.addEventListener('click', function() {
  clearTimeout(alarmTimeout); // Cancela la alarma al presionar el botón "Cancelar"
  alarmSound.pause(); // Pausa el sonido de la alarma
  alarmSound.currentTime = 0; // Reinicia el sonido de la alarma al principio
});
    console.log('selectedDays:', selectedDays);
    const timeUntilAlarm = alarmTime - now;
    if (timeUntilAlarm < 0) {
      alert('Por favor, elija una hora en el futuro.');
    } else {
      alarmTimeout = setTimeout(() => {
        alarmSound.play();
        alert('¡Alarma!');
      }, timeUntilAlarm);
    }
  }

function getDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  return daysOfWeek[now.getDay()];
}

const setAlarmButton = document.getElementById('setAlarmButton');
setAlarmButton.addEventListener('click', setAlarm);

// Obtiene todos los elementos <label> dentro de los elementos con la clase .week
const labels = document.querySelectorAll('.week label');

// Agrega un controlador de clic para cada etiqueta
labels.forEach((label) => {
  label.addEventListener('click', () => {
    const checkbox = label.nextElementSibling; // Obtiene el checkbox asociado
    checkbox.checked = !checkbox.checked; // Invierte el estado del checkbox
  });
});
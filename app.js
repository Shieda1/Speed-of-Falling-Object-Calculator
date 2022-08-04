// https://calculator.swiftutors.com/speed-of-falling-object-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const speedofFallingObjectRadio = document.getElementById('speedofFallingObjectRadio');
const timeTakenRadio = document.getElementById('timeTakenRadio');
const gravityRadio = document.getElementById('gravityRadio');

let speedofFallingObject;
let timeTaken = v1;
let gravity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

speedofFallingObjectRadio.addEventListener('click', function() {
  variable1.textContent = '(t) Time Taken (sec)';
  variable2.textContent = '(g) Gravity (m/s²)';
  timeTaken = v1;
  gravity = v2;
  result.textContent = '';
});

timeTakenRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed of Falling Object (m/s)';
  variable2.textContent = '(g) Gravity (m/s²)';
  speedofFallingObject = v1;
  gravity = v2;
  result.textContent = '';
}); 

gravityRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed of Falling Object (m/s)';
  variable2.textContent = '(t) Time Taken (sec)';
  speedofFallingObject = v1;
  timeTaken = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(speedofFallingObjectRadio.checked)
    result.textContent = `Speed of Falling Object = ${computeSpeedofFallingObject().toFixed(2)} m/s`;

  else if(timeTakenRadio.checked)
    result.textContent = `Time Taken = ${computeTimeTaken().toFixed(2)} sec`;

  else if(gravityRadio.checked)
    result.textContent = `Gravity = ${computeGravity().toFixed(2)} m/s²`;
})

// calculation

function computeSpeedofFallingObject() {
  return Number(gravity.value) * Number(timeTaken.value);
}

function computeTimeTaken() {
  return Number(speedofFallingObject.value) / Number(gravity.value);
}

function computeGravity() {
  return Number(speedofFallingObject.value) / Number(timeTaken.value);
}
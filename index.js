const plans = document.querySelectorAll('.license-plan');
const radios = document.querySelectorAll('.radio');
const total = document.querySelector('.price');
const number = document.querySelector('.number');
const selectedPlan = document.querySelector('.plan');

let selected = 0;
let prices = [13, 22, 34];
let selectedNumber = 1;

plans.forEach((p, i) => {
  p.addEventListener('click', () => {
    plans[selected].classList.remove('selected');
    p.classList.add('selected');
    radios[selected].checked = false;
    radios[i].checked = true;
    selected = i;
    update(selectedNumber, prices[selected]);
    selectedPlan.innerHTML = '';
    selectedPlan.innerHTML = `#${i + 1}`;
  });
});

number.addEventListener('change', () => {
  selectedNumber = number.options.selectedIndex + 1;
  update(selectedNumber, prices[selected]);
});

const update = (num, price) => {
  total.innerHTML = '';
  total.innerHTML = `$${num * price}<sup>us</sup>`;
}
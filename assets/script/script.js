const btnDropdown = document.getElementsByClassName('btn-dropdown')[0];
const dropdownBox = document.getElementsByClassName('dropdown-list')[0];

const dropdownListItem = dropdownBox.querySelectorAll('.list-radio-btn');

btnDropdown.addEventListener('click', () => dropdownBox.classList.toggle('dropdown-on'));

dropdownListItem.forEach(e => e.addEventListener('click', () => {
  const radioInput = e.querySelector('input[type="radio"]');
  radioInput.checked = true;
  dropdownBox.classList.toggle('dropdown-on');
})
);

// Task Assignment 6 - 11

document.getElementById('form-input').addEventListener('submit', event => {
  event.preventDefault();
  submit();
});

function handleGetFormData() {

  nameInput = document.getElementById('name');
  emailInput = document.getElementById('email');
  cityInput = document.getElementById('city');
  zipCodeInput = document.getElementById('zip-code');
  statusCheckbox = document.getElementById('status');

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value,
    zipCode: zipCodeInput.value,
    status: statusCheckbox.checked
  }

  return data;
}

function isNumber(checkNum) {
  if (isNaN(checkNum)) return 0;
  return checkNum;
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  if (data.name !== '' && data.city !== '' && data.email !== '' && isNumber(data.zipCode) && checkboxIsChecked(data.status)) {
    return true;
  }
  return false;
}

function submit() {
  const warn = document.getElementById('warning');
  const getData = handleGetFormData();
  if (validateFormData(getData)) {
    warn.textContent = '';
  } else {
    warn.textContent = 'Periksa form anda sekali lagi';
  }

}


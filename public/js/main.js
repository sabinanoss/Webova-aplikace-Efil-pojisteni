const inputUserFirstName = document.querySelector('#userFirstName');
const inputUserLastName = document.querySelector('#userLastName');
const inputUserEmail = document.querySelector('#userEmail');
const inputUserPhone = document.querySelector('#userPhone');
const inputUserAdress = document.querySelector('#userAdress');
const inputUserCity = document.querySelector('#userCity');
const inputUserPostCode = document.querySelector('#userPostCode');

const validateInputListeners = (input, errMsg) => {
  input.addEventListener('blur', (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue.length > 2) {
      e.target.classList.remove('border-error');
      e.target.parentElement.children[2].remove();
    } else {
      e.target.classList.add('border-error');
      if (!e.target.parentElement.children[2]) {
        e.target.insertAdjacentHTML(
          'afterend',
          `<p class="error-message">${errMsg}</p>`
        );
      }
    }
  });
};

validateInputListeners(
  inputUserFirstName,
  'Jméno musí obsahovat nejméně 3 písmena'
);
validateInputListeners(
  inputUserLastName,
  'Příjmení musí obsahovat nejméně 3 písmena'
);

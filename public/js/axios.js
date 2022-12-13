//^ POLICYHOLDER DELETE FROM ALL POLICYHOLDERS
const userDeleteBtn = document.querySelectorAll('.btn-delete');

const deleteEventHandler = (el) => {
  el.addEventListener('click', async function (e) {
    let isExecuted = confirm('Opravdu chcete smazat toho pojištěnce?');
    if (isExecuted) {
      const userId = e.target.attributes[2].nodeValue;
      try {
        const res = await axios({
          method: 'DELETE',
          url: `${window.location.origin}${window.location.pathname}/${userId}`,
        }).then(
          setTimeout(() => {
            location.reload();
          }, 1000)
        );
      } catch (err) {}
    }
  });
};

if (userDeleteBtn) {
  for (let i = 0; i < userDeleteBtn.length; i++) {
    deleteEventHandler(userDeleteBtn[i]);
  }
}

//^ UPDATE/EDIT POLICYHOLDER FROM POLICYHOLDER DETAIL AND ALL POLICYHOLDERS
if (window.location.pathname.indexOf('/sprava-pojistencu/edit/') === 0) {
  const submitButton = document.querySelector('#submitButton');
  submitButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const userFirstName = document.querySelector('#userFirstName').value;
    const userLastName = document.querySelector('#userLastName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userPhone = document.querySelector('#userPhone').value;
    const userAdress = document.querySelector('#userAdress').value;
    const userCity = document.querySelector('#userCity').value;
    const userPostCode = document.querySelector('#userPostCode').value;

    try {
      const userId = e.target.attributes[3].nodeValue;
      console.log(e.target.attributes[3].nodeValue);
      const res = await axios({
        method: 'PATCH',
        url: `${window.location.pathname.replace('/edit', '')}`,
        data: {
          firstName: userFirstName,
          lastName: userLastName,
          email: userEmail,
          phoneNumber: userPhone,
          adress: userAdress,
          city: userCity,
          postCode: userPostCode,
        },
      }).then(
        setTimeout(() => {
          window.location = `${window.location.pathname.replace('/edit', '')}`;
        }, 1000)
      );
    } catch (err) {
      console.log(err.response);
    }
  });
}

//^ DELETE POLICYHOLDER FROM POLICYHOLDER DETAIL
if (window.location.pathname.indexOf('/sprava-pojistencu/') === 0) {
  const del = document.querySelector('#deleteUser');
  del.addEventListener('click', async function (e) {
    e.preventDefault();
    let isExecuted = confirm('Opravdu chcete smazat toho pojištěnce?');
    if (isExecuted) {
      const userId = e.target.attributes[3].nodeValue;
      try {
        const res = await axios({
          method: 'DELETE',
          url: `${window.location.href}`,
        }).then((window.location = 'http://127.0.0.1:3000/sprava-pojistencu'));
      } catch (err) {
        console.log(err.response);
      }
    }
  });
}

//* INSURANCE DELETE FROM ALL INSURANCES
const insuranceDeleteBtn = document.querySelectorAll('.btn-delete-insurance');

const deleteInsuranceEventHandler = (el) => {
  el.addEventListener('click', async function (e) {
    let isExecuted = confirm('Opravdu chcete smazat toto pojištění?');
    if (isExecuted) {
      const insuranceId = e.target.attributes[2].nodeValue;
      console.log(
        `${window.location.origin}${window.location.pathname}/${insuranceId} `
      );
      try {
        const res = await axios({
          method: 'DELETE',
          url: `${window.location.origin}${window.location.pathname}/${insuranceId}`,
        }).then(
          setTimeout(() => {
            location.reload();
          }, 1000)
        );
      } catch (err) {
        console.log(err.response);
      }
    }
  });
};

if (insuranceDeleteBtn) {
  for (let i = 0; i < insuranceDeleteBtn.length; i++) {
    deleteInsuranceEventHandler(insuranceDeleteBtn[i]);
  }
}

//* UPDATE/EDIT INSURANCE FROM INSURANCE DETAIL AND ALL INSURANCES
if (window.location.pathname.indexOf('/sprava-pojisteni/edit/') === 0) {
  const submitButtonIns = document.querySelector('#submitButtonIns');
  submitButtonIns.addEventListener('click', async function (e) {
    e.preventDefault();
    const insuranceName = document.querySelector('#insuranceName').value;
    const insuranceType = document.querySelector('#insuranceType').value;

    try {
      const insuranceId = e.target.attributes[3].nodeValue;
      console.log(e.target.attributes[3].nodeValue);
      const res = await axios({
        method: 'PATCH',
        url: `${window.location.pathname.replace('/edit', '')}`,
        data: {
          insuranceName: insuranceName,
          insuranceType: insuranceType,
        },
      }).then(
        (window.location = `${window.location.pathname.replace('/edit', '')}`)
      );
    } catch (err) {
      console.log(err.response);
    }
  });
}

//* DELETE INSURANCE FROM INSURANCE DETAIL
if (window.location.pathname.indexOf('/sprava-pojisteni/') === 0) {
  const del = document.querySelector('#deleteInsurance');
  del.addEventListener('click', async function (e) {
    e.preventDefault();
    let isExecuted = confirm('Opravdu chcete smazat toto pojištění?');
    if (isExecuted) {
      const insuranceId = e.target.attributes[3].nodeValue;
      try {
        const res = await axios({
          method: 'DELETE',
          url: `${window.location.href}`,
        }).then((window.location = 'http://127.0.0.1:3000/sprava-pojisteni'));
      } catch (err) {
        console.log(err.response);
      }
    }
  });
}

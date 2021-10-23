const formEl = document.querySelector(".login-form")
const emailEl = document.querySelector('[type="email"]')
const passwordEl = document.querySelector('[type="password"]')
const submitEl = document.querySelector('[type="submit"]')


const handleClick = event => {
    event.preventDefault();
    
        if (emailEl.value === "" || passwordEl.value === "") {
    return alert('Заполните все поля');
  }

        const dataUser = {};
      const formData = new FormData(event.currentTarget);

      formData.forEach((value, name) => {
        dataUser[name] = value;
      });

      console.log(dataUser);
        formEl.reset()
}

formEl.addEventListener('submit', handleClick)

// ---------------------------------------------------------
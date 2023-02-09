function signup() {
    event.preventDefault();
    // console.log('working');

    let username = document.querySelector('input[name="username"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="psw"]').value;
    let repeatPassword = document.querySelector('input[name=psw-repeat]').value;

    if (username === ''|| email ===''|| password === ''|| repeatPassword ==='') {
        alert('All field are required');
        return;
    }

    let userValid = /^[^@]+$/.test(username);
    if (!userValid) {
      alert('Username should not contain email-like characters (@, ., _, etc.');
      return;
    }

    let emailValid = /^\w+([.-_]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
    if (!emailValid) {
        alert('Please enter a valid email');
        return;
    }

    if (password != repeatPassword){
        alert('Password do not match');
        return;
    }

    if(!document.querySelector('input[name="remember"]').checked){
        alert('You must be over 18 to sign up');
        return;
    }

    alert('Sign up successful!')
    window.location.href="login.html";

    var user = {
      id: Date.now(),
      username: username,
      email: email,
      password: password,

    }

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);

  }
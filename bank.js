document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-password');
    const password = passField.value;
    if (email == "abc@gmail.com" && password == "123456") {
        window.location.href = 'index.html'
    }
    else {
        alert('Please Enter Valid Email and Password');
    }
     module.exports = {
    variants: {
      extend: {
        // ...
       backgroundImage: ['hover', 'focus'],
      }
    }
  }
});



//  login , signup
  let isLogin = true;

  function toggleForm() {
    const title = document.getElementById("form-title");
    const button = document.querySelector("button");
    const toggleText = document.getElementById("toggle-text");

    isLogin = !isLogin;

    if (isLogin) {
      title.innerText = "Login";
      button.innerText = "Login";
      toggleText.innerHTML = `Don't have an account? <span onclick="toggleForm()" class="toggle-link">Sign Up</span>`;
    } else {
      title.innerText = "Sign Up";
      button.innerText = "Sign Up";
      toggleText.innerHTML = `Already have an account? <span onclick="toggleForm()" class="toggle-link">Login</span>`;
    }
  }

  function handleSubmit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isLogin) {
      alert(`Login attempted for ${email}`);
      //  Here you'd send a login request to Django
    } else {
      alert(`Signup attempted for ${email}`);
      //  Here you'd send signup data to Django backend
    }
  }

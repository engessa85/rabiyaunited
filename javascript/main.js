console.log("hi all");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#next");

const handelSignIn = (e) => {
  e.preventDefault();
  let usernamevalue = ""
  let passwordvalue = ""

  if (username.value !== "") {
    usernamevalue = username.value;
  } else {
    alert("enter the username");
  }
  if (password.value !== "") {
    passwordvalue = password.value;
  } else {
    alert("enter the password");
  }

  if(usernamevalue !== "" && passwordvalue !== ""){
    if(usernamevalue === "admin" && passwordvalue === "admin"){
        console.log("logged in");
        window.location.href = "user.html";
    }else {
        alert('wrong credentials');
    }
  }
};
button.addEventListener("click", handelSignIn);

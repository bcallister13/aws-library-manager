alert("signup.js loaded");

async function signup() {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
        "https://2izc7xmzasil55qedq2s6dm4va0vflvl.lambda-url.us-east-2.on.aws/",
        {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               username: username,
               email: email,
               password: password
           })
         }
     );

     const result = await response.json();

     document.getElementById("message").innerText =
         "Account created!";

setTimeout(() => {
    window.location.href = "login.html";
}, 2000);
}

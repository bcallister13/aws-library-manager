async function login() {

alert("NEW VERSION OF LOGIN.JS");

const username =
    document.getElementById("username").value;

const password =
    document.getElementById("password").value;

const response = await fetch(
    "https://ccgsyzvpvcujw4deyxy7kkqlie0fgpua.lambda-url.us-east-2.on.aws/",
    {
        method: "POST",
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
     }
 );

const result = await response.json();
alert(JSON.stringify(result));

alert("Message = [" + result.message + "]");
document.getElementById("message").innerText =
result.message;

if (true) {
    alert("Inside success block");

    localStorage.setItem(
        "loggedInUser",
        username
    );

    localStorage.setItem(
        "role",
        result.role
    );

    alert("About to redirect");

    window.location.href = "library.html";
}
}

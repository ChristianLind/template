document.querySelector("#login").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Hi", event);

    let pw = document.querySelector("#password");
    let verify = document.querySelector("#verify");

    if (pw.value != verify.value) {
        alert("Passwords doesn't match");
    } else {
        alert("User has been created");
    }
});

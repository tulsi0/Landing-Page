// Form Validation
document.querySelector(".contact .btn").addEventListener("click", function() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
    } else {
        alert("Form submitted successfully!");
    }
});

// Chat Box
function sendMessage() {
    let input = document.getElementById("chatInput");
    let message = input.value;

    if (message !== "") {
        let chatBody = document.getElementById("chatBody");
        chatBody.innerHTML += "<p>" + message + "</p>";
        input.value = "";
    }
}

// Dark Mode
function toggleMode() {
    document.body.classList.toggle("dark");
}
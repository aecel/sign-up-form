const pw = document.getElementById("password");
const confirmpw = document.getElementById("confirmPassword");
const submitButton = document.querySelector('.create-account');

const checkIfEqual = () => {
    if (pw.value == confirmpw.value) {
        pw.style.borderColor = "white";
        pw.style.borderStyle = "solid";
        confirmpw.style.borderColor = "white";
        confirmpw.style.borderStyle = "solid";
        submitButton.disabled = false;
    } else {
        pw.style.borderColor = "red";
        pw.style.borderStyle = "dashed";
        confirmpw.style.borderColor = "red";
        confirmpw.style.borderStyle = "dashed";
        submitButton.disabled = true;
    }

    console.log(`${pw.value}, ${confirmpw.value}`);
};

pw.addEventListener("input", checkIfEqual);
confirmpw.addEventListener("input", checkIfEqual);

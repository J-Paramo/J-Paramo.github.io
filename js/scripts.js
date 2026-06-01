
function copyEmail(btn) {
    const email = document.getElementById("emailText").textContent;
    const msg = document.getElementById("copyMsg");

    navigator.clipboard.writeText(email).then(() => {
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 1500);
    });
}
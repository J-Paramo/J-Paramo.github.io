
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

const code = 
`class Ingeniera:
    def __init__(self):
        self.nombre = "Jennifer Páramo"

print(Ingeniera().nombre)`;

const typingElement = document.getElementById("typingCode");

let i = 0;

function typeWriter() {
    if (i < code.length) {
        typingElement.textContent += code.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    } else {
        setTimeout(showPortfolio, 400);
    }
}

function showPortfolio(){
    const intro = document.getElementById("intro");
    const portfolio = document.getElementById("portfolio");
    intro.style.opacity = "0";
    intro.style.transition = "0.5s ease";
    setTimeout(() => {
        intro.style.display = "none";
        portfolio.style.display = "block";
        portfolio.classList.add("show-content");
    }, 400);
}

typeWriter();
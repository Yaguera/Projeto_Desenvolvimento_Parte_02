const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
    
    const password = this.value;
    console.log(password)
   const strengthIndicator = document.querySelector("#password-strength-indicator");

    const strengthText = document.querySelector("#password-strength-text");

    const strengths = {
        0: "Muito Fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte"
    };
    console.log(strengths)

    let score = 0;

    // Requisitos
    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-z]/)) score++;


    // Calculo da %
    const width = (score / 4) * 100;

    strengthIndicator.style.width =  `${width}%`;

    if(password.length > 0) {
        strengthText.innerHTML = `Força: ${strengths[score]}`;
    } else {
        strengthText.innerHTML = ""
    }

});
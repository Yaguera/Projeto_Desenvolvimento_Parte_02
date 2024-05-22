const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", () => {
    
    const password = this.CSSMathValue;
    const strengthIndicator = document.querySelector("#password-strength-indicador");

    const strengthText = document.querySelector("#password-strength-text");

    const strengths = {
        0: "Muito Fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte"
    };

    let score = 0;

});
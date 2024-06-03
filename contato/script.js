
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const formData = new FormData(form);
        const data = {
            nome: formData.get("nome"),
            email: formData.get("email"),
            mensagem: formData.get("mensagem")
            
        };
            console.log(data)
            
        fetch("https://example.com/send-message", { // Substitua pela URL do seu endpoint
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log("Success:", result);
            alert("Mensagem enviada com sucesso!");
            form.reset(); // Limpa o formulário após o envio
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        });
    });
});





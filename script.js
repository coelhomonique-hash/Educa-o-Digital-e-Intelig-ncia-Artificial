// Aguarda o DOM carregar completamente para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       Funcionalidade 1: Modo Escuro (Acessibilidade e Usabilidade)
       ========================================================================== */
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    
    toggleDarkModeButton.addEventListener("click", () => {
        // Verifica o tema atual no atributo customizado do HTML
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            toggleDarkModeButton.textContent = "🌓 Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            toggleDarkModeButton.textContent = "☀️ Modo Claro";
        }
    });

    /* ==========================================================================
       Funcionalidade 2: Validador do Quiz Anti-Desinformação
       ========================================================================== */
    const btnSubmitQuiz = document.getElementById("btn-submit-quiz");
    const feedbackDiv = document.getElementById("quiz-feedback");

    btnSubmitQuiz.addEventListener("click", () => {
        // Captura a opção selecionada pelo usuário
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');
        
        // Verifica se o usuário não selecionou nenhuma resposta
        if (!selectedOption) {
            feedbackDiv.textContent = "⚠️ Por favor, selecione uma opção antes de enviar.";
            feedbackDiv.className = "feedback-error";
            return;
        }

        // Armazena o valor da resposta em uma variável para processamento
        const userAnswer = selectedOption.value;

        // Exibe o feedback dinâmico com base na resposta processada
        if (userAnswer === "correto") {
            feedbackDiv.textContent = "🎉 Excelente! Checar fontes antes de compartilhar quebra o ciclo da desinformação automatizada.";
            feedbackDiv.className = "feedback-success";
        } else {
            feedbackDiv.textContent = "❌ Atenção! Compartilhar sem checar espalha boatos e deepfakes perigosas. Sempre verifique os fatos.";
            feedbackDiv.className = "feedback-error";
        }
    });
});

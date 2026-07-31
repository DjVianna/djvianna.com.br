document.addEventListener("DOMContentLoaded", () => {
    // 1. Header Scrolled State (Glassmorphism)
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Scroll Reveal Animations (Intersection Observer)
    const reveals = document.querySelectorAll(".reveal");
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Anima apenas uma vez
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 3. Form to WhatsApp Submission
    const form = document.getElementById("booking-form");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Pega os valores
            const nome = document.getElementById("nome").value;
            const data = document.getElementById("data").value;
            const tipo = document.getElementById("tipo").value;
            
            // Formata a mensagem
            const mensagem = `Olá, DJ Vianna! Meu nome é ${nome}.%0A%0AGostaria de verificar sua disponibilidade e orçamento para um evento.%0A%0A*Detalhes:*%0A- Tipo: ${tipo}%0A- Data: ${data}%0A%0AAguardo seu retorno!`;
            
            // Número fictício do DJ (substitua pelo real)
            const numeroWhatsApp = "5511999999999"; 
            
            // Monta a URL
            const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
            
            // Abre o link
            window.open(url, "_blank");
        });
    }
});

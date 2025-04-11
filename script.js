document.addEventListener('DOMContentLoaded', function() {
  
    const herName = "Luana"; 
    const yourName = "Luiz";
    
    document.getElementById('name').textContent = herName;
    document.getElementById('your-name').textContent = yourName;
    

    const messages = [
        `Seu sorriso é a coisa mais linda que eu já vi ${herName}.`,
        `${herName} você é um dos meus motivos pra viver.`,
        `${herName} eu nunca vou esquecer do nosso primeiro beijo.`,
        `Não existe nada nesse mundo que me faça mais feliz do que te ver feliz comigo ${herName}.`,
        `Sempre vou amar o jeito que você me olha quando a gente se beija.`,
        `O seu cheiro é tão viciante, quanto mais eu cheiro, mais difícil é dizer adeus.`,
        `Você é como um buraco negro, mas ao invés de só puxar a luz, você devolve ela em dobro.`,
        `Prometo que vou te amar hoje, amanhã e para todo o sempre.`,
        `Você é o meu refúgio, as minhas esperanças, a minha verdade, você é minha  ${herName}.`,
        `Obrigado por ser  quem você é ${herName}.`
    ];
    
    const reasons = [
        "Por causa do seu cabelo cacheado lindo e brilhante.",
        "Por causa do seu sorriso cativante e charmoso.",
        "Por causa dos seus abraços quentinhos e aconchegantes.",
        "Por causa da sua bondade com todos a sua volta.",
        "Por causa que você me faz querer melhorar.",
        "Por causa da sua beleza que me deixa sem ar.",
        "Por causa dos seus conselhos que sempre vão me inspirar.",
        "Por causa da sua inteligência que me surpreende sempre lu.",
        "Por causa do cuidado que você tem comigo.",
        "E principalmente lu por você ser você mesma, uma menina autêntica."
    ];
    
    const photos = [
        "foto1.jpeg",
        "foto2.jpeg",
        "foto3.jpeg",
        "foto4.jpeg"
    ];
    
    const reasonsList = document.getElementById('reasons-list');
    reasons.forEach(reason => {
        const li = document.createElement('li');
        li.textContent = reason;
        reasonsList.appendChild(li);
    });
    
  
    const photosContainer = document.getElementById('photos');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Foto com ${herName}`;
        photosContainer.appendChild(img);
    });
    
    const heart = document.getElementById('heart');
    const messageElement = document.getElementById('message');
    
    heart.addEventListener('click', function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;
        
        
        heart.style.transform = 'scale(1.5)';
        setTimeout(() => {
            heart.style.transform = 'scale(1)';
        }, 300);
    });
    
    
    const startDate = new Date('2023-10-04'); 
    
    function updateCountdown() {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    function typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = '';
        
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        
        typing();
    }
    
    setTimeout(() => {
        typeWriter(document.querySelector('.subtitle'), 'O amor da minha vida', 100);
    }, 1000);
});
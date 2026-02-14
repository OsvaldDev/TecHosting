const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si el elemento es visible en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    // Seleccionamos todos los elementos con la clase .reveal
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
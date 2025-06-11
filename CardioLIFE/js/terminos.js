// Funcionalidad del modal
        document.addEventListener('DOMContentLoaded', function() {
            const openModalBtn = document.getElementById('openModalBtn');
            const modal = document.getElementById('termsModal');
            const closeModal = document.getElementById('closeModal');
            const acceptBtn = document.getElementById('acceptBtn');
            const declineBtn = document.getElementById('declineBtn');

            // Abrir modal
            openModalBtn.addEventListener('click', function() {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevenir scroll del body
            });

            // Cerrar modal
            function closeModalFunction() {
                modal.classList.remove('show');
                document.body.style.overflow = ''; // Restaurar scroll del body
            }

            closeModal.addEventListener('click', closeModalFunction);

            // Cerrar modal al hacer clic fuera del contenedor
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModalFunction();
                }
            });

            // Cerrar modal con tecla Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.classList.contains('show')) {
                    closeModalFunction();
                }
            });

            // Botón aceptar
            acceptBtn.addEventListener('click', function() {
                alert('¡Gracias por aceptar nuestros términos y condiciones!\n\nBienvenido a CardioLIFE 💜');
                closeModalFunction();
                // Aquí puedes agregar la lógica para guardar la aceptación
                // Por ejemplo: localStorage.setItem('termsAccepted', 'true');
            });

            // Botón rechazar
            declineBtn.addEventListener('click', function() {
                if (confirm('¿Está seguro de que desea rechazar los términos y condiciones?\n\nNo podrá utilizar CardioLIFE sin aceptarlos.')) {
                    alert('Términos rechazados. Será redirigido a la página principal.');
                    closeModalFunction();
                    // Aquí puedes redirigir al usuario o realizar otra acción
                    // window.location.href = 'https://www.google.com';
                }
            });

            // Animación suave para las secciones al cargar el modal
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            });

            const sections = document.querySelectorAll('.terms-section');
            sections.forEach(section => {
                observer.observe(section);
            });
        });

        // Prevenir cierre accidental del modal durante la lectura
        let isReading = false;
        const modalBody = document.querySelector('.modal-body');

        modalBody.addEventListener('scroll', function() {
            isReading = true;
            setTimeout(() => {
                isReading = false;
            }, 2000);
        });

        // Función para integrar en tu sitio web existente
        function initializeTermsModal() {
            // Esta función se puede llamar desde tu archivo scripts.js principal
            console.log('Modal de términos y condiciones inicializado');
        }

        // Auto-inicializar si se incluye en una página
        if (typeof window !== 'undefined') {
            initializeTermsModal();
        }
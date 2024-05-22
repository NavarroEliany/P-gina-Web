
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function openLightbox(imageSrc, caption) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');

    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function showForm() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block"; // Mostrar el formulario
}

function submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("Formulario enviado!"); // Ejemplo de alerta
}


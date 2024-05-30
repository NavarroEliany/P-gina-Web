
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}
function openLightbox(imageSrc, caption) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox-caption").innerText = caption;
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("formulario").style.display = "none";
    clearForm(); 
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


function openLightbox(imageSrc, caption) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');

    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
}

function showForm() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block";o
}

function submitForm() {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var direccion = document.getElementById("direccion");

    if (nombre.value === "") {
        nombre.style.border = "3px solid red";
    } else {
        nombre.style.border = "3px solid #ccc";
    }

    if (email.value === "") {
        email.style.border = "3px solid red";
    } else {
        email.style.border = "3px solid #ccc";
    }

    if (direccion.value === "") {
        direccion.style.border = "3px solid red";
    } else {
        direccion.style.border = "3px solid #ccc";
    }

    if (nombre.value === "" || email.value === "" || direccion.value === "") {
        return; 
    }

    alert
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Compra Exitosa",
            showConfirmButton: false,
            timer: 2000
          }); 
    closeLightbox(); 
        document.getElementById("formulario").style.display = "none";

        clearForm();
}
function clearForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("cantidad").value = "1";
    document.getElementById("metodo-pago").selectedIndex = 0; 
}

    

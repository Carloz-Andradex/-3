document.getElementById("viewButton").addEventListener('click', function() {
    document.getElementById("result").style.display = "block";
});

document.getElementById("closeButton").addEventListener('click', function() {
    document.getElementById("result").style.display = "none";
    document.querySelector(".start-container").style.display = "none";
    document.querySelector(".options-container").style.display = "block";
});

const yesBtn = document.querySelector('#yesBtn');

// ESCRIBIR LO QUE PASARA EN CASO DE QUE SÍ
yesBtn.addEventListener('click', function() {
    alert('Siempre supe que aceptarías'); // Puedes mandar los mensajes que quieras
    location.href = 'https://www.youtube.com/watch?v=zLX_GcXt2pI'; // Cambiar el URL en YouTube de la canción que quieras 
});

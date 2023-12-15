import { APIIas_URI, TOKEN_APIIas } from "/static/js/constantes.js";

const btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', async () => {
   const fLogin = document.querySelector('#fLogin');
   let dataForm = new FormData(fLogin);   
   dataForm.append('contactDate', new Date().toString());

   let comm_request = new XMLHttpRequest();

   comm_request.open("POST", APIIas_URI, true);

   comm_request.onreadystatechange = function () {
      if (comm_request.readyState === 4) {
         if (comm_request.status === 201) {
            document.getElementById("contactName").value = '';
            document.getElementById("contactComment").value = '';

            alert("Gracias por su contribución");
            window.location.href = 'https://msustersic.github.io/TP1';
         } else {
            console.error("Error al enviar " + comm_request.status);
         }
      }
   };

   // Configurar el encabezado Content-Type correctamente
   // Debes asegurarte de que estás enviando datos como application/x-www-form-urlencoded
   // o multipart/form-data según sea necesario
   // En este caso, como estás utilizando FormData, usaremos el tipo multipart/form-data
   comm_request.setRequestHeader('Authorization', `Bearer ${TOKEN_APIIas}`);
   comm_request.setRequestHeader('Content-Type', 'multipart/form-data');
   comm_request.send(dataForm);
});

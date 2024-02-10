let boton= document.getElementById("boton");
boton.addEventListener("click", () => {
    Swal.fire({
        title: "Excelente",
        text: "Tus datos se han enviado correctamente!",
        text: "Acercate a tu cede GrizzleyBearGym mas cercana para hacer el pago",
        icon: "success"
      });

})
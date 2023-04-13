document.addEventListener("DOMContentLoaded", () => {
  // let success = Toastify({
  //   text: "Mensaje enviado",
  //   duration: 2500,
  //   destination: "https://github.com/apvarun/toastify-js",
  //   newWindow: true,
  //   close: false,
  //   gravity: "bottom",
  //   position: "right",
  //   stopOnFocus: true,
  //   style: {
  //     background: "linear-gradient(to right, #00b09b, #96c93d)",
  //   },
  // });

  // let error = Toastify({
  //   text: "El mensaje no pudo ser enviado.",
  //   duration: 2500,
  //   destination: "https://github.com/apvarun/toastify-js",
  //   newWindow: true,
  //   close: false,
  //   gravity: "bottom",
  //   position: "right",
  //   stopOnFocus: true,
  //   style: {
  //     background:
  //       "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
  //   },
  // });

  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let mail = document.querySelector("#mail").value;
    let course = document.querySelector("#course").value;
    let message = document.querySelector("#message").value;

    alert(course);

    // const xhr = new XMLHttpRequest();
    // xhr.open("POST", "./contact.php");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //     alert("El correo electrónico ha sido enviado exitosamente.");
    //   }
    // };
    // xhr.send(`name=${name}&mail=${mail}&message=${message}&course=${course}`);
    // xhr.onload = function () {
    //   if (this.status == 200) {
    //     success.showToast();
    //     form.reset();
    //   } else {
    //     error.showToast();
    //     form.reset();
    //   }
    // };

    form.reset();
  });
});

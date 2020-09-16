const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario .input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{10,14}$/, // 7 a 14 numeros.
  msg: /^[a-z0-ZÀ-ÿ-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`{|}~-]{1,2000}$/,
};

const campos = {
  name: false,
  email: false,
  phone: false,
  msg: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      validarCampo(expresiones.name, e.target, "name");
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "phone":
      validarCampo(expresiones.phone, e.target, "phone");
      break;
    case "msg":
      validarCampo(expresiones.msg, e.target, "msg");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
    document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  if (campos.name && campos.email && campos.phone && campos.msg) {
    formulario.reset();

    document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
    document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
      icono.classList.remove("formulario__grupo-correcto");
      document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
    });
  } else {
    e.preventDefault();
    document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
  }
});

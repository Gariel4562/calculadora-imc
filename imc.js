const calcular = document.getElementById(`calcular`);


function imc () {

   const res = document.querySelector(`#res`)

   let nome = document.getElementById(`nome`).value;
   let altura = document.getElementById(`altura`).value;
   let peso = document.getElementById(`peso`).value;


   if(nome !== "" && altura !== "" && peso !== "") {


    const valorIMC = (peso / (altura * altura));

    res.textContent = valorIMC;



   } else {
      res.textContent = `preencha todos os campos`;
   };



   };





calcular.addEventListener(`click`, imc)

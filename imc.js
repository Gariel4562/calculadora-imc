const calcular = document.getElementById(`calcular`);


function imc () {

   const res = document.querySelector(`#res`);

   let nome = document.getElementById(`nome`).value;
   let altura = document.getElementById(`altura`).value;
   let peso = document.getElementById(`peso`).value;


   if(nome !== "" && altura !== "" && peso !== "") {


    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if(valorIMC < 18.5) {
      
      classificacao = `Abaixo do peso`;

    } else if (valorIMC < 25) {

      classificacao = ` com seu peso ideal`;

    }else if (valorIMC < 30) {

      classificacao = `Acima do peso`;

    };

    res.textContent = `${nome} Tem um IMC de ${valorIMC}, você está ${classificacao} `;



   } else {
      res.textContent = `preencha todos os campos`;
   };



   };





calcular.addEventListener(`click`, imc);

function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
  
    var imc = weight / height ** 2;
    var text=""
    if(imc < 18.5) {
      text="Estas delgado \n\n (Ver plan de entrenamiento enfocado en Superavit calorico)"
    } else if (imc < 24.9) {
      text="Estas normal \n\n (Ver plan de entrenamiento enfocado en Recomposicion corporal)"
    } else if (imc < 29.9) {
      text="Estas con sobrepeso \n\n(Ver plan de entrenamiento enfocado en  deficif calorico)"
    } else if (imc < 39.9) {
      text="Estas en la etapa de obesidad \n\n (Ver plan de entrenamiento enfocado en deficif calorico)"
    } else if (imc > 39.9) {
      text="Estas en la etapa de obesidad  \n\n (Ver plan de entrenamiento enfocado en deficif calorico)"
    }
    document.getElementById("text_area").innerText=text



   

  }



  

  
function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
  
    var imc = weight / height ** 2;
    var text=""
    if(imc < 18.5) {
      text="Estas delgado (Superavit calorico)"
    } else if (imc < 24.9) {
      text="Estas normal (Recomposicion corporal)"
    } else if (imc < 29.9) {
      text="Estas con sobrepeso (debes de hacer deficif calorico)"
    } else if (imc < 39.9) {
      text="Estas en la etapa de obesidad (debes de hacer deficif calorico)"
    } else if (imc > 39.9) {
      text="Estas en la etapa de obesidad morfica (debdes de hacer deficif calorico)"
    }
    document.getElementById("text_area").innerText=text
  }
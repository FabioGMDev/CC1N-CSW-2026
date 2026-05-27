const tela = document.getElementById("tela");
const resultado = document.getElementById("resultado");
const respeito = document.getElementById("respeito");

    function calc() {
      try {
        resultado.value = eval(2026-tela.value);
        
      } catch {
        resultado.value = "Erro";
      }
      
    }

    
    
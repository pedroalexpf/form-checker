// Alerta e Desabilita form de dúvidas quando especialistas estão OFF
// by Pedro Flores 06/2020
function horaCerta(){
    var hora = "23:30:00"; // Setar AQUI qual horário de fechamento do Form
    var horaate = '23:59:59';
    var hoje = new Date();
    var tempo = hoje.getHours() + ":" + hoje.getMinutes() + ":" + hoje.getSeconds();
  
  //alert(tempo, hoje);
      if(hora >= tempo && hora <= horaate){
                    
          document.getElementById("form-duvida").style.display = "block";
          return document.getElementById("avisooff").style.display = "none";  		
           
      } else {
           document.getElementById("avisooff").innerHTML='<p style="background:#bc4747; color: #fff; padding: 25px;width: 80%;margin: 0 auto;font-size: larger;font-family: Ubuntu; margin-top:100px;"><strong>Atenção:</strong> No momento o envio de casos aos Especialistas está Off, solicite auxílio aos colegas de time ou à Supervisão.'; 	
            return document.getElementById("form-duvida").style.display = "none";
    
      }
  }
  
  window.onload = horaCerta;
  
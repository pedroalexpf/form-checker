// Alerta e Desabilita form de dúvidas quando especialistas estão OFF
// by Pedro Flores 06/2020
window.onload = function horaCerta(){

    const d = new Date();
    let sysTimeSplit = [d.getHours(), d.getMinutes()];
    let sysTimeSecs = (sysTimeSplit[0] * 60 * 60) + (sysTimeSplit[1] * 60);
  
    const uTime = "17:00"; // Setar AQUI qual horário de fechamento do Form
    let uTimeSplit = uTime.split(':');
    let uTimeSecs = (uTimeSplit[0] * 60 * 60) + (uTimeSplit[1] * 60);
    const status = false; //TRUE para desativar as dúvidas fora do horário padrão
  console.log(status);
    if( sysTimeSecs >= uTimeSecs || status ){
  
          document.getElementById("avisooff").innerHTML='<p style="background:#bc4747; color: #fff; padding: 25px;width: 80%;margin: 0 auto;font-size: larger;font-family: Ubuntu; margin-top:100px;"><strong>Atenção:</strong> No momento o envio de casos aos Especialistas está Off, solicite auxílio aos colegas de time ou à Supervisão.';
            return document.getElementById("form-duvida").style.display = "none";
  
      } else {
  
           document.getElementById("form-duvida").style.display = "block";
          return document.getElementById("avisooff").style.display = "none";
  
      }
       
	let vldForm = document.querySelector(".wpcf7-textarea");
	var tempoEmMilisegundos=segundos*1000; //Cálculo p/ Tempo autoreload	
     var loop= setInterval(function(){//Início Função Autoreload
     	if(vldForm.value == ""){
	     document.location.reload();
	  }
	},tempoEmMilisegundos) // Fim loop
  }  

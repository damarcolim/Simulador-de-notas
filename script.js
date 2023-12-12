
        function calcularMedia() {
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);

            if (isNaN(nota1) || isNaN(nota2)) {
                alert("Por favor, insira valores numéricos para as notas.");
                return;
            }
            
            var mediaPonderada = (nota1 * 0.4) + (nota2 * 0.6);

            
            document.getElementById("mediaPonderada").innerHTML = mediaPonderada.toFixed(1);

             // Alterando a cor do texto com base na média ponderada
             if (mediaPonderada.toFixed(1) >= 7) {
                 document.getElementById('mediaPonderada').style.color = 'green';
            } else {
                 document.getElementById('mediaPonderada').style.color = 'red';
        }
        }      


        function limparCampos() {
            document.getElementById('nota1').value = '';
            document.getElementById('nota2').value = '';
            document.getElementById('mediaPonderada').innerText = '';
        }
   
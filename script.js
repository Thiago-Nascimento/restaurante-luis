
function carregarReservas() {
    fetch('https://api-teste-luis.azurewebsites.net/reservas')
        .then(response => response.json())
        .then(data => {
            console.log(data)            
            listarReservas(data)
        })
        .catch(error => console.error('Error:', error));

}

function listarReservas(arrayReservas) {
    let containerReservas = document.getElementById("lista");
    
    let template = "";
    
    arrayReservas.forEach(reserva => {
        template += `<div class="card-reserva">
        <div class="topo-reserva">
        <span class="nome_cliente">${reserva.nome_cliente}</span>
        <span class="numero_pessoas">Reserva para ${reserva.numero_pessoas} pessoas</span>
        </div>
        <span class="data_reserva">Data: ${formatarData(reserva.data_reserva)}</span>
        </div>`
    });
    
    containerReservas.innerHTML = template
}

function formatarData(data) {
    let dataFormatada = data.split("-")
    dataFormatada = dataFormatada[1] + "/" + (parseInt(dataFormatada[2])+1).toString() + "/" + dataFormatada[0]

    return dataFormatada
}

setInterval(carregarReservas, 10000)
let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let dataFinal = new Date(2023, 00, 01, 00, 00)
let tempoFinal = dataFinal.getTime();

function countdown() {
    let dataHoje = new Date();
    let horaHoje = dataHoje.getTime();
    let tempoRestante = tempoFinal - horaHoje;

    let umMin = 60 * 1000;
    let umaHora = 60 * umMin;
    let umDia = 24 * umaHora;

    let addZeros = (num) => (num < 10 ? `0${num}` : num);

    if(tempoFinal < horaHoje) {
        clearInterval(i);
        document.querySelector(
            ".countdown"
        ).innerHTML = `<h1>contagem regressiva expirou</h1>`;
        dataFinal += 1;
        }else{
            let diasRestantes = Math.floor(tempoRestante / umDia);         
            let hrsRestantes = Math.floor((tempoRestante % umDia) / umaHora);
            let minsRestantes = Math.floor((tempoRestante % umaHora) / umMin);
            let secsRestantes = Math.floor((tempoRestante % umMin) / 1000);

            dayBox.textContent = addZeros(diasRestantes);
            hrBox.textContent = addZeros(hrsRestantes);
            minBox.textContent = addZeros(minsRestantes);
            secBox.textContent = addZeros(secsRestantes);
        }
    }

    let i = setInterval(countdown, 1000);
    countdown();




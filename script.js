const menuKevin = document.getElementById("menuKevin")

const stileMenuKevin = `
        grid-area: nana;
        background: conic-gradient(from 0deg at 50% 50%, #f06543, #246EB9, #4CB944, #f06543);
        background-size: 1000% 1000%;
        border-radius: 2%;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-wrap: wrap;
        transition: all 1s linear;
        `

let ultimoBottoneCliccato = 10;
let posizioneSfondoX = 0;
let posizioneSfondoY = 0;


function parteMenuKevin(numeroBottone, html){

    switch(numeroBottone){
        case 0:
        posizioneSfondoX = "50%";
        posizioneSfondoY = "0%";
        break;

        case 1:
        posizioneSfondoX = "0%";
        posizioneSfondoY = "100%";
        break;

        case 2:
        posizioneSfondoX = "100%";
        posizioneSfondoY = "100%";    
        break;
    }

    if(numeroBottone != ultimoBottoneCliccato){

        document.getElementById("menu").style.gridTemplateColumns = '1fr 1fr' 
        
        document.getElementById("menuKevin").style = 
        
            stileMenuKevin + `
            background-position: ${posizioneSfondoX} ${posizioneSfondoY};
            padding: 50px;
            font-size:2rem;
            `;
        
        document.getElementById("menuKevin").innerHTML = html

        ultimoBottoneCliccato = numeroBottone;

    }else{

        ultimoBottoneCliccato = 10;

        document.getElementById("menu").style.gridTemplateColumns = '1fr 0fr' 

        document.getElementById("menuKevin").style = 

            stileMenuKevin + `
            background-position: ${posizioneSfondoX} ${posizioneSfondoY};
            `;
    }
    
}


function AboutMe(){
    let codiceHtml = `
    <h3>Chi sono?</h3>
    <p>Sono <b>Kevin De luca,</b> uno studente <a href="https://belluzzifioravanti.edu.it" target="_blank">dell'istituto tecnico Belluzzi Fioravanti</a> di Bologna, indirizzo elettronico.</p>

    <h3>Documenti:</h3>
    <li>
    <a href="contenuti/SicurezzaSulLavoro.pdf" target="_blank">Sicurezza sul lavoro</a>
    </li>
    <li>
    <a href="contenuti/OperatoreElettronico.pdf" target="_blank">Qualifica Operatore Elettronico</a>
    </li>
    `

    parteMenuKevin(0, codiceHtml)

}

function Esperienze(){
    let codiceHtml = `
    <h3>Progetti Personali:</h3>
    <li>Questo Sito</li>
    <li><a href="https://carcallingus.neocities.org" target="blank_">Portfolio di un artista</a></li>
    <li>AutoVideoMaker</li>
    <br>
    <h3>Con la Scuola:</h3>
    <li><a href="https://www.belluzzifioravanti.it/il-nostro-istituto-partecica-alliniziativa-adotta-una-scuola/" target="blank_">Impianto scuola elementare</li>
    `

    parteMenuKevin(1, codiceHtml)
}

function Tecnologie(){

    let codiceHtml = `
    <h3>Linguaggi di programmazione:</h3>
    <li>C</li>
    <li>Python</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <br>
    <h3>Software:</h3>
    <li>Eagle</li>
    <li>Multisim</li>
    <li>Microsoft Office</li>
    <li>CircuitJS Falstad</li>
    <li>Visual Studio Code</li>
    <li>GitHub Desktop</li>
    <li>Docker</li>
    `


    parteMenuKevin(2, codiceHtml)

}
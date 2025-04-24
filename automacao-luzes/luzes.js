class CentralDeLuzes {
    constructor() {
        if (CentralDeLuzes.instance) {
            return CentralDeLuzes.instance;
        }
        this.luzligada = {};
        CentralDeLuzes.instance = this;
    }
    static getInstance() {
        return new CentralDeLuzes();
    }

    ligar(comodo) {
        this.luzligada[comodo] = true;
        const statusJS = document.querySelector(`#status-${comodo}`);
        if (statusJS) statusJS.innerText = "Luz ligada";
        const div = document.getElementById(comodo);
        if (div) div.style.backgroundColor = "yellow";
    }

    desligar(comodo) {
        this.luzligada[comodo] = false;
        const statusJS = document.querySelector(`#status-${comodo}`);
        if (statusJS) statusJS.innerText = "Luz apagada";
        const div = document.getElementById(comodo);
        if (div) div.style.backgroundColor = "gray";
    }


}

document.querySelectorAll('button[data-comodo]').forEach(button => {
    button.addEventListener('click', (event) => {
        const comodo = button.getAttribute('data-comodo');
        const status = button.getAttribute('data-status');
        const central = CentralDeLuzes.getInstance();

        if (status === 'ligar') {
            central.ligar(comodo);
        } else {
            central.desligar(comodo);
        }
    });
});
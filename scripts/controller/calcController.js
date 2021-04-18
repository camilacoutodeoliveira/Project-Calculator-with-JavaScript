class CalcController {
    constructor() {
        // this referencia atributos e métodos da classe
        // this._atributo convenção de privado
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {

        //Use for show DateTime at to open screen
        this.setDisplayDateTime();
        //Função executada em um intervalo de tempo, o tempo é marcado em milisegundos
        //method calls a function or evaluates an expression at specified intervals
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        // setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
        // The function is only executed once
    }

    // Seletor filho e representado por >
    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        //Acima de 2 parametros utiliza-se ()
        // buttons.forEach((btn, index )=> {
        buttons.forEach(btn => {
            this.addEventListenerAll(btn, 'click drag', e => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            });
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });

    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            //False impede que o evento ocorra mais de uma vez
            element.addEventListener(event, fn, false);
        })
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this._currentDate = value;
    }
}
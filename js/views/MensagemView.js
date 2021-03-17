class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return model.texto ? `<p class="mdl-dialog">${model.texto}</p>` : `<p></p>`;
    }
}

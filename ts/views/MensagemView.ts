class MensagemView {
	private _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }

    update(model: Mensagem) {

        this._elemento.innerHTML = this.template(model);
    }
	template(model: Mensagem):string{
		return model.texto ? `<p class="mdl-dialog">${model.texto}</p>`: `<p></p>`;
	}
}



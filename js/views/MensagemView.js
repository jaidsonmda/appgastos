class MensagemView extends View{
	constructor(elemento){
		super(elemento);
	}
	template(model){
		return model.texto ? `<p class="mdl-dialog">${model.texto}</p>`: `<p></p>`;
	}
}
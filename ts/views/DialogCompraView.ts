class DialogCompraView {
	private _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }

    update(model: ListaCompra, i) {

        this._elemento.innerHTML = this.template(model,i);
    }

    template(model: ListaCompra, i): string {
	
		console.log("entrou em template posicao "+i)
		return model._compras.map(c =>{
			return	`
    			<form>
    				<div class="mdl-textfield mdl-js-textfield ">
					    <input class="mdl-textfield__input" value="${c.item}" type="text" id="itemEditar"  name="itemEditar" type="text">
					</div>
					<div class="mdl-textfield mdl-js-textfield ">
					    <input class="mdl-textfield__input" value="${c.unidade}" type="text" id="unidadeEditar"  name="unidadeEditar" type="text">
					</div>	
					<div class="mdl-textfield mdl-js-textfield ">
						<input class="mdl-textfield__input" value="${c.quantidade}" type="text" id="quantidadeEditar"  name="quantidadeEditar" type="text">
					</div>				  
					<div class="mdl-textfield mdl-js-textfield ">
						<input class="mdl-textfield__input" value="${c.valor}" type="text" id="valorEditar"  name="valorEditar" typetext">
					</div>
					<button id="compraEditaDialog${i}" onclick="compraController.editaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
				  		<i class="material-icons">check</i>
					</button>
					<button onclick="compraController.close(event)" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--mini-fab">
						<i class="material-icons">close</i>
					</button>
				</form>`}).join()
	}
	

}
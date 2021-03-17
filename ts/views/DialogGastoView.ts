class DialogGastoView{
	private _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }

    update(model: ListaGasto, i) {

        this._elemento.innerHTML = this.template(model,i);
    }

    template(model: ListaGasto, i): string {
	
		console.log("entrou em template posicao "+i)
		return model._gastos.map(g =>{
			return	`
    			<form>
    				<div class="mdl-textfield mdl-js-textfield ">
					    <input class="mdl-textfield__input" value="${g.descricao}" type="text" id="descricaoGastoEditar"  name="descricaoGastoEditar">
					</div>
					<div class="mdl-textfield mdl-js-textfield ">
					    <input class="mdl-textfield__input" value="${g.tipo}" type="text" id="tipoGastoEditar"  name="tipoGastoEditar" >
					</div>	
					<div class="mdl-textfield mdl-js-textfield ">
						<input class="mdl-textfield__input" value="${g.valor}" type="text" id="valorGastoEditar"  name="valorGastoEditar" >
					</div>
					<button id="gastoEditaDialog${i}" onclick="gastoController.editaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
				  		<i class="material-icons">check</i>
					</button>
					<button onclick="gastoController.close(event)" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--mini-fab">
						<i class="material-icons">close</i>
					</button>
				</form>`}).join()
	}
	

}
class DialogReceitaView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model, i) {
        this._elemento.innerHTML = this.template(model, i);
    }
    template(model, i) {
        console.log("entrou em template posicao " + i);
        return model._receitas.map(r => {
            return `
    			<form>
    				<div class="mdl-textfield mdl-js-textfield ">
					    <input class="mdl-textfield__input" value="${r.descricao}" type="text" id="descricaoReceitaEditar"  name="descricaoReceitaEditar">
					</div>
					<div class="mdl-textfield mdl-js-textfield ">
					    <input class="mdl-textfield__input" value="${r.tipo}" type="text" id="tipoReceitaEditar"  name="tipoReceitaEditar" >
					</div>	
					<div class="mdl-textfield mdl-js-textfield ">
						<input class="mdl-textfield__input" value="${r.valor}" type="text" id="valorReceitaEditar"  name="valorReceitaEditar" >
					</div>
					<button id="receitaEditaDialog${i}" onclick="receitaController.editaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
				  		<i class="material-icons">check</i>
					</button>
					<button onclick="receitaController.close(event)" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--mini-fab">
						<i class="material-icons">close</i>
					</button>
				</form>`;
        }).join();
    }
    updateEditar(model, pos) {
        this._elemento.innerHTML = this.template(model, pos);
    }
}

class DialogCompraView extends View{
	constructor(elemento){
		super(elemento);
	}
	template(model, i){
		console.log("entrou em template posicao "+i)
		return model.map(c =>{
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
	updateEditar(model, pos){
		this._elemento.innerHTML = this.template(model, pos);
	}
	// <form >

	// 			<div class="mdl-textfield mdl-js-textfield">
	// 			    <input class="mdl-textfield__input" type="text" id="item"  name="item" type="text">
	// 			    <label class="mdl-textfield__label" for="item">Item...</label>
	// 			</div>
			
	// 			<div class="mdl-textfield mdl-js-textfield ">
	// 			    <input class="mdl-textfield__input" type="text" id="unidade"  name="unidade" type="text">
	// 			    <label class="mdl-textfield__label" for="unidade">Unidade...</label>
	// 			</div>	
	// 			<div class="mdl-textfield mdl-js-textfield ">
	// 			    <input class="mdl-textfield__input" type="text" id="quantidade"  name="quantidade" type="text">
	// 			    <label class="mdl-textfield__label" for="quantidade">Quantidade...</label>
	// 			</div>				  
	// 			<div class="mdl-textfield mdl-js-textfield ">
	// 				<input class="mdl-textfield__input" type="text" id="valor"  name="valor" typetext">
	// 				<label class="mdl-textfield__label" for="valor">Preço...</label>
	// 			</div>
			
	// 			<div>
	// 		    <button id="adicionar-produto" onclick="compraController.adiciona(event)" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
 //  				<i class="material-icons">add_shopping_cart</i>
	// 			</button>
				
 // 				</div>
			
	// 		</form>
}
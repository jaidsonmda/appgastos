class ReceitasView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        if (model.receitas.length == 0) {
            return `
							<ul class="demo-list-two mdl-list">
							<li id="totalReceitaView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL RECEITAS</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.receitas.reduce((total, r) => total + r.valor, 0.0)},00</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-receita" onclick="receitaController.abreDialogExcluiTudo(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							
    						</span>
  						</li>
						</li>
							<li class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span><p>Para começar a usar receitas clique em <i class="material-icons">attach_money</i> na parte inferior da tela!</p></span>
      							<span class="mdl-list__item-sub-title"></span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								
								</span>
    							
    						</span>
  						</li>
  						</ul>
  						`;
        }
        else {
            return `
			<ul class="demo-list-two mdl-list">
					<li id="totalReceitaView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL RECEITAS</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.receitas.reduce((total, r) => total + r.valor, 0.0)},00</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-receita" onclick="receitaController.abreDialogExcluiTudo(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							
    						</span>
  						</li>
						${model.receitas.map((r, i) => {
                return `<li class="mdl-list__item mdl-list__item--two-line">
							<span class="mdl-list__item-primary-content">
      							<i class="material-icons mdl-list__item-avatar">list_check</i>
      							<span>${r.descricao} - ${r.tipo} - R$ ${r.valor},00 </span>		 			        
		 						<span class="mdl-list__item-sub-title">
		 			        		Data: ${DateHelper.dataParaTexto(r.data)}
		 			        	</span>
    						</span>
						    <span class="mdl-list__item-secondary-content">
						    	<span class="mdl-list__item-secondary-info"></span>
								<button id="excluirReceita${i}" onclick="receitaController.apagaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon icon material-icons"><i class="material-icons">money_off</i></button>
								<div class="mdl-tooltip" data-mdl-for="excluirReceita${i}">Exclui</div>
								<button id="editarReceita${i}" onclick="receitaController.pegaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon "><i class="material-icons">edit</i></button>
								<div class="mdl-tooltip"  data-mdl-for="editarReceita${i}">Edita</div>
					  	  	</span>
					  	</li>`;
            }).join("")}	
		 			    
		 			</ul>

		`;
        }
    }
}

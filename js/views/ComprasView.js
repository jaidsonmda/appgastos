class ComprasView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        if (model.compras.length == 0) {
            return `
							<ul class="demo-list-two mdl-list">
							<li id="totalCompraView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL DA COMPRA</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.compras.reduce((total, c) => total + c.total, 0.0)},00</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-lista" onclick="compraController.abreDialogExcluiTudo(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							<button id="salvaCompra" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
  									<i class="material-icons">shopping_cart</i>
								</button>
    						</span>
  						</li>
							<li class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span><p>Para começar a usar a lista clique em <i class="material-icons">add_shopping_cart</i> na parte inferior da tela!</p></span>
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
            return `<ul class="demo-list-two mdl-list">
					<li id="totalCompraView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL DA COMPRA</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.compras.reduce((total, c) => total + c.total, 0.0)}</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-lista" onclick="compraController.abreDialogExcluiTudo(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							<button id="salvaCompra"  class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
  									<i class="material-icons">shopping_cart</i>
								</button>
    						</span>
  						</li>
						${model.compras.map((c, i) => {
                return `

		 		    	<li class="mdl-list__item mdl-list__item--two-line">
							<span class="mdl-list__item-primary-content">
      							<i class="material-icons mdl-list__item-avatar">shopping_basket</i>
      							<span>${c.unidade} - ${c.item} - R$${c.valor} </span>		 			        
		 						<span class="mdl-list__item-sub-title">
		 			        		
		 			        		Quantidade: ${c.quantidade} - Total: R$${c.total}
		 			        		
		 			        </span>
    </span>
    <span class="mdl-list__item-secondary-content">
      <span class="mdl-list__item-secondary-info"></span>
    	<button id="compraDelete${i}" onclick="compraController.apagaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon icon material-icons"><i class="material-icons">remove_shopping_cart</i></button>
		 			        	<div class="mdl-tooltip" data-mdl-for="compraDelete${i}">Exclui</div>
							<button id="compraEdita${i}" onclick="compraController.pegaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon "><i class="material-icons">edit</i></button>
		 						<div class="mdl-tooltip"  data-mdl-for="compraPega${i}">Edita</div>
  	  </span>
  </li>
    				
    				
		 			    `;
            }).join("")}	
		 			    
		 			</ul>
				
		 			    `;
        }
    }
}

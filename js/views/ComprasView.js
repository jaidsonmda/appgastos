class ComprasView extends View{
	constructor(elemento){
		super(elemento);
	}
	template(model){
			
		// return `<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
		// 		<thead>
		// 		    <tr>
		// 		    	<th class="mdl-data-table__cell--non-numeric">Item</th>
		// 		    	<th class="mdl-data-table__cell--non-numeric">UN</th>
		// 		    	<th>Quantidade</th>
		// 		    	<th>Valor</th>
		// 		    	<th>Total</th>
		// 		    	<th>Ações</th>
		// 		    </tr>
		// 		</thead>
		// 		<tbody id="compra">
		// 		    ${model.compras.map((c, i) =>{
		// 		    	return`<tr>
		// 			        <td>${c.item}</td>
		// 			        <td>${c.unidade}</td>
		// 			        <td>${c.quantidade}</td>
		// 			        <td>${c.valor}</td>
		// 			        <td>${c.total}</td>
		// 			        <td><div id="compraDelete${i}" onclick="compraController.apagaUm(event, ${i})" class="icon material-icons">delete</div>
		// 			        	<div class="mdl-tooltip" data-mdl-for="compraDelete${i}">Exclui</div>
		// 						<div id="compraEdita${i}" onclick="compraController.editaUm(event, ${i})" class="icon material-icons">edit</div>
		// 						<div class="mdl-tooltip"  data-mdl-for="compraEdita${i}">Edita</div>
		// 			        </td>
		// 			    </tr>`}).join()}
		// 		</tbody>
		// 		<tfoot>
		// 			<tr> 
		// 				<td colspan="4">TOTAL FINAL</td>
		// 				<td >${model.compras.reduce((total, c)=> total+c.total, 0.0)}</td>
		// 				<td> <button id="apaga-lista" onclick="compraController.apaga(event)" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
  // 				<i class="material-icons">delete</i>
		// 		</button></td>
		// 			</tr>
		// 		</tfoot>
		// 	</table>`;
			if(model.compras.length==0){
							return`
							<ul class="demo-list-two mdl-list">
							<li id="totalCompraView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL DA COMPRA</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.compras.reduce((total, c)=> total+c.total, 0.0)},00</span>
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
							`
			}else{
			return `<ul class="demo-list-two mdl-list">
					<li id="totalCompraView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL DA COMPRA</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.compras.reduce((total, c)=> total+c.total, 0.0)}</span>
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
						${
						
							model.compras.map((c, i) =>{
						
						
		 		    	return`

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
    				
    				
		 			    `}).join("")}	
		 			    
		 			</ul>
				
		 			    `}
	}
	
}
class GastosView extends View{
	constructor(elemento){
		super(elemento);
	}
	template(model){
		if(model.gastos.length==0){
							return`
							<ul class="demo-list-two mdl-list">
							<li id="totalGastoView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL GASTOS</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.gastos.reduce((total, g)=> total+g.valor, 0.0)},00</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-gasto" onclick="gastoController.abreDialogExcluiTudo(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							
    						</span>
  						</li>
							
						</li>
							<li class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span><p>Para começar a usar gastos clique em <i class="material-icons">money_off</i> na parte inferior da tela!</p></span>
      							<span class="mdl-list__item-sub-title"></span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								
								</span>
    							
    						</span>
  						</li>
  						</ul>
  						`
  					}
  					else{
		return `
			<ul class="demo-list-two mdl-list">
						<li id="totalGastoView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL GASTOS</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.gastos.reduce((total, g)=> total+g.valor, 0.0)},00</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-gasto" onclick="gastoController.abreDialogExcluiTudo(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							
    						</span>
  						</li>
						${model.gastos.map((g, i) =>{						
		 		    	return`<li class="mdl-list__item mdl-list__item--two-line">
							<span class="mdl-list__item-primary-content">
      							<i class="material-icons mdl-list__item-avatar">monetization_on</i>
      							<span>${g.descricao} - ${g.tipo} - R$ ${g.valor},00 </span>		 			        
		 						<span class="mdl-list__item-sub-title">
		 			        		Data: ${DateHelper.dataParaTexto(g.data)}
		 			        	</span>
    						</span>
						    <span class="mdl-list__item-secondary-content">
						    	<span class="mdl-list__item-secondary-info"></span>
								<button id="excluirGasto${i}" onclick="gastoController.apagaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon icon material-icons"><i class="material-icons">remove_shopping_cart</i></button>
								<div class="mdl-tooltip" data-mdl-for="excluirGasto${i}">Exclui</div>
								<button id="editarGasto${i}" onclick="gastoController.pegaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon "><i class="material-icons">edit</i></button>
								<div class="mdl-tooltip"  data-mdl-for="editarGasto${i}">Edita</div>
					  	  	</span>
					  	</li>`}).join("")}	
		 			    
		 			</ul>`}
	}

			/*<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
				<thead>
				    <tr>
				    	<th>Data</th>
				    	<th class="mdl-data-table__cell--non-numeric">Descrição</th>
				    	<th class="mdl-data-table__cell--non-numeric">Tipo</th>
				    	<th>Valor</th>
				    	<th>Ações</th>
				    </tr>
				</thead>
				<tbody>
				    ${model.gastos.map((g, i) =>{
					
				     return`
						
						<tr>
							<td>${DateHelper.dataParaTexto(g.data)}</td>
					        <td>${g.descricao}</td>
					        <td>${g.tipo}</td>
					        <td>${g.valor}</td>
					        <td><div id="excluirGasto${i}" onclick="gastoController.apagaUm(event, ${i})" class="icon material-icons">delete</div>
					        	<div class="mdl-tooltip" data-mdl-for="excluirGasto${i}">Excluir</div>
								<div id="editarGasto${i}" onclick="gastoController.editaUm(event, ${i})" class="icon material-icons">edit</div>
								<div class="mdl-tooltip" data-mdl-for="editarGasto${i}">Editar</div>
					        </td>
					    </tr>

		        	`}).join()}
				</tbody>
				<tfoot>
					<tr> 
						<td colspan="3">TOTAL GASTOS</td>
						<td  class="totalFinalGastos">${model.gastos.reduce((total, g)=> total+g.valor, 0.0)}</td>
						<td> <button id="apaga-gasto" onclick="gastoController.apaga(event)" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
  				<i class="material-icons">delete</i>
				</button></td>
					</tr>
				</tfoot>
			</table>


			<ul class="demo-list-two mdl-list">
						${model.gastos.map((g, i) =>{						
		 		    	return`<li class="mdl-list__item mdl-list__item--two-line">
							<span class="mdl-list__item-primary-content">
      							<i class="material-icons mdl-list__item-avatar">list_check</i>
      							<span>${g.descricao} - ${g.tipo} - R$ ${g.valor},00 </span>		 			        
		 						<span class="mdl-list__item-sub-title">
		 			        		Data: ${DateHelper.dataParaTexto(g.data)}
		 			        	</span>
    						</span>
						    <span class="mdl-list__item-secondary-content">
						    	<span class="mdl-list__item-secondary-info"></span>
								<button id="excluirGasto${i}" onclick="gastoController.apagaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon icon material-icons"><i class="material-icons">remove_shopping_cart</i></button>
								<div class="mdl-tooltip" data-mdl-for="excluirGasto${i}">Exclui</div>
								<button id="editarGasto${i}" onclick="gastoController.editaUm(event, ${i})" class="mdl-button mdl-js-button mdl-button--icon "><i class="material-icons">edit</i></button>
								<div class="mdl-tooltip"  data-mdl-for="editarGasto${i}">Edita</div>
					  	  	</span>
					  	</li>`}).join()}	
		 			    <li id="totalGastoView"class="mdl-list__item mdl-list__item--two-line">
    						<span class="mdl-list__item-primary-content">
        						<span>TOTAL GASTOS</span>
      							<span class="mdl-list__item-sub-title">R$ ${model.gastos.reduce((total, g)=> total+g.valor, 0.0)},00</span>
    						</span>
    						<span class="mdl-list__item-secondary-content">
      							<span class="mdl-list__item-secondary-info"> 
      								<button id="apaga-gasto" onclick="gastoController.apaga(event)" class="mdl-button mdl-js-button mdl-button--icon">
  										<i class="material-icons">delete</i>
									</button>
								</span>
    							
    						</span>
  						</li>
		 			</ul>*/

}
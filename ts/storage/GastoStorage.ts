class GastoStorage{
	_listasGastos;
	_gastosStorage;
	gastosLocais;
	constructor(){
		this._listasGastos = new ListaGasto();
		this._gastosStorage = [];
		this.gastosLocais = JSON.parse(localStorage.getItem("gasto"));
		console.log(`Lendo ${this.gastosLocais} na storage`);
		
	}
	get storageGastos(){
		if (this.gastosLocais) {
	        this.gastosLocais.map( gastoLocal => {
	            let gasto = new Gasto(new Date(gastoLocal.data), gastoLocal.descricao, gastoLocal.tipo, gastoLocal.valor)
	            this._listasGastos.adiciona(gasto);
	        })
	        return this._listasGastos;
    	}else{
	        return this._listasGastos;
    	}
	}
	salvaGastos(listaGastos){
		console.log(listaGastos);
	    localStorage.setItem("gasto", JSON.stringify(
	        listaGastos.gastos.map(gasto => ({data: gasto.data, descricao: gasto.descricao, tipo: gasto.tipo, valor: gasto.valor}))
	    ));
 	}
 	removeGastos(){
 		localStorage.removeItem("gasto");
 	}
}
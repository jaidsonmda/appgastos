class CompraStorage{
	_comprasStorage
	_listasCompras
	_comprasLocais
	constructor(){
		this._listasCompras = new ListaCompra();
		this._comprasStorage = [];
		this._comprasLocais = JSON.parse(localStorage.getItem("compra"));
		console.log(`Lendo ${this._comprasLocais} na storage`);
		
	}
	get storageCompras(){
		if (this._comprasLocais) {
	        this._comprasLocais.map( compraLocal => {
	            let compra = new Compra(compraLocal.item, compraLocal.unidade, new Date(compraLocal.data), compraLocal.quantidade, compraLocal.valor)
	            this._listasCompras.adiciona(compra);
	        })
	        return this._listasCompras;
    	}else{
	        return this._listasCompras;
    	}
	}
	salvaCompras(listaCompras){
		console.log(listaCompras);
	    localStorage.setItem("compra", JSON.stringify(
	        listaCompras.compras.map(compra => ({item: compra.item, unidade: compra.unidade, data: compra.data, quantidade: compra.quantidade, valor: compra.valor}))
	    ));
 	}
 	removeCompras(){
 		localStorage.removeItem("compra");
 	}
}
class ListaGasto{
	_gastos;
	array: any;
	constructor(){
		this._gastos= [];
	}
	adiciona(gasto){
		this._gastos.push(gasto);
	}
	get gastos(){
		return [].concat(this._gastos);
	}
	esvazia(){
		this._gastos = [];
	}
	remove(posicao){
		this._gastos = this._gastos.filter((item, i)=>{return i != posicao});
	}
	seleciona(posicao){
		console.log("entrou em selecionar")
		return this._gastos.filter((item, i)=>{return i == posicao});
	}
	edita(descricao, tipo, valor, posicao){
		console.log(new Gasto( new Date(), descricao, tipo, valor))
		this._gastos = this._gastos.map((itemMap, i)=>{if(i == posicao){return new Gasto( new Date(), descricao, tipo, valor)} return itemMap});
	}
}
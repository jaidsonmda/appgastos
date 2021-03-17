class ListaReceita{
	_receitas;
	array: any;
	constructor(){
		this._receitas= [];
	}
	adiciona(receita){
		this._receitas.push(receita);
	}
	get receitas(){
		return [].concat(this._receitas);
	}
	esvazia(){
		this._receitas = [];
	}
	remove(posicao){
		this._receitas = this._receitas.filter((item, i)=>{return i != posicao});
	}
	seleciona(posicao){
		console.log("entrou em selecionar")
		return this._receitas.filter((item, i)=>{return i == posicao});
	}
	edita(descricao, tipo, valor, posicao){
		console.log(new Receita( new Date(), descricao, tipo, valor))
		this._receitas = this._receitas.map((itemMap, i)=>{if(i == posicao){return new Receita( new Date(), descricao, tipo, valor)} return itemMap});
	}
}
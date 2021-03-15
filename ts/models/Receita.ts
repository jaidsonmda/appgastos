class Receita{
	_data;
	_descricao;
	_tipo;
	_valor;
	
	constructor(data, descricao, tipo, valor){
		this._data = new Date(data.getTime()); //Programação Defensiva
		this._descricao = descricao;
		this._tipo = tipo;
		this._valor = valor;
		Object.freeze(this);//objeto imutavel?
	}
	
	get data(){
		return new Date(this._data.getTime());//Programação Defensiva
	}
	get descricao(){
		return this._descricao;
	}
	get tipo(){
		return this._tipo;
	}
	get valor(){
		return this._valor * 1;
	}
}
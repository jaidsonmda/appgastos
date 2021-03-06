class Compra{
	constructor(item, unidade, data, quantidade, valor){
		this._item = item;
		this._unidade = unidade;
		this._data = new Date(data.getTime()); //Programação Defensiva
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);//objeto imutavel?
	}
	get item(){
		return this._item;
	}
	get unidade(){
		return this._unidade;
	}
	get data(){
		return new Date(this._data.getTime());//Programação Defensiva
	}
	get quantidade(){
		return this._quantidade;
	}
	get valor(){
		return this._valor;
	}
	get total(){
		return this._quantidade * this._valor;
	}
	set item(item){
		this._item=item;
	}
	
}
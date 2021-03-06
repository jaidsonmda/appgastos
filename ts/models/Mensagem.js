class Mensagem{
	constructor(texto=''){//se não for passado valor na construçao adota o padrão ''
		this._texto= texto;
	}
	get texto(){
		return this._texto;
	}
	set texto(texto){
		this._texto= texto;
	}
}
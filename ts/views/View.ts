class View{
	_elemento
	constructor(elemento){
		this._elemento = elemento;
	}
	template(){
		throw new Error('O Método deve ser implementado!');
	}
	update(){
		this._elemento.innerHTML = this.template(model);
	}
}
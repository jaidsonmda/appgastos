class View{
	_elemento
	constructor(elemento){
		this._elemento = elemento;
	}
	template(model:any){
		throw new Error('O Método deve ser implementado!');
	}
	update(model:any){
		this._elemento.innerHTML = this.template(model);
	}
}
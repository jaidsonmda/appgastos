class DateHelper{
	constructor(){
		throw new Error('DateHelper não pode ser instanciado!');
	}
	static textoParaData(texto){
		if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
			throw new Error('Deve estar no formato yyyy-mm-dd!');
		}
		return new Date(
			...texto.split('-')//spread operator
			.map((item, indice) =>//arrow Function, sempre retorna um valor
				/*if (indice == 1) {
					return item - 1;
				}*/
				item - indice%2
			));

	}
	static dataParaTexto(data){
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}
}
let versao = 10

let arquivos = [
"/",
"/app.json",
"fonts/MaterialIcons-Regular.eot",
"fonts/MaterialIcons-Regular.ttf",
"fonts/MaterialIcons-Regular.woff",
"fonts/MaterialIcons-Regular.woff2",
"js/material.js",
"js/material.min.js",
"js/material.min.js.map",
"js/controllers/CompraController.js",
"js/controllers/GastoController.js",
"js/controllers/ReceitaController.js",
"js/helpers/DateHelper.js",
"js/helpers/SnackBar.js",
"js/models/Compra.js",
"js/models/Gasto.js",
"js/models/ListaCompra.js",
"js/models/ListaGasto.js",
"js/models/ListaReceita.js",
"js/models/Mensagem.js",
"js/models/Receita.js",
"js/storage/CompraStorage.js",
"js/storage/GastoStorage.js",
"js/storage/ReceitaStorage.js",
"js/sw/registra.js",
"js/views/ComprasView.js",
"js/views/GastosView.js",
"js/views/MensagemView.js",
"js/views/ReceitasView.js",
"js/views/View.js",
"css/material.css",
"css/material.mi5n.css",
"css/material.min.css",
"css/material.min.css.map",
"css/planilha.css"]


self.addEventListener("install", function(){
	console.log("instalou !!!!!!!!!!!!!!!!!")

 	// caches.open("ceep-arquivos")
 	// .then(cache =>{
 	// 	cache.addAll(arquivos)
 	// 	}
 	// )
	
	// caches.open("ceep-arquivos").then(cache =>{
	// 	cache.addAll(arquivos).then(function(){
	// 		caches.delete("ceep-arquivos")
	// 	})
	// })
})
self.addEventListener("activate", function(){
	caches.has("vf-arquivos-"+(versao-1)).then(function(hasCache) {
		if (!hasCache) {
			caches.open("vf-arquivos-"+versao).then(cache =>{
		    	return cache.addAll(arquivos);
		  	});
		} else {
			caches.open("vf-arquivos-"+versao).then(cache =>{
				cache.addAll(arquivos).then(function(){
					caches.delete("vf-arquivos-"+(versao-1));
				})
			})
    	}
	}).catch(function() {
  		Console.log("Deu ruim!");
	})
	

})
self.addEventListener("fetch", function(event) {
	// body...
	pedido = event.request
	let promiseResposta = caches.match(pedido).then(respostaCache => {
			let resposta = respostaCache ? respostaCache : fetch(pedido)
	        return resposta
	})
	event.respondWith(promiseResposta)
})
// self.addEventListener("fetch", function(event) {
// 	// body...
// 	pedido = event.request
// 	let promiseResposta = caches.open("ceep-imagens").then(cache => {
// 	    return cache.match(pedido)
// 	}).then( respostaCache => {
// 			let resposta = respostaCache ? respostaCache : fetch(pedido)
// 	        return resposta
// 	    })
// 	event.respondWith(promiseResposta)
// })
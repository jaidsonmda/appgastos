function GastoLS(data, descricao, tipo, valor){
        const gasto = Object.create({
           "data": new Date(data.getTime()),
           "descricao": descricao,
           "tipo": tipo,
           "valor": valor
        })

        return gasto
}
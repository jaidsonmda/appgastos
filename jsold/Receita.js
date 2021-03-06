function Receita(descricao, tipo, valor){
        const receita = Object.create({
           "descricao": descricao,
           "tipo": tipo,
           "valor": valor
        })

        return receita
}
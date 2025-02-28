//definir os meus itens e os conteudos 

//definir type

export type Item = {
    id: number, //identificador unico produto
    nome: string; // nome do produto
    quantidade: number; //quantidade


};

//criar um array com a lista de compra, contendo varios produtos 

export const listaData: Item[] = [
    { id: 1, nome: 'Arroz', quantidade: 2 },
    { id: 2, nome: 'Feijão', quantidade: 2 },
    { id: 3, nome: 'Batata', quantidade: 5 },
    { id: 4, nome: 'Cebola', quantidade: 2 },
    { id: 5, nome: 'Alho', quantidade: 10 },
    { id: 6, nome: 'Alface', quantidade: 2 },


];

export const listaFrutas: Item[] = [
    { id: 1, nome: 'Melão', quantidade: 2 },
    { id: 2, nome: 'Melancia', quantidade: 2 },
    { id: 3, nome: 'Banana', quantidade: 5 },
    { id: 4, nome: 'Caju', quantidade: 2 },
    { id: 5, nome: 'Mamão', quantidade: 10 },
    { id: 6, nome: 'Lichia', quantidade: 2 },


];


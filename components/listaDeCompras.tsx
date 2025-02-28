//criar dentro da pasta de components

import { Item } from '../data/ListaData';

//PROPS
//definimos o formato da interface de props, com o componentes listaDeCompras
//lista de itens (array de itens)
type listaDeComprasProps = {
    Item: Item[]; //itens sera um array do objeto do tipo 'Item'
}

function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>


            <h1>Lista de compras</h1>
            {props.Item.map(function (Item) {
                return (
                    <div key={Item.id}>
                        <p>Produto:{Item.nome}</p>
                        <p>Quantidade: {Item.quantidade}</p>
                        <hr></hr>
                    </div>

                )
            })}

        </>
    )
};
export default listaDeCompras;

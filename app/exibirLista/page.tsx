import { listaData } from "@/data/ListaData";

function exibirLista() {
    return (
        <>
            <h1>LISTA DE PRODUTO EM TABELA</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {listaData.map(function (item) {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>
                                    <link href={'/detalhesProduto/' + item.id}>VER DETALHES
                                    </link>
                                </td>
                            </tr>
                        )
                    })} </tbody>
            </table>
        </>
    )
}
export default exibirLista;
//app /detalhesProduto/[id]/page.txt
import { listaData } from "@/data/ListaData";
type detalhesProdutoProps = {
    params: {
        id: string;
    }
}
function detalhesProduto(props: detalhesProdutoProps) {
    var produtoID = parseInt(props.params.id);
    var produto = listaData.find(function (item) {
        return item.id === produtoID;
    });
    return (
        <>
            <h2>DETALHES DO PRODUTO</h2>
            <p><strong>ID:</strong>{produto?.id}</p>
            <p><strong>Nome:</strong>{produto?.nome}</p>
            <p><strong>quantidade:</strong>{produto?.quantidade}</p>
        </>
    )
}
export default detalhesProduto;
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
           <div className="flex itens-center justify-center bg-gray-100 min-h-screen">
            <div className="bg-white rounded-lg">
                
            <h2>DETALHES DO PRODUTO</h2>
            <p><strong>ID:</strong>{produto?.id}</p>
            <p><strong>Nome:</strong>{produto?.nome}</p>
            <p><strong>quantidade:</strong>{produto?.quantidade}</p>
            </div>
            </div>
        </>
    )
}
export default detalhesProduto; //jenny

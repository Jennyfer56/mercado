import Link from "next/link";

function Header(){
    return (
        <>
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto">
                <h1 className="text-xl font-bold">PROJETO MERCADO</h1>
            </div>
            <nav>
                <ul>
                    <li> <link href="/">HOME</link></li>
                    <li> <link href="/exibirLista">LISTA DE COMPRAS</link></li>
                    <li> <link href="/sobre">Sobre</link></li>
                    <li> <link href="/Contato">CONTATO</link></li>

                </ul>
            </nav>


        </header>
        </>
    )
}  
export default Header;
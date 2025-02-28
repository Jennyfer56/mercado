import ListaDeCompras from '@/components/listaDeCompras';
import { listaData, listaFrutas } from '../data/ListaData';


function page() {
  return (
    <>
      <h1>MERCADO</h1>
      <p>Lista de itens gerais</p>
      <ListaDeCompras Item={listaData} />
      <p>Lista de frutas</p>
      <ListaDeCompras Item={listaFrutas} />


    </>
  )
};
export default page;
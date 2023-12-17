import Capa from "../Capa";
import Contato from "../Contato";
import Icone from "../Icone";
import Produtos from "../Produtos";
import Sobre from "../Sobre";

export default function Conteudo() {
    return (
        <main>
            <Capa />
            <Produtos />
            <Sobre />
            <Contato />
            <Icone />
        </main>
    )
}
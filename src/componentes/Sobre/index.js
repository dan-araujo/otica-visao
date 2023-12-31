import "./style.css";

export default function Sobre() {
    return (
        <section id="sobre">
            <div className="container">
                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou
                    suas atividades focada no atendimento ao público de renda mais baixa,
                    sempre com o objetivo de proporcionar ao cliente bom atendimento,
                    qualidade e preço baixo. </p>
                <div className="sobre-cards">
                    <img src="assets/loja.png" alt="Loja Farmacêutica" />
                    <div className="card-informacoes">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card-informacoes">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png" alt="Bom atendimento" />
                </div>
            </div>
        </section>
    )
}
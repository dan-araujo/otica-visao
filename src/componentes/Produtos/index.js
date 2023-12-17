import "./style.css";

export default function Produtos() {
  return (
    <section id="produtos">
      <div className="container">
        <h2>Nossos produtos</h2>
        <p>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
        <div className="oculos-cards">
          <div className="card">
            <h3>Óculos de grau</h3>
            <img src="assets/oculos-grau.png" alt="Óculos de grau" />
            <p>R$ 500,00</p>
          </div>
          <div className="card">
            <h3>Óculos transition</h3>
            <img src="assets/oculos-transition.png" alt="Óculos transition" />
            <p>R$ 750,00</p>
          </div>
          <div className="card">
            <h3>Óculos de sol</h3>
            <img src="assets/oculos-sol.png" alt="Óculos de sol" />
            <p>R$ 700,00</p>
          </div>
          <div className="card">
            <h3>Óculos infantil</h3>
            <img src="assets/oculos-infantil.png" alt="Óculos infantil" />
            <p>R$ 500,00</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}

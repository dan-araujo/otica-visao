import "./style.css";

export default function Topo() {
  return (
    <header id="topo">
      <div className="container">
        <a href="index.html">
          <img src="assets/logo.png" alt="Logo Ótica Visão" />
        </a>
        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}

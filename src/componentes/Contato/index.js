import "./style.css";

export default function Contato() {
  return (
    <section id="contato">
      <div className="container">
        <h2>Fale conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
        <div className="contato-informacoes">
          <div>
            <h4>Contato</h4>
            <span>
              <img src="assets/local.png" alt="localização" />
              <p>Recife, PE</p>
            </span>
            <span>
              <img src="assets/telefone.png" alt="telefone" />
              <p>
                (81) 99789-9909
              </p>
            </span>
            <span>
              <img src="assets/email.png" alt="telefone" />
              <p>
                <a
                  href="mailto:contato@oticavida.com?subject=Questions"
                  title=""
                >
                  contato@oticavida.com
                </a>
              </p>
            </span>
          </div>
          <div>
            <h4>Nossas Redes Sociais</h4>
            <span>
              <img src="assets/fb.png" alt="facebook" />
              <p>/OticaVisao</p>
            </span>
            <span>
              <img src="assets/ig.png" alt="instagram" />
              <p>@oticavisao</p>
            </span>
            <span>
              <img src="assets/tt.png" alt="twitter" />
              <p>@oticavisao</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

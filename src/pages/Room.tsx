import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/room.scss";

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>Código</div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>
        <form>
          <textarea placeholder="O que voce quer perguntar?"></textarea>

          <div className="form-footer">
            <span>
              Para enviar uma pergunta,<button>Faça seu login</button>
            </span>
            <button type="submit" className="button">Enviar Pergunta</button>
          </div>
        </form>
      </main>
    </div>
  );
}
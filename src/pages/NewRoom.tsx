import { Link, useHistory } from "react-router-dom";
import { FormEvent } from "react";
import IllustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";
import { useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";
//import { useAuth } from '../hooks/useAuth'

export function NewRoom() {
  const history =  useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  //const {user} = useAuth()
  return (
    <div id="page-auth">
      <aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => {
                setNewRoom(event.target.value);
              }}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente ?<Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

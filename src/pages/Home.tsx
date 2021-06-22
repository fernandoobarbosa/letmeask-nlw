import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import { useContext } from 'react'
import { useHistory } from 'react-router'

import firebase from 'firebase'
import { auth } from '../services/firebase'

import { TestContext } from '../App'

import '../styles/auth.scss'

export function Home () {
  const history = useHistory()
  const value = useContext(TestContext)
  console.log(value)
  function handleCreateRoom () {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider).then((result) => {
      console.log(result)
      history.push('/rooms/new')
    })
  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={IllustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Letmeask' />
          <button className='create-room' onClick={handleCreateRoom}>
            <img src={googleIconImg} alt='Logo do google' />
            Crie sua sala com o Google
          </button>
          <div className='separator'>Ou entre em uma sala</div>
          <form>
            <input
              type='text'
              placeholder='Digite o código da sala'
            />
            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>

    </div>
  )
}

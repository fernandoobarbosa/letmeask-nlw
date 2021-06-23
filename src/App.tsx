import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { AuthContextprovider } from './contexts/AuthContext'

function App () {
  return (
    <BrowserRouter>
      <AuthContextprovider>
        <Route path='/' exact component={Home} />
        <Route exact path='/rooms/new' component={NewRoom} />
      </AuthContextprovider>
    </BrowserRouter>
  )
}

export default App

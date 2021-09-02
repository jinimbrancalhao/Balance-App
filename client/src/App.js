import Home from './pages/Home'
import Goals from './pages/Goals'
import Reflections from './pages/Reflections'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/goals" component={Goals} />
          <Route exact path="/reflections" component={Reflections} />
        </Switch>
      </main>
    </div>
  )
}

export default App

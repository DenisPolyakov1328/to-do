import './App.css'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { RootState } from './store/store'
import Login from './components/LoginPage/LoginPage'
import TodoPage from './components/TodoPage/TodoPage'

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  return (
    <div className="App">
      <Router>
        <Navigate to={isAuthenticated ? '/todo' : '/login'} replace={true} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

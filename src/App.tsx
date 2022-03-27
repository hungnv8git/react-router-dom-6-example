import { useRoutes } from 'react-router-dom'
import { Home } from './components/Home'
import { TodoDetail } from './components/todo-list/TodoDetail'
import { TodoList } from './components/todo-list'
import { Photos } from './components/photos'
import { PhotoDetail } from './components/photos/PhotoDetail'

function App() {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'todo-list', element: <TodoList /> },
    { path: 'todo-detail/:todoId', element: <TodoDetail /> },
    { path: 'photos', element: <Photos /> },
    { path: 'photo-detail/:photoId', element: <PhotoDetail /> }
  ])

  return element
}

export default App

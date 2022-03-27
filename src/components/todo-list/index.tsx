import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../layouts/Header'

export interface TASK {
  userId: number
  id: number
  title: string
  completed: boolean
}

export function TodoList() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState<TASK[]>()

  const todoListPromise = fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET'
  })

  function getData() {
    todoListPromise
      .then(res => {
        return res.json()
      })
      .then(data => setTasks(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <h3>Todo list</h3>
      {tasks && (
        <div>
          {tasks.map(task => (
            <a
              key={task.id}
              href={`/todo-detail/${task.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`p-3 my-1 ${
                  task.completed ? 'bg-orange-300' : 'bg-gray-300'
                }`}
              >
                #{task.id}: {task.title}{' '}
                {task.completed && <span className="italic">(completed)</span>}
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  )
}

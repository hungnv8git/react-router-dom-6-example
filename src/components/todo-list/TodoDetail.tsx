import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TASK } from '.'
import { Header } from '../../layouts/Header'

export function TodoDetail() {
  const { todoId } = useParams()
  const [taskDetail, setTaskDetail] = useState<TASK>()

  const taskDetailPromise = fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  )

  function getDataDetail() {
    taskDetailPromise
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(data => setTaskDetail(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getDataDetail()
  }, [todoId])

  return (
    <>
      <Header />
      <h3>this is todo: {todoId}</h3>
      <div className="mt-10">
        <div>UserId: {taskDetail?.userId}</div>
        <div>
          #{taskDetail?.id} {taskDetail?.title}
        </div>
        <div>Completed: {String(taskDetail?.completed)}</div>
      </div>
    </>
  )
}

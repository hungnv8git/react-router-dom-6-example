import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/', name: 'Home' },
  { href: '/todo-list', name: 'Todo List' },
  { href: '/photos', name: 'Photos' }
]

export function Header() {
  const { pathname } = useLocation()

  return (
    <div className="w-full flex gap-x-10 bg-red-300">
      {links.map(link => (
        <div
          key={link.href}
          className={`flex justify-center items-center px-10 py-5 ${
            pathname === link.href ? 'bg-green-300' : ''
          }`}
        >
          <Link to={link.href}>{link.name}</Link>
        </div>
      ))}
    </div>
  )
}

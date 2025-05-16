import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import EmptyState from './Components/EmptyState'
import { Delete, DeleteIcon, Edit2Icon, Edit3Icon, LucideDelete, Trash, Trash2, Trash2Icon } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo]=useState("")
  const [todos, setTodos]=useState([])
  const [loading, setLoading] = useState(true)

  const [editIndex, setEditIndex] = useState(null)
  const [editText, setEditText] = useState("")


  const handleAdd=()=>{
    if(todo.trim()){
      setTodos([...todos, {todo: todo.trim(), isCompleted:false}])
      setTodo("")
    }
  }

  const handlechange=(e)=>{
    setTodo(e.target.value)

  }

  const handleToggleCompleted=(index)=>{
    const updatedTodos=[...todos]
    updatedTodos[index].isCompleted=!updatedTodos[index].isCompleted
    setTodos(updatedTodos)
  }

  const handleDelete=(index)=>{
    const newTodos=todos.filter((_,i)=> i!==index)
    setTodos(newTodos)
  }
  
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
    setLoading(false)
  }, [])
  
  useEffect(() => {
    if(!loading){
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos, loading])

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditText(todos[index].todo)
  }
  const handleSaveEdit = () => {
    const updatedTodos = [...todos]
    updatedTodos[editIndex].todo = editText
    setTodos(updatedTodos)
    setEditIndex(null)
    setEditText("")
  }
    
  
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        <Navbar/>
          <div className="w-full">
            <div className="text-black gap-1 bg-gray-100">
              <div className="flex justify-center items-center">
                <input type="text" placeholder='Add your Task' onChange={handlechange} value={todo} className='mt-6 border border-gray-100 rounded px-2 py-1 sm:px-4 sm:py-1.5 focus:outline-none focus:ring-1 focus:ring-black-100' />
                <button onClick={handleAdd} className="mt-6 bg-blue-500 text-black  px-2 py-0.5 sm:px-4 sm:py-1.5 rounded hover:bg-blue-600 transition-all">
                  Add
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100 mb-2 ">
              <div className='flex flex-col h-[65vh] w-[65%]  sm:h-[55vh] sm:w-[65%] mt-6 bg-white text-black '>
                {!loading && todos.length===0 && (
                <div className='flex mx-[15%] my-1 sm:mx-56 sm:my-2'>
                  <EmptyState />
                </div>
                )}
              
                {todos.map((item, index)=>{
                  return <div className="border-b border-yellow-600 ml-[8%] sm:ml-[8%] gap-10 mr-[15%] sm:mr-[15%] flex mt-5">
                          <div className={`todos font-semibold ${item.isCompleted?"line-through":""}`}>
                            {editIndex === index ? (
                              <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="border border-blue-500 rounded px-2"
                              />
                            ) : (
                              item.todo
                            )}
                          </div>
                          <div className="flex gap-4 mx-auto mr-1">
                            {/* <input type="checkbox" className="appearance-none w-6 h-6 border-2 border-blue-600 checked:bg-blue-600 checked:border-transparent font-bold" /> */}
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox" checked={item.isCompleted} onChange={()=>handleToggleCompleted(index)}
                                className="peer appearance-none w-5 h-5 border-2  border-blue-500  rounded-sm bg-blue-500 checked:bg-green-600 checked:border-transparent"
                              />
                                <span className="absolute inset-0 z-10 flex items-center justify-center text-white font-bold pointer-events-none peer-checked:hidden">
                                  X 
                                </span>
                                <svg
                                  className="w-5 h-5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 "
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            
                            </label>

                              {editIndex === index ? (
                                <button onClick={handleSaveEdit} className="text-green-600 font-semibold">Save</button>
                              ) : (
                                <button onClick={() => handleEdit(index)} className="text-blue-600">
                                  <Edit3Icon />
                                </button>
                              )}

                            <button onClick={()=> handleDelete(index)} className='text-blue-600'>
                              <Trash2></Trash2>
                            </button>
                          </div>
                        </div>
                })}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
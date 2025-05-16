import React from 'react'
import { ClipboardList } from 'lucide-react'

const EmptyState = () => {

  return (
    <div>
        <div className="flex flex-col items justify-center items-center mt-20 mb-2 gap-2">
            <ClipboardList className='h-20 w-16 sm:h-24 sm:w-20 text-indigo-300'></ClipboardList>
            <p className='text-md  md:text-md sm:text-xl text-gray-500'>
                Your TODO List is Empty!
            </p>
        </div>
    </div>
  )
}

export default EmptyState

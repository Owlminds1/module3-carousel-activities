import Link from 'next/link'
import React from 'react'

const SecoundScreen = () => {
  return (
    <div className='min-h-[400px] flex justify-center items-center flex-col gap-5'>
      <h4 className='text-3xl text-black '>Teacher to create a word cloud by entering the words</h4>
      <Link target='blank' href="https://wordart.com/create" className='text-lg bg-violet-900 text-white px-10 py-2 rounded-lg hover:bg-violet-950'>Word cloud drag and drop</Link>
    </div>
  )
}

export default SecoundScreen

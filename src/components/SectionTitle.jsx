import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex flex-wrap justify-center'>
        <h1
        className='border-b-4 border-b-[#003566] text-[#003566] font-bold py-2'
        >
        {title}
        </h1>
    </div>
  )
}

export default SectionTitle;

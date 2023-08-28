import React from 'react'

export const ToDo = ({description}) => {

    function handleClick(evt) {
        console.log('Eliminando todo...')
    }

  return (
    <div className="todos">
        <div className="todo">
            <div className='todo'>
                <input type="checkbox" />
                <p>{description}</p>
            </div>
            <img onClick={handleClick} className='todo__image' src={'../../public/delete.png'} alt="Mi Imagen" />
        </div>
    </div>
  )
}

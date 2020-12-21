import React from 'react'
import './paginations.css'

const Paginations = ({ totalPage, requestPostsByPage, currentPage }) => {
  let liArr = []
  for (let i = 0; i < totalPage; i++) {
    liArr.push(i + 1)
  }

  return (
    <nav>
      <ul className="list-pages">
        {
          liArr.map((v, index) => (
            <li className={v === currentPage ? "list-pages-item list-pages-item-active" : "list-pages-item" }  key={index} onClick={() => requestPostsByPage(v)}>{v}</li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Paginations
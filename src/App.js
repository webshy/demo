import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts/Posts.js'
import Paginations from './components/Paginations/paginations.js'
import './App.css';

const App = () => {

  const [posts, setPosts] = useState([])
  const [Loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [perPageNumber, setPerPageNumber] = useState(10)

  useEffect(() => {
    const requetposts = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3001/posts', { params: { currentPage, perPageNumber } })
      console.log(response)
      setPosts(response.data.content)
      setTotalPage(response.data.totalPage)
      setLoading(false)
    }
    requetposts()
  }, [currentPage])

  const requestPostsByPage = (page) => {
    setCurrentPage(page)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   My App
    // </div>
    <div className="container">
      <h1 className="my-project-title">我的文章</h1>
      <Posts loading={Loading} posts={posts} ></Posts>
      <Paginations totalPage={totalPage}
        requestPostsByPage={requestPostsByPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;

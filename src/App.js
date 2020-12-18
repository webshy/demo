import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
      const response = await axios.get('http://localhost:3001/posts',{ currentPage , perPageNumber })
      console.log(response)
      setPosts(response.data.content)
      setTotalPage(response.data.totalPage)
      setLoading(false)
    }
    requetposts()
  },[])


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
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import React, { Component } from 'react'
import Header from './component/header'
import Banner from './component/banner'
import About from './component/about'
import Skills from './component/skills'
import Othersskills from './component/othersskills'
import Project from './component/project'
import Form from './component/form'
import Footer from './component/footer'
import Sidebar from "./component/sidebar";
import './style.scss'



export class App extends Component {


  render() {
    return (
      <div>

        <Router>
          <Header />
          <Sidebar/>
          {/* <home/> */}
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <About />
                <Skills />
                <Othersskills />
                <Project />
                <Form onsubmit={this.submit} />
              </>
            }></Route>
            {/* form */}
            <Route path="/form" element={
              <Form />
            }></Route>
            {/* about */}
            <Route path="/about" element={
              <>
                <About />
                <Skills />
                <Othersskills />
              </>
            }></Route>
            {/* poject */}
            <Route path="/project" element={<Project />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App




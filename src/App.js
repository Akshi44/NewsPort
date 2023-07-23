// rcc
import React ,{useState}from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
const  App =()=> {
  const apikey=process.REACT_APP_NEWS_API; 
  const[progress,setProgress]=useState(0)  
    return (
      <div>
        <Router>
           <Navbar/>
           <LoadingBar
              color='#f11946'
              progress={progress}
              height={3}
          />
          <Routes>
          <Route exact path='/' element={<News setprogress={setProgress} apikey={apikey}  key="general"  countryname="in" category='general'/>}></Route> 
          <Route exact path='/sports'  element={<News setprogress={setProgress} apikey={apikey}  key="sports" countryname="in" category='sports'/> }></Route> 
          <Route exact path='/business' element={ <News setprogress={setProgress} apikey={apikey}   key="business" countryname="in" category='business'/>}></Route> 
          <Route exact path='/technology'  element={ <News setprogress={setProgress} apikey={apikey}  key="technology" countryname="in" category='technology'/>}></Route> 
          <Route exact path='/health'  element={<News setprogress={setProgress} apikey={apikey}  key="health" countryname="in" category='health'/> }></Route> 
          <Route exact path='/science'  element={ <News setprogress={setProgress} apikey={apikey}  key="science" countryname="in" category='science'/>}></Route> 
          <Route exact path='/entertainment'  element={<News setprogress={setProgress} apikey={apikey}  key="entertainment" countryname="in" category='entertainment'/> }></Route> 
          </Routes>
      </Router>
      </div>
    )
  }
export default App
// we have used this key because after clicking the category the responce was not rendering itself, so we assigned it a key, that's why it treat it like a seperate most.
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'



function App() {

  return (
      <main> <h1> Hello</h1> 
    <Navbar name= 'React'/ >
    <Content color='red' image='https://i.imgur.com/szV5sdGs.jpg'/>
    <Footer contact='Contact 123-456-789' address="MA/NH/RI" message='volunteer opportunity'/>

    </main>
  )
}

export default App

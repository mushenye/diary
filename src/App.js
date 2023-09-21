import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Inform from './components/Inform';
import {Routes, Route, Switch} from 'react-router-dom'
import About from './components/About';
import Contactus from './components/Contactus';
import Note from './pages/Note';
import Activity from './pages/Activity';
import Calender from './pages/Calender';
import Todo from './components/Todo';
function App() {
  return (
    <div className="App">
      <Navbar />
      
     <Routes> 
       <Route path='/' element={ <Content />}></Route> 
       
      <Route path='/note' element={<Note/>}> </Route>
    
       <Route path='/activity' element={<Activity/>}></Route>
      <Route path='/calender' element={<Calender/>}></Route> 
      <Route path='/todo' element={<Todo/>}></Route>

     </Routes>    
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ImgSlider from './components/ImgSlider'

function App() {
  return (
    <div className="App">
    <Router>
     <Route exact path ='/'>
     <ImgSlider />
     </Route>
     </Router>
    </div>
  );
};


export default App;

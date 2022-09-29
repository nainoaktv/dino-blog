import logo from './logo.svg';
import './App.css';
import Dino from './Dino';

const dino = {
  title: 'Dinosaurs are Extinct',
  author: 'Spike',
  body: 'The P is silent',
  comments: ["First comment", "Second comment", "Third comment", "Fourth comment"]
}

function App() {
  return (
    <div>
      <Dino dino={dino}/>
    </div>
  )
}

export default App;

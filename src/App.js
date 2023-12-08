import './App.css';
import API from './component/Api';
import Comment from './component/Comment';
import Image from './component/Image';

function App() {
  return (
    <div className="App">
     <Image />
     <Comment />
      <API />
    </div>
  );
}

export default App;

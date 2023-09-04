import {FC} from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewPost from './components/NewPost/NewPost';

const App: FC = () => {


  return (
    <div className="app">
      <Navbar />
      <NewPost />
    </div>
  );
};

export default App;

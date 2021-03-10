import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';
import './App.css';

const App = props => {
  return (
    <div className="redux-app">
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

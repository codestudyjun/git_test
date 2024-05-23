import React from 'react';
import "./App.css";
import Box from './Box';

// App 컴포넌트 정의
function App() {
  return (
    <div className="App">
      <div className="box-container">
        <Box text="Box 1" />
        <Box text="Box 2" />
        <Box text="Box 3" />
      </div>
    </div>
  );
}

export default App;
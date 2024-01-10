import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StoryList from './components/StoryList';
import CommentsPage from './components/CommentPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="title">Hacker News</h1>
        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/comments/:id" element={<CommentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
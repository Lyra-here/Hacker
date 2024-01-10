import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Story from './Story';

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((response) => {
        const storyIds = response.data.slice(0, 10);
        const storyPromises = storyIds.map((storyId) =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        );
        return Promise.all(storyPromises);
      })
      .then((storyResponses) => {
        const storyData = storyResponses.map((response) => response.data);
        setStories(storyData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
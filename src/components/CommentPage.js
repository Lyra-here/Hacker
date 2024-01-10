import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const CommentsPage = ({ storyId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
      const story = await response.json();

      if (story) {
        const commentsSlice = story.kids.slice(0, 10); // 前十个评论
        const commentsPromises = commentsSlice.map(async (commentId) => {
          const commentResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);
          return commentResponse.json();
        });

        const commentsData = await Promise.all(commentsPromises);
        setComments(commentsData);
      }
    };

    fetchComments();
  }, [storyId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsPage;
import React from 'react';

const Comment = ({ comment }) => {
  const { by, time } = comment;
  const formattedTime = new Date(time * 1000).toLocaleString();

  return (
    <div>
      <p>Author: {by}</p>
      <p>Time: {formattedTime}</p>
    </div>
  );
};

export default Comment;
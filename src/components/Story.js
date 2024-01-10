import { Link } from 'react-router-dom';

const Story = ({ story }) => {
  const { id, title, url, by, descendants } = story;

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {by}</p>
      <p>Comments: {descendants}</p>
      <p>
        <Link to={`/comments/${id}`}>Read Comments</Link>
      </p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </p>
    </div>
  );
};

export default Story;
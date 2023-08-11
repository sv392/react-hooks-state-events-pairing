import React, { useState } from 'react';

const CommentSection = ({ comments }) => {
  const [showComments, setShowComments] = useState(true);
  const [upvotes, setUpvotes] = useState(comments.upvotes); // Update this line
  const [downvotes, setDownvotes] = useState(comments.downvotes); // Update this line

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="comment-section">
      <div className="buttons">
        <button onClick={handleUpvote}>👍</button>
        <span>{upvotes}</span>
        <button onClick={handleDownvote}>👎</button>
        <span>{downvotes}</span>
        <button onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
      {showComments && (
        <div className="comments">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.user}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentSection;

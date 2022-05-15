import React from "react";

const Book = ({ name, author, image }) => {
  return (
    <div className="book">
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <h4>{author}</h4>
    </div>
  );
};

export default Book;

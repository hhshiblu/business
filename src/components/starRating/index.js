import { useState } from "react";

const StarRating = (props) => {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);

  const handleClick = (i) => {
    setRating(i + 1);
  };

  return (
    <>
      {[...Array(limit)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "star rated" : "star"}
          onClick={() => handleClick(i)}
        >
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </>
  );
};

export default StarRating;

import "./Review.css";
import { VscCircleFilled } from "react-icons/vsc";
import { ArrayForReviews } from "./ArrayForReview";
import { useState } from "react";
import { Box } from "@mui/system";

const Review = () => {
  const [comment, setComment] = useState(ArrayForReviews[0].comments);
  const [author, setAuthor] = useState(ArrayForReviews[0].authors);
  const [active, setActive] = useState(ArrayForReviews[0].id);

  const ReviewHandler = (comment: any, author: any, active: any) => {
    setComment(comment);
    setAuthor(author);
    setActive(active);
  };

  return (
    <Box className="review-container">
      <Box className="review-tag">
        <Box>
          <Box
            component={"img"}
            style={{ marginLeft: "100px", marginTop: "60px" }}
            src="./assets/images/ReviewIcon.png"
          />
        </Box>
        <Box className="review-text-container">
          <Box
            component={"p"}
            style={{ fontFamily: "Jura" }}
            className="review-texts"
          >
            {comment}
          </Box>
        </Box>
      </Box>
      <Box className="review-author">
        <Box
          component={"p"}
          style={{ fontFamily: "Jura" }}
        >{`- ${author}`}</Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginRight: "300px",
        }}
      >
        <Box component={"button"} className="review-button">
          Leave us a Review
        </Box>
        {ArrayForReviews.map((bubbles, index) => {
          return (
            <VscCircleFilled
              style={{
                ...(index === 0 && {
                  marginLeft: "110px",
                }),
                ...(bubbles.id === active && {
                  color: "black",
                  transition: "1.5s",
                }),
              }}
              key={bubbles.id}
              onClick={() =>
                ReviewHandler(bubbles.comments, bubbles.authors, bubbles.id)
              }
              className="review-bubbles"
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Review;

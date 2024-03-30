import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CommentBox from "./CommentBox";

const headingStyle = {
  pb: 4,
  fontWeight: "bold",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "30px",
    background: "red",
    height: "5px",
    mt: 1.5,
  },
  textTransform: "uppercase",
};

function CommentsContainer({ comments }) {

  const [commentCount, setCommentCount] = useState(comments?.length || 0);

  return (
    <>
      <div className="">
        <Typography sx={headingStyle}>COMMENTS</Typography>
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography sx={{ color: "rbga(225,225,225,0.8)" }}>
            {commentCount} Comments
          </Typography>
          {comments && comments.length && comments?.map((comment, index) => (
            <Box key={index}>
              <CommentBox cmnt={comment} />
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
}

export default CommentsContainer;

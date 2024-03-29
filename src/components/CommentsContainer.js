import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
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

function CommentsContaier() {
  function handleEditComment() {}
  const [comments, setComments] = useState([
    {
      userId: 1,
      userName: "Loren Ipsum",
      updatedAt: "2021-10-10",
      text: "The show is intentionally evasive in regard to Springfield's location. Springfileds geography, and that of its...",
    },
    {
      userId: 2,
      userName: "John Doe",
      updatedAt: "2022-10-10",
      text: "The show is intentionally evasive in regard to Springfield's location. Springfileds geography, and that of its...",
    },
    {
      userId: 3,
      userName: "Jane Doe",
      updatedAt: "2023-10-10",
      text: "The show is intentionally evasive in regard to Springfield's location. Springfileds geography, and that of its...",
    },
    {
      userId: 4,
      userName: "John Doe",
      updatedAt: "2024-10-10",
      text: "The show is intentionally evasive in regard to Springfield's location. Springfileds geography, and that of its...",
    },
    {
      userId: 5,
      userName: "Jane Doe",
      updatedAt: "2025-10-10",
      text: "The show is intentionally evasive in regard to Springfield's location. Springfileds geography, and that of its...",
    },
  ]);
  const [commentCount, setCommentCount] = useState(comments?.length || 0);
  useEffect(() => {
    setCommentCount(comments?.length);
  }, [comments]);
  return (
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
        {comments.map((comment, index) => (
          <Box key={index}>
            <CommentBox cmnt={comment} />
          </Box>
        ))}
      </Box>
      <Typography sx={{ cursor: "pointer" }}>Read More...</Typography>
    </div>
  );
}

export default CommentsContaier;

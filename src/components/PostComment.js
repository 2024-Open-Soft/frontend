import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { postComment } from "../redux/services/Comment";
import { useDispatch } from "react-redux";


function PostComment({ data: movieId, handlePosted }) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  
  const handlePost = async (e) => {
    e.preventDefault();
    const payload = {
      comment: comment,
      movieId: movieId,
    }
    const res = await postComment(dispatch, payload);

    handlePosted();
    setComment("");
  };

  return (
    <div className="">
      <form action="">
        <h3 className=" after:content-[''] after:my-4 after:block after:absolute after:w-8 after:h-1 after:bg-[red] after:text-[#c1272d]">
          POST COMMENT
        </h3>
        <TextField
          className="my-8"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": {
                borderColor: "#fff",
              },
              "&:hover fieldset": {
                borderWidth: "1px",
                borderColor: "#1976D2",
              },
              "&.Mui-focused fieldset": {
                borderWidth: "1px",
                borderColor: "default",
              },
            },
          }}
          id="outlined-multiline-static"
          label=""
          multiline
          rows={3}
          defaultValue=""
          placeholder="Post a comment"
          required
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <Button
          type="submit"
          className="py-2 block w-44 rounded-[2rem]"
          sx={{
            backgroundColor: "#e60000",
          }}
          variant="contained"
          onClick={handlePost}
        >
          POST
        </Button>
      </form>
    </div>
  );
}

export default PostComment;

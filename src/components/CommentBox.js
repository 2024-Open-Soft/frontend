import React, { useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const inputStyle = {
  border: "3px solid #fff",
  backgroundColor: "transparent",
  ":focus": { outline: "none" },
  outline: "none",
};

const CommentBox = ({ cmnt }) => {
  const [commentInfo, setCommentInfo] = useState(cmnt);
  const [inputField, setInputField] = useState(commentInfo?.text);
  const [isEditing, setIsEditing] = useState(false);

  const commentBoxRef = useRef(null);

  const handleEdit = (value) => {
    setIsEditing(value);
  };

  //   const [commentAuthor, setCommentAuthor] = useState(true);
  const handleEditComment = async () => {
    setCommentInfo({ ...commentInfo, text: inputField });
    setIsEditing(false);
    try {
      //write put request to update comment in axios
      const response = await axios.put("/movie/comments", {
        commentId: commentInfo.userId,
        text: commentInfo.text,
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        commentBoxRef.current &&
        !commentBoxRef.current.contains(event.target)
      ) {
        handleEdit(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [commentBoxRef]);

  return (
    <div>
      <div className="w-full font-[Arial,_Helvetica,_sans-serif] p-[16px] rounded-[20px]  flex flex-row text-[rgb(223,_223,_223)] [transition:all_0.3s] hover:bg-[rgba(255,_255,_255,_0.15)] hover:backdrop-filter  group parent relative hover:opacity-100 hover:cursor-pointer">
        <div className="flex justify-center mr-[20px]">
          <p className="w-[25px] h-[25px] flex items-center justify-center text-[32px] font-bold bg-[rgba(255,_255,_255,_0.2)] p-[25px] rounded-[50%]">
            {commentInfo?.userName[0]}
          </p>
        </div>
        <div className="w-full">
          <div className="text-[17px] font-semibold mb-[15px]">
            {commentInfo?.userName}
          </div>
          <div className="mb-[15px] w-full text-justify text-[15px]">
            {isEditing ? (
              <input
                className="text-justify bg-transparent border-[solid] border-[1px] border-[rgb(223,223,223)] rounded-[15px] text-[15px] text-[rgb(223,_223,_223)] p-[10px] w-full focus:outline-[none]"
                style={inputStyle}
                type="text"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
              />
            ) : (
              commentInfo?.text
            )}
          </div>
          <div className="italic text-[13px]">2 days ago</div>
        </div>
        {!isEditing ? (
          <>
            {commentInfo.userId === "66031e36ff219b0ccda9fd68" && <div
              ref={commentBoxRef}
              className="flex items-center justify-center absolute top-[10px] right-[15px] p-[5px] bg-[rgba(255,_255,_255,_0.2)] rounded-[50%] [transition:all_0.3s] opacity-0 group-hover:opacity-100 "
              onClick={() => handleEdit(true)}>
              <EditIcon />
            </div>}</>
        ) : (
          <>
            <div
              className="flex items-center justify-center absolute top-[10px] right-[15px] p-[5px] bg-[rgba(255,_255,_255,_0.2)] rounded-[50%] [transition:all_0.3s] opacity-1 "
              onClick={handleEditComment}
            >
              <DoneIcon />
            </div>
            <div
              className="flex items-center justify-center absolute top-[10px] right-[60px] p-[5px] bg-[rgba(255,_255,_255,_0.2)] rounded-[50%] [transition:all_0.3s] opacity-1 "
              onClick={() => {
                handleEdit(false)
                setInputField(commentInfo.text)
              }}
            >
              <CloseIcon />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
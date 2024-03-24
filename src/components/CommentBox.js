import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./comment.css";

const CommentBox = () => {
	const [comment, setComment] = useState(
		"The show is intentionally evasive in regard to Springfield's location. Springfileds geography, and that of its..."
	);
	const [inputField, setInputField] = useState(comment);
	const [isEditing, setIsEditing] = useState(false);
	const handleEdit = () => {
		setIsEditing(true);
	};
	const [commentAuthor, setCommentAuthor] = useState(true);

	return (
		<div>
			<div className="font-[Arial,_Helvetica,_sans-serif] p-[16px] rounded-[20px] w-3/5 flex flex-row text-[rgb(223,_223,_223)] [transition:all_0.3s] hover:bg-[rgba(255,_255,_255,_0.15)] hover:backdrop-filter backdrop-blur-[10px] group parent relative hover:opacity-100 hover:cursor-pointer">
				<div className="flex justify-center mr-[20px]">
					<p className="w-[25px] h-[25px] flex items-center justify-center text-[32px] font-bold bg-[rgba(255,_255,_255,_0.2)] p-[25px] rounded-[50%]">
						U
					</p>
				</div>
				<div className="w-full">
					<div className="text-[17px] font-semibold mb-[15px]">User Name</div>
					<div className="mb-[15px] w-full text-justify text-[15px]">
						{isEditing ? (
							<input
								className="text-justify bg-transparent border-[solid] border-[1px] border-[rgb(223,223,223)] rounded-[15px] text-[15px] text-[rgb(223,_223,_223)] p-[10px] w-full focus:outline-[none]"
								type="text"
								value={inputField}
								onChange={(e) => setInputField(e.target.value)}
							/>
						) : (
							comment
						)}
					</div>
					<div className="italic text-[13px]">2 days ago</div>
				</div>
				{commentAuthor ? (
					<div
						className="flex items-center justify-center absolute top-[10px] right-[15px] p-[5px] bg-[rgba(255,_255,_255,_0.2)] rounded-[50%] [transition:all_0.3s] opacity-1 "
						onClick={handleEdit}
					>
						<EditIcon />
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};

export default CommentBox;

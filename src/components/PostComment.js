import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

function handlePost() {

}


function PostComment() {
  return (
    <div className="">
      <form action="">
        <h3 className=" after:content-[''] after:my-4 after:block after:absolute after:w-8 after:h-1 after:bg-[red] after:text-[#c1272d]">POST COMMENT</h3>
        <TextField className="my-8" sx={{ width: "100%" }} id="outlined-multiline-static" label="" multiline rows={3} defaultValue="" placeholder="Post a comment" required />
        <Button type="Submit" className="py-2 block w-44 rounded-[2rem]" sx={[{ backgroundColor: "#BB4D4D", "&:hover": { backgroundColor: "#e60000" } }]} variant="contained">POST</Button>
      </form>
    </div>
  )
}

export default PostComment;
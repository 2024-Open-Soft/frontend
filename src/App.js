import "./index.css";
import { Counter } from "./features/counter/counter";
import Button from "@mui/material/Button";
import CommentBox from "./components/CommentBox";

function App() {
	return (
		<>
			<div className="App">
				<CommentBox />
			</div>
		</>
	);
}

export default App;

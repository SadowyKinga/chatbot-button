

import './App.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function App() {
  return (
    <div>
      <button className="hidden-button">
      <div className="click-chat" style={{ position: "relative" }}>
        <ChatBubbleOutlineIcon />
        <div className="dots-cont">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
      </div>
    </button>
    </div >
   
  );
}

export default App;












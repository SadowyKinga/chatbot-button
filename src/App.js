import './App.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function App() {
  return (
    <div>
      <div className="click-chat" >
        <ChatBubbleOutlineIcon />
        <div className="dots-cont">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
      </div>
    </div >
   
  );
}

export default App;

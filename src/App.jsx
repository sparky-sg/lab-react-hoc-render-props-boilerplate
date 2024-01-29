import './App.css';
import Common from './Render/Common';
import LIkeImage from './Render/LIkeImage';
import LikePost from './Render/LikePost';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <Common render={(arg1,arg2)=> <LIkeImage functionality={arg1} data={arg2}/> }/>
        <Common render={(arg1,arg2)=> <LikePost  functionality={arg1} data={arg2}/> }/>

      </div>
    </div>
  );
}

export default App;

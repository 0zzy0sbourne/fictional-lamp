import { useState, useRef, useEffect } from 'react'
// import '../Styles/audioplayer.css'; 
// import "../Styles/thumb.css";
// import { FaPlay } from "react-icons/fa"; 
// import { FaPause } from "react-icons/fa"; 
//  import Flags from 'country-flag-icons/react/3x2'; 



function AudioPlayer({ percentage = 0, onChange }) {
    const  [isPlaying, setIsPlaying] = useState(false); 
    // false means we do not want it to play automatically 

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying); 
    }
  return (
    <div className = "audioPlayer">
       <div class="flags">
      <Flags.TR title="Turkish" className = "h-4 ml-5 rounded-full cursor-pointer"/>
      <Flags.US title="English" className = "h-4 ml-5 rounded-full cursor-pointer"/>
      <Flags.DE title="German" className = "h-4 ml-5 rounded-full cursor-pointer"/>
      <Flags.FR title="French" className = "h-4 ml-5 rounded-full cursor-pointer"/>
      <Flags.RU title="Russian" className = "h-4 ml-5 rounded-full cursor-pointer"/>
      <Flags.IT title="Italian" className = "h-4 ml-5 rounded-full cursor-pointer"/>
     </div>       


      <div className = "slider">
         <button  className ="playButton"onClick = {togglePlayPause}>
        {isPlaying ? <FaPause/> : <FaPlay/>}
      </button>

      {/* current time */}
      <div className = "currentTime">0.00</div>
          

      {/* progress bar */} 
      <div>
        
        <input type='range'/>
    
      </div>
      
      {/*duration*/}
      <div className = "duration">2:49</div >



      </div>
     
    
     
    </div>
    
  )
}

export default AudioPlayer

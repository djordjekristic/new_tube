import { useParams } from "react-router-dom"
import VIDEOS from './../videos.json'

 

 const Video = () =>{
    const {id} = useParams()
    let videoFound = null;

    VIDEOS.forEach( video =>{
        if(video.id == id){
            videoFound = video
        }
    })

    if(videoFound == null){
        return <h3>This video does not exist</h3>
    }


    return(
        <>
          <h3>{videoFound.title}</h3>
          <p>{videoFound.url}</p>
          
        </>
    )
 }

 export default Video
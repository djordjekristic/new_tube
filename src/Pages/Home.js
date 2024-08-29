import { useState } from "react"
import AllVideos from "../Components/AllVideos"
import SearchBar from "../Components/SearchBar"
import VIDEOS from "./../videos.json"


const Home = () =>{

    let [videos,setVideos] = useState(VIDEOS)
    let[filteredVideos,setFilteredVideos] = useState(VIDEOS)

    const handleSearchVideo = (result) =>{
        setFilteredVideos(result)
    }
    console.log(filteredVideos)
    return(
        <>
        <SearchBar videos={videos} onSearchVideos = {handleSearchVideo}/>
        <AllVideos videos = {filteredVideos}/>
        </>
    )
}

export default Home
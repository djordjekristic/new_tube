import VIDEOS from "./../videos.json"

const SearchBar = ({videos, onSearchVideos}) =>{
    
    return(
        <form>
            <label>
                Search:
                <input type="text" name="Search" onInput={e => SearchVideoByName(e.currentTarget.value,videos,onSearchVideos)}/>
            </label>
        </form>
    )
   
}

const SearchVideoByName = (name,videos,onSearchVideos) =>{

    let foundVideos = [];
   
    videos.forEach(video =>{
        name = name.toLowerCase()
        video.title = video.title.toLocaleLowerCase()

        if( video.title.includes(name)){
           foundVideos.push(video)

        }


    })
    onSearchVideos(foundVideos);
}

export default SearchBar
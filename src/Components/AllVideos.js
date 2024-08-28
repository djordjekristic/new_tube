const VIDEOS = [
    {
      id:1,
      title: "how to learn react",
      url: 'https://www.youtube.com/watch?v=6GQRb4fGvtk',
      cover:'https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxxEfavbxbAns6HTvgSrFA1b0Rrw'
    },
    {
      id:2,
      title: "how to learn CSS",
      url: 'https://www.youtube.com/watch?v=1PnVor36_40',
      cover:'https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4tJ7kbGq-1Vv0pz8nIkiwF5xyQg'
    }
  
  ]

const AllVideos = () =>{
    return(
        <>
    {VIDEOS.map( video =>{
      return <a href={video.url} target="_blank">
        <h3>{video.title}</h3>
        <img src={video.cover}/>
      </a>
    })}
        </>
    )

}
 export default AllVideos
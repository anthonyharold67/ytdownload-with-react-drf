import React from 'react'

const YoutubeVideo = ({video}) => {
    const {info,sources}=video
    if(!video) return <div></div>
  return (
    <div className="result">
        <div className="video-item">
            <img src={info.thumbnail} alt={info.title}/>
            <div className="video-details">
                <div className="title">{info.title}</div>
                <div className="author"><span>Author:</span>{info.author} </div>
                <div className="length"><span>Time:</span> {info.length}</div>
                <div className="view"><span>Views</span> {info.views}</div>
            </div>
        </div>
        <ul>
            {sources.map((source,index)=>(
                <li key={index}>
                <div className="quality">
                    <span>Quality</span>
                    {source.quality}
                </div>
                <div className="size">
                    <span>Size</span>
                    {source.size}
                </div>
                <a href={source.url+"&title=" + info.title} target="_blank" rel='noreferrer' download={info.title}>Download</a>
            </li>
                ))
            }
            
        </ul>

    </div>
  )
}

export default YoutubeVideo
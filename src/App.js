
import { useState } from 'react';
import './App.css';
import YoutubeVideo from './YoutubeVideo';

function App() {
  const [url,setUrl]=useState("")
  const [video,setVideo]=useState(false)
  const [loading,setLoading] = useState()
  const [error,setError] = useState()

  const getVideo=()=>{
    setLoading(false)
    console.log(url)
    if(url){
      
      fetch(`https://pytube-rest-2.onrender.com/api/youtube?url=${url}`)
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        if(data.info){
        setVideo(data)
        setError(false)
        }
        else{
          throw new Error("")
        }
      })
      .catch(err=> setError(true))
    }
    
    console.log(video)
  }
  console.log(error)
  return (
    <div className="App">
      <form action="" method="get" onSubmit={e=> e.preventDefault()}>
        <h3>Youtube Downloader</h3>
        <div className="search">
            <input type="text" id="url" onChange={e=>setUrl(e.target.value)} placeholder="Youtube URL" required/>
            <button type="submit" onClick={getVideo}>Download</button>
        </div>
    </form>
    {loading===false ? <div className="loading">Loading...</div> : error ? <div className="loading">Bir şeyler ters gitti. Başka bir video deneyiniz</div> : <YoutubeVideo video={video}/>}
    </div>
  );
}

export default App;

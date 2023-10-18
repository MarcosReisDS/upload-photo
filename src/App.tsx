import { FC, useState } from 'react';
import './App.scss';

interface IApp { }
const App: FC<IApp> = () => {

  const [image, setImage] = useState<string>("")

  const uploadImage = (e: any) => {
    const images = URL.createObjectURL(e.target.files[0])
    setImage(images)
  }

  return (
    <div className="App">
      <div>
        <h2>Upload Photo</h2>
        <img src={image} />
        <form method='post'>
          <input type="file" name="file" id="file" onChange={(e) => uploadImage(e)} />
          <label htmlFor="file" >Select a file...</label>
        </form>
      </div>
    </div>
  )
}

export default App;

import { FC, useState } from 'react';
import './App.scss';

interface IApp { }
const App: FC<IApp> = () => {

  const [nada, setNada] = useState<any>()

const image = (e: any) => {
  setNada(URL.createObjectURL(e.target.files[0]))
}

  return (
    <div className="App">
      <div>
        <h2>Upload Photo</h2>
        <img src={nada} />
        <form method='post'>
          <input type="file" name="file" id="file" onChange={(e) => image(e) } />
          <label htmlFor="file" >Select a file...</label>
        </form>
      </div>
    </div>
  )
}

export default App;

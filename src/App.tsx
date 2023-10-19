import { FC, useState } from 'react';
import './App.scss';

interface IApp { }
const App: FC<IApp> = () => {

  const [image, setImage] = useState<string>("")
  const [validate, setValidate] = useState<string>("")
  const [message, setMassage] = useState<string>("")

  const uploadImage = (e: any) => {
    const format = ["png", "jpg", "jpeg", "gif"]

    try {
      const file = e.target.files[0]
      const filterFile = format.filter((item) => item == file.name.toLowerCase().split(".")[1])

      if (!filterFile[0]) {
        setValidate("error")
        setMassage("Insirar uma imagem válida")
      } else {
        const images = URL.createObjectURL(file)

        setImage(images)
        setValidate("sucess")
        setMassage("Imagem enviada com sucesso!")
      }

      setTimeout(() => {
        setValidate("")
      }, 3000)
    } catch (error) {
      setValidate("error")
      setMassage("Você não enviou nenhuma imagem")

      setTimeout(() => {
        setValidate("")
      }, 3000)
    }
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
      <div className={`message ${validate}`}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default App;

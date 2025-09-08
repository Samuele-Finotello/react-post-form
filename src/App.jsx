import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts').then((resp) => {
      setPosts(resp.data)
      console.log(resp.data)
    })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="fs-5">
              <input type="text" name="author" className="form-control fs-4" placeholder="Inserisci autore" />
              <input type="text" name="title" className="form-control fs-4" placeholder="Inserisci titolo" />
              <input type="text" name="body" className="form-control fs-4" placeholder="Inserisci testo del post" />
            </div>
            <div>
              <label className="fs-4">Vuoi pubblicarlo?</label>
            </div>
            <div className="form-check fs-4">
              <input type="radio" name="radioDefault" />
              <label className="ms-2">
                Si
              </label>
            </div>
            <div className="form-check fs-4">
              <input type="radio" name="radioDefault" />
              <label className="ms-2">
                No
              </label>
            </div>
          </form>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={() => { alert('Post caricato') }}>Carica post</button>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    update: false
  })

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value }
    setFormData(newFormData)
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="fs-5">
              <input type="text" name="author" className="form-control fs-4 mt-3" placeholder="Inserisci autore" value={formData.author} onChange={handleChange} />
              <input type="text" name="title" className="form-control fs-4 mt-3" placeholder="Inserisci titolo" value={formData.title} onChange={handleChange} />
              <input type="text" name="body" className="form-control fs-4 mt-3" placeholder="Inserisci descrizione" value={formData.body} onChange={handleChange} />
            </div>
            <div className="mt-3">
              <label className="fs-4">Vuoi pubblicarlo?</label>
            </div>
            <div className="form-check my-3 fs-5">
              <input className="form-check-input" type="checkbox" name="update" value={formData.update} onChange={handleChange} />
              <label className="form-check-label">
                Pubblica
              </label>
            </div>
          </form>
        </div>
        <div className="card mt-5 fs-5">
          <p>Autore: {formData.author}</p>
          <p>Titolo: {formData.title}</p>
          <p>Descrizione: {formData.body}</p>
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-primary fs-5" onClick={() => { formData.update === true ? alert('Post caricato') : alert('Bozza salvata') }}>Carica post</button>
        </div>
      </div>
    </div>
  )
}

export default App

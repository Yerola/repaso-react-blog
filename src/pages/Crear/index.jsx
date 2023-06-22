import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const INITIAL_STATE = {
  title: '',
  author: '',
  content: ''
};

export const Crear = ({ setPosts }) => {
  const [post, setPost] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setPost({
      ...post,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setPosts((prev) => [...prev, post]);
    setPost(INITIAL_STATE)
    navigate('/')
  }

  return (
    <main>
      <h2>Crear entrada de blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-title">Título</label>
          <input type="text" id="input-title" onChange={handleChange} value={post.title} name="title" />
        </div>
    
        <div>
          <label htmlFor="input-author">Autor</label>
          <input type="text" id="input-author" onChange={handleChange} value={post.author} name="author" />
        </div>

        <div>
          <label htmlFor="textarea">Contenido</label>
          <textarea id="textarea" onChange={handleChange} value={post.content} name="content" />
        </div>

        <button>Crear</button>
      </form>
    </main>
  )
}

export const Inicio = ({ posts, setPosts }) => {
  const deletePost = (title) => {
    setPosts(posts.filter(post => post.title !== title))
  };

  return (
    <main>
      {posts.length === 0 ? (
        <p>No hay entradas publicadas todavía</p>
        ) : (
        posts.map((post) => (
          <article key={post.title}>
            <h2>{post.title}</h2>
            <button onClick={() => deletePost(post.title)}>Eliminar entrada</button>
            <p>{post.author}</p>
            {
              post.content
                .split('\n')
                .filter((text) => !!text)
                .map((text, i) => <p key={i}>{text}</p>)
            }
          </article>
        )
      ))}
    </main>
  )
}

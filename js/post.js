const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id === postId);

    if (post) {
      // Título, data, categoria
      document.getElementById("post-title").textContent = post.title;
      document.getElementById("post-date").textContent = post.date;
      document.getElementById("post-category").textContent = post.category;

      // Imagem principal
      const img = document.getElementById("post-image");
      if (post.image) {
        img.src = post.image;
        img.alt = post.title;
      } else {
        img.style.display = "none"; // Se não tiver imagem
      }

      // Conteúdo
      document.getElementById("post-content").innerHTML = post.content;
    } else {
      document.body.innerHTML = "<h1>Post não encontrado</h1>";
    }
  })
  .catch(err => console.error("Erro ao carregar post:", err));

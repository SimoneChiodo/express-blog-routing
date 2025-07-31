# Express Routing

## Descrizione

Questo esercizio consiste nella realizzazione di un'applicazione backend usando Express.js che gestisce un piccolo blog.

### Componenti principali:

- **Server principale (`app.js`)**
  - Configura il server Express sulla porta 3000.
  - Serve i file statici dalla cartella `public`.
  - Importa e utilizza due router: `pagesRouter` e `postsRouter`.

- **Router `pages` (`router/pages.js`)**
  - Gestisce le rotte generali:
    - `/` → pagina home (testo semplice).
    - `/bacheca` → restituisce in JSON un sommario dei post (totale + lista).

- **Router `posts` (`router/posts.js`)**
  - Gestisce le operazioni CRUD sui post del blog:
    - `GET /posts` → mostra tutti i post.
    - `GET /posts/:id` → mostra il post con ID specificato (controllo validità ID).
    - `POST /posts` → (placeholder) crea un nuovo post.
    - `PUT /posts/:id` → (placeholder) modifica interamente un post.
    - `PATCH /posts/:id` → (placeholder) modifica parzialmente un post.
    - `DELETE /posts/:id` → (placeholder) elimina un post.

- **Database simulato (`db/posts.js`)**
  - Array di oggetti `posts` che rappresentano i vari post con proprietà `titolo`, `contenuto`, `immagine` e `tag`.
  - Export dell'array per poterlo importare nei router.

---

### Esempio d’uso

1. Lancia il server con `node app.js`.
2. Visita la root `/` per vedere la pagina home testuale.
3. Visita `/bacheca` per ottenere la lista dei post in formato JSON.
4. Utilizza `/posts` per le operazioni CRUD, ad esempio:
   - `GET /posts` per vedere tutti i post.
   - `GET /posts/1` per vedere il primo post (con controllo su ID valido).
   - I metodi `POST`, `PUT`, `PATCH`, `DELETE` sono placeholder che stampano messaggi.

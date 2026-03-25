function App() {
  return (
    <div style={{padding:"40px", fontFamily:"Arial"}}>
      <h1>Plataforma Web Educativa</h1>

      <p>
        Proyecto desarrollado con React como parte del Sprint 1 utilizando metodología Scrum.
      </p>

      <h2>Videos educativos</h2>
      <ul>
        <li>Introducción a Matemáticas</li>
        <li>Conceptos básicos de Biología</li>
        <li>Gramática básica</li>
      </ul>

      <h2>Artículos educativos en PDF</h2>
      <ul>
        <li>Guía de fracciones</li>
        <li>Sistema solar</li>
        <li>Comprensión lectora</li>
      </ul>

      <h2>Ejercicios interactivos</h2>
      <p>En próximos Sprints se integrarán ejercicios interactivos.</p>
    <section>
  <h2>Ejercicios interactivos</h2>
  <p>Responde preguntas para evaluar tu aprendizaje.</p>
  <button>Comenzar ejercicio</button>
</section>

<section>
  <h2>Registro de usuario</h2>
  <form>
    <input type="text" placeholder="Nombre de usuario" />
    <input type="email" placeholder="Correo electrónico" />
    <input type="password" placeholder="Contraseña" />
    <button type="submit">Registrarse</button>
  </form>
</section>

<section>
  <h2>Iniciar sesión</h2>
  <form>
    <input type="email" placeholder="Correo electrónico" />
    <input type="password" placeholder="Contraseña" />
    <button type="submit">Entrar</button>
  </form>
</section>
    </div>
  )
}

export default App
import { useState } from "react";

function App() {
  const [nivelSeleccionado, setNivelSeleccionado] = useState("Todos");

  const materiales = [
    { id: 1, titulo: "Introducción a Matemáticas", tipo: "Video", nivel: "Primaria" },
    { id: 2, titulo: "Conceptos básicos de Biología", tipo: "Video", nivel: "Secundaria" },
    { id: 3, titulo: "Gramática básica", tipo: "Video", nivel: "Primaria" },
    { id: 4, titulo: "Guía de fracciones", tipo: "PDF", nivel: "Primaria" },
    { id: 5, titulo: "Sistema solar", tipo: "PDF", nivel: "Secundaria" },
    { id: 6, titulo: "Comprensión lectora", tipo: "PDF", nivel: "Preparatoria" },
  ];

  const materialesFiltrados =
    nivelSeleccionado === "Todos"
      ? materiales
      : materiales.filter((material) => material.nivel === nivelSeleccionado);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", backgroundColor: "#f4f6f8" }}>
      <h1 style={{ color: "#1f3c88" }}>Plataforma Web Educativa</h1>

      <p>
        Proyecto desarrollado con React como parte del desarrollo por Sprint utilizando
        metodología Scrum.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2>Filtro por nivel educativo</h2>
        <p>Selecciona un nivel para visualizar el contenido educativo disponible.</p>

        <select
          value={nivelSeleccionado}
          onChange={(e) => setNivelSeleccionado(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <option value="Todos">Todos</option>
          <option value="Primaria">Primaria</option>
          <option value="Secundaria">Secundaria</option>
          <option value="Preparatoria">Preparatoria</option>
        </select>

        <div style={{ display: "grid", gap: "15px" }}>
          {materialesFiltrados.map((material) => (
            <div
              key={material.id}
              style={{
                backgroundColor: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{material.titulo}</h3>
              <p><strong>Tipo:</strong> {material.tipo}</p>
              <p><strong>Nivel:</strong> {material.nivel}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Ejercicios interactivos</h2>
        <p>Responde preguntas para evaluar tu aprendizaje.</p>
        <button
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Comenzar ejercicio
        </button>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Registro de usuario</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
          <input type="text" placeholder="Nombre de usuario" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Registrarse</button>
        </form>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Iniciar sesión</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
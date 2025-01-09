let libros = [
  {
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    descripcion:
      "Un relato épico y mágico sobre la familia Buendía en el pueblo ficticio de Macondo, combinando lo real con lo fantástico.",
  },
  {
    nombre: "1984",
    autor: "George Orwell",
    descripcion:
      "Una distopía que describe un mundo totalitario, donde un régimen opresivo controla el pensamiento y la vida de los ciudadanos.",
  },
  {
    nombre: "Orgullo y prejuicio",
    autor: "Jane Austen",
    descripcion:
      "Una novela romántica que sigue las peripecias de Elizabeth Bennet y su relación con el orgulloso pero apuesto Sr. Darcy.",
  },
  {
    nombre: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    descripcion:
      "Un retrato de la alta sociedad de los años 20 en Estados Unidos, centrado en la vida de Jay Gatsby y su obsesión por Daisy Buchanan.",
  },
  {
    nombre: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    descripcion:
      "Las aventuras del caballero loco Don Quijote y su fiel escudero Sancho Panza, quienes enfrentan el mundo con ideales de justicia y valentía.",
  },
];

// Función de búsqueda
function search() {
    const busqueda = document.getElementById('box').value.toLowerCase(); //Extraer texto ingresado por el usuario
    const resultado = document.getElementById('results'); //Definir contenedor de salida
    resultado.innerHTML = ''; // Limpiar resultados anteriores
  
    if (busqueda) {
      // Filtrar los libros que contienen la palabra en la descripción
      const filtro = libros.filter(book =>
        book.descripcion.toLowerCase().includes(busqueda)
      );
  
      if (filtro.length > 0) {
        filtro.forEach(book => {
          const div = document.createElement('div'); //Crear el div que contendra la información
          div.innerHTML = `
            <h3>${book.nombre}</h3>
            <p><strong>Autor:</strong> ${book.autor}</p>
            <p>${book.descripcion}</p>
          `; //Incluir información en el div
          resultado.appendChild(div); //Agregar div al DOM de results
        });
      } else {
        resultado.innerHTML = '<br> No se encontraron resultados.'; //Mensaje de validación para no coincidencias
      }
    }
  }
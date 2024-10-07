const infoCuadro = document.getElementById('infoCuadro');
//const infoTexto = document.getElementById('infoTexto');
const cerrarBtn = document.getElementById('cerrarBtn');
const planetas = {
    Kepler1869c: {
        nombre: "Kepler-1869c",
        datos: [
            "Type: Terrestrial",
            "Radio: 0,74 x Earth",
            "Planet mass (Earth): 0,33",
            "Location: Cygnus constellation, G-type star orbit",
            "Light-years from Earth: 369 years",
            "Discovery method: transit",
            "Discovery date: 2023",
            "Distance to nearest star: 0.028 Astronomical Unit (AU)",
            "Orbital period: 1,7 days",
            "Habitable: No",
            
        ]
    },
    LaestrelladeTeegarde: {
        nombre: "Teegarden’s star c",
        datos: [
            "Type: Terrestrial",
            "Radio: 0,954 x Earth",
            "Planet mass (Earth): 0,82",
            "Location: Aries constellation, orbits type M star",
            "Light-years from Earth: 13 years",
            "Discovery method: Radial velocity",
            "Observed by: Calar Alto Observatory",
            "Discovery date: 2024",
            "Distance to nearest star: 0.0791 Astronomical Unit (AU)",
            "Orbital period: 26,1 days",
            "Habitable: No",
        ]
    },
    TOI1443d: {
        nombre: "TOI 1443 b",
        datos: [
            "Type: Súper Earth",
            "Radio: 2,304 x Earth",
            "Planet mass (Earth): 30",
            "Location: Draco constellation, orbits K-type star",
            "Light-years from Earth: 280 years",
            "Discovery method: transit",
            "Observed by: Transiting Exoplanet Survey Satellite (TESS)",
            "Discovery date: 2024",
            "Distance to nearest star: 0.147 Astronomical Unit (AU)",
            "Orbital period: 23,5 days",
            "Habitable: No",
        ]
    },
    Kepler62f: {
        nombre: "Kepler-62f",
        datos: [
            "Type: Súper Earth",
            "Radio: 1,41 x Earth",
            "Planet mass (Earth): 35",
            "Location: Lyra constellation, orbits K-type star",
            "Light-years from Earth: 982 years",
            "Discovery method: transit",
            "Discovery method: transit",
            "Discovery date: 2013",
            "Distance to nearest star: 0.718 Astronomical Unit (AU)",
            "Orbital period: 267,3 days",
            "Habitable: Yes",
        ]
    },
    Cadera8152b: {
        nombre: " HIP 8152 b",
        datos: [
            "Type: Neptune - like",
            "Radio: 8,9 x Earth",
            "Planet mass (Earth): 8,5",
            "Location: Cetus constellation, orbits G-type star",
            "Light-years from Earth: 332 years",
            "Discovery method: transit",
            "Observed by: Transiting Exoplanet Survey Satellite (TESS)",
            "Discovery date: 2023",
            "Distance to nearest star: 0.093 Astronomical Unit (AU)",
            "Orbital period: 10,8 days",
            "Habitable: No",
        ]
    },
    HD123606f: {
        nombre: "HD 158259 c",
        datos: [
            "Type: Neptune - like",
            "Radio: 2,23 x Earth",
            "Planet mass (Earth): 5,6",
            "Location: Draco constellation, orbits G-type star",
            "Light-years from Earth: 88 years",
            "Discovery method: Radial velocity",
            "Observed by: Haute-Provence Observatory",
            "Discovery date: 2020",
            "Distance to nearest star: 0.046 Astronomical Unit (AU)",
            "Orbital period: 3,4 days",
            "Habitable: No",
        ]
    },
    wasp32b: {
        nombre: "WASP 32 b",
        datos: [
            "Type: Gas giant",
            "Radio: 0,96 x Jupiter",
            "Planet mass (Jupiter): 2,63",
            "Location: Pisces constellation, orbits G-type star",
            "Light-years from Earth: 698 years",
            "Discovery method: Space telescope",
            "Observed by: James Webb Telescope",
            "Discovery date: 2011",
            "Distance to nearest star: 0.0486 Astronomical Unit (AU)",
            "Orbital period: 4,1 days",
            "Habitable: No",
        ]
    },
    HatP2c: {
        nombre: "HAT P-2 c",
        datos: [
            "Type: Gas giant",
            "Radio: 1.11 x Júpiter",
            "Planet mass (Jupiter): 10,7",
            "Location: Hercules constellation, orbits F-type star",
            "Light-years from Earth: 417 years",
            "Discovery method: Radial velocity",
            "Observed by: Hungarian-made Automated Telescope Network (HATNet)",
            "Discovery date: 2023",
            "Distance to nearest star: 8.96392 Astronomical Unit (AU)",
            "Orbital period: 23,3 years",
            "Habitable: No",
        ]
    },

};

// Agrega evento de clic para cada planeta
document.querySelectorAll('.planeta').forEach(planeta => {
    planeta.addEventListener('click', (e) => {
        const id = planeta.classList[1]; // Obtiene la clase del planeta
        const info = planetas[id];
        
        // Asegúrate de acceder a las propiedades correctas
        document.getElementById('nombrePlaneta').innerText = info.nombre;
        //document.getElementById('infoTexto').innerText = info.descripcion;
        
        // Rellenar los datos adicionales
        const datosAdicionales = document.getElementById('datosAdicionales');
        datosAdicionales.innerHTML = ''; // Limpiar contenido anterior
        info.datos.forEach(dato => {
            const li = document.createElement('li');
            li.innerText = dato; // Asegúrate de que 'dato' sea un string
            datosAdicionales.appendChild(li);
        });

        infoCuadro.style.display = 'block'; // Muestra el modal
    });
});

// Cerrar el modal
cerrarBtn.addEventListener('click', () => {
    infoCuadro.style.display = 'none';
});

// Cerrar el modal al hacer clic en el fondo del modal
infoCuadro.addEventListener('click', (e) => {
    if (e.target === infoCuadro) {
        infoCuadro.style.display = 'none';
    }
});


document.querySelectorAll('.planeta').forEach(planeta => {
    planeta.addEventListener('click', (e) => {
        const id = planeta.classList[1]; // Obtiene la clase del planeta
        infoTexto.innerText = planetas[id]; // Muestra la información del planeta
        infoCuadro.style.display = 'block'; // Muestra el modal
    });
});

// Cerrar el modal al hacer clic en el botón de cierre
cerrarBtn.addEventListener('click', () => {
    infoCuadro.style.display = 'none';
});

// Cerrar el modal al hacer clic en el fondo del modal
infoCuadro.addEventListener('click', (e) => {
    if (e.target === infoCuadro) {
        infoCuadro.style.display = 'none';
    }
});

const starsContainer = document.querySelector('.stars-container');
const numberOfStars = 100; // Número total de estrellas

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Tamaño aleatorio entre 2px y 10px
    const size = Math.random() * 8 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Posición aleatoria dentro del contenedor
    moveStar(star);

    // Duración de animación aleatoria entre 1s y 2s
    const animationDuration = Math.random() * 1 + 1; // Entre 1 y 2 segundos
    star.style.animation = `twinkle ${animationDuration}s infinite alternate`;

    starsContainer.appendChild(star);
}

function moveStar(star) {
    // Nueva posición aleatoria
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
}

// Crea las estrellas
for (let i = 0; i < numberOfStars; i++) {
    createStar();
}

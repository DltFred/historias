// historia.js

export const historiaDefault = [
  {
    id: 1,
    descripcion: "Estás en una habitación oscura. Ves una puerta a tu izquierda y una ventana a tu derecha. ¿Qué haces?",
    opciones: [
      { id:1,texto: "Abres la puerta.", siguienteId: 2 },
      { id:2,texto: "Te acercas a la ventana.", siguienteId: 3 }
    ]
  },
  {
    id: 2,
    descripcion: "La puerta está cerrada con llave. ¿Qué haces?",
    opciones: [
      { id:1,texto: "Buscas la llave.", siguienteId: 4 },
      { id:2,texto: "Regresas a la habitación.", siguienteId: 1 }
    ]
  },
  {
    id: 3,
    descripcion: "La ventana está cerrada con rejas. No puedes salir por aquí. ¿Qué haces?",
    opciones: [
      { id:1,texto: "Buscas otra salida.", siguienteId: 1 },
      { id:2,texto: "Rompes la ventana.", siguienteId: 5 }
    ]
  },
  {
    id: 4,
    descripcion: "Encuentras la llave debajo de la alfombra. ¿Qué haces?",
    opciones: [
      { id:1,texto: "Abres la puerta con la llave.", siguienteId: 6 },
      { id:2,texto: "Regresas a la habitación.", siguienteId: 1 }
    ]
  },
  {
    id: 5,
    descripcion: "Al romper la ventana, activas una alarma. Los guardias te atrapan y te encarcelan. Fin del juego.",
    opciones: []
  },
  {
    id: 6,
    descripcion: "Abres la puerta y encuentras un pasillo iluminado. ¿Qué haces?",
    opciones: [
      { id:1,texto: "Exploras el pasillo.", siguienteId: 7 },
      { id:2,texto: "Regresas a la habitación.", siguienteId: 1 }
    ]
  },
  {
    id: 7,
    descripcion: "Avanzas por el pasillo y encuentras dos puertas más. ¿Cuál eliges?",
    opciones: [
      { id:1,texto: "Abres la puerta de la izquierda.", siguienteId: 8 },
      { id:2,texto: "Abres la puerta de la derecha.", siguienteId: 9 }
    ]
  },
  {
    id: 8,
    descripcion: "La puerta de la izquierda conduce a una habitación con un cofre lleno de tesoros. ¡Felicidades, has ganado el juego!",
    opciones: []
  },
  {
    id: 9,
    descripcion: "La puerta de la derecha te lleva a una sala llena de monstruos. Intentas huir, pero los monstruos te atrapan y te devoran. Fin del juego.",
    opciones: []
  }
];


export const historiaSanValentin = [
  {
    id: 1,
    descripcion: "¡Es el día de San Valentín! Te despiertas emocionado por el día. ¿Qué haces primero?",
    opciones: [
      { id:1,texto: "Preparas un desayuno romántico para tu pareja.", siguienteId: 2 },
      { id:2,texto: "Sales a comprar un regalo de último minuto.", siguienteId: 3 }
    ]
  },
  {
    id: 2,
    descripcion: "Tu pareja se despierta con el aroma del desayuno y te abraza con amor. ¿Qué les dices?",
    opciones: [
      { id:1,texto: "Le dices cuánto la amas y le das un regalo sorpresa.", siguienteId: 4 },
      { id:2,texto: "Le das un beso y le dices que desayunen juntos.", siguienteId: 5 }
    ]
  },
  {
    id: 3,
    descripcion: "Corres a la tienda y encuentras una tienda de dulces. ¿Qué compras?",
    opciones: [
      { id:1,texto: "Compras una caja de chocolates y un ramo de flores.", siguienteId: 6 },
      { id:2,texto: "Compras una tarjeta de felicitación y un peluche.", siguienteId: 7 }
    ]
  },
  {
    id: 4,
    descripcion: "Tu pareja se emociona por el regalo sorpresa y te abraza con alegría. Pasan un día increíble juntos. ¡Feliz día de San Valentín!",
    opciones: []
  },
  {
    id: 5,
    descripcion: "Tu pareja se siente un poco decepcionada por no recibir un regalo, pero disfrutan del desayuno juntos de todos modos. Pasan un día agradable, aunque un poco menos especial. ¡Feliz día de San Valentín!",
    opciones: []
  },
  {
    id: 6,
    descripcion: "Tu pareja se emociona al recibir los chocolates y las flores. Pasan un día increíble juntos. ¡Feliz día de San Valentín!",
    opciones: []
  },
  {
    id: 7,
    descripcion: "Tu pareja se conmueve por la tarjeta de felicitación y el peluche. Pasan un día agradable juntos, disfrutando de su compañía. ¡Feliz día de San Valentín!",
    opciones: []
  }
];

export const historiaCumpleañosFantasia = [
  {
    id: 1,
    descripcion: "Hola Sofía!, hoy es 18 de febrero en el reino de Aetheria, un lugar donde la magia fluye por doquier y las criaturas mágicas son parte de la vida cotidiana. ¿Qué decides hacer para comenzar tu día especial?",
    opciones: [
      { id:1,texto: "Explorar el Bosque de las Maravillas en busca de aventuras.", siguienteId: 2 },
      { id:2,texto: "Unirte a la celebración del Gran Festival de Cumpleaños en la plaza del pueblo.", siguienteId: 3 }
    ]
  },
  {
    id: 2,
    descripcion: "Mientras exploras el Bosque de las Maravillas, te encuentras con un anciano sabio que te ofrece un misterioso artefacto. ¿Lo aceptas?",
    opciones: [
      { id:1,texto: "Sí, acepto el artefacto.", siguienteId: 4 },
      { id:2,texto: "Prefiero continuar mi exploración sin tomar riesgos.", siguienteId: 5 }
    ]
  },
  {
    id: 3,
    descripcion: "Al unirte al Gran Festival de Cumpleaños, te encuentras con viejos amigos y disfrutas de la música, la comida y la magia que llena el aire. ¿Qué decides hacer a continuación?",
    opciones: [
      { id:1,texto: "Participar en el concurso de magia.", siguienteId: 6 },
      { id:2,texto: "Buscar un lugar tranquilo para reflexionar sobre el año que ha pasado.", siguienteId: 7 },
      { id:3,texto: "Continuar en el festival con los amigos, la música y la comida hasta que termine.", siguienteId: 12 },
    ]
  },
  {
    id: 4,
    descripcion: "Al aceptar el artefacto, una luz brillante envuelve tu cuerpo y te otorga poderes mágicos más allá de tu imaginación. ¿Qué tipo de poderes recibes?",
    opciones: [
      { id:1,texto: "Control sobre el fuego.", siguienteId: 8 },
      { id:2,texto: "La capacidad de hablar con los animales.", siguienteId: 9 }
    ]
  },
  {
    id: 5,
    descripcion: "Decides no aceptar el artefacto y continuas tu exploración. Aunque no encuentras ningún tesoro, disfrutas de la belleza del bosque tanto que terminas perdida y no sabes como regresar al pueblo :/.",
    opciones: []
  },
  {
    id: 6,
    descripcion: "Participas en el concurso de magia y deslumbras a la multitud con tus habilidades recién descubiertas. ¿Qué tipo de truco realizas?",
    opciones: [
      { id:1,texto: "Teletransportarte a un lugar secreto.", siguienteId: 10 },
      { id:2,texto: "Crear una ilusión de un dragón volador.", siguienteId: 11 }
    ]
  },
  {
    id: 7,
    descripcion: "Encuentras un lugar tranquilo y reflexionas sobre las lecciones aprendidas y las experiencias compartidas en el último año. Te sientes agradecido por todo lo que has vivido y por las personas que tienes a tu lado en este día especial.",
    opciones: []
  },
  {
    id: 8,
    descripcion: "Con tu nuevo poder sobre el fuego, te conviertes en una protectora del reino, utilizando tu habilidad para mantener a raya a las criaturas peligrosas y proteger a los habitantes de Aetheria. Regresas al pueblo te unes a la fiesta, pero al no controlar bien tus nuevos poderes inicias un incendio donde quedas atrapada y mueres :/",
    opciones: []
  },
  {
    id: 9,
    descripcion: "Con la capacidad de hablar con los animales, te conviertes en una amiga y protectora de la vida salvaje en el reino. Los animales te guían en tus aventuras y te ayudan a resolver problemas.",
    opciones: []
  },
  {
    id: 10,
    descripcion: "Teletransportarte a un lugar secreto, impresionando a todos con tu magia. La multitud aplaude y te considera un mago de gran talento. pero como es secreto no sabes como regresar :/.",
    opciones: []
  },
  {
    id: 11,
    descripcion: "Creas una ilusión de un dragón volador, dejando a todos maravillados por tu habilidad para conjurar criaturas míticas. Te coronan como el ganador del concurso de magia.",
    opciones: []
  },
  {
    id: 12,
    desripcion: "Después de disfrutar del festival, decides explorar las Montañas Azules, un lugar lleno de misterios y peligros. ¿Qué encuentras en tu aventura?",
    opciones: [
      { id:1,texto: "Encuentras una antigua espada mágica que te concede el título de Caballero de Aetheria.", siguienteId: 13 },
      { id:2,texto: "Te encuentras con una criatura legendaria que te desafía a una prueba de valor.", siguienteId: 14 }
    ]
  },
  {
    id: 13,
    descripcion: "Al encontrar la espada mágica, te conviertes en la Caballero de Aetheria y juras proteger el reino de cualquier amenaza. ¡Es un destino grandioso para una héroe en su cumpleaños!",
    opciones: []
  },
  {
    id: 14,
    descripcion: "Aceptas el desafío de la criatura legendaria y, después de una emocionante prueba de valor, ganas su respeto y amistad. Juntos, deciden explorar el mundo y vivir aventuras sin fin. ¡Es un comienzo emocionante para un nuevo capítulo en tu vida!. ¿Que haces?",
    opciones: [{ id:1,texto: "Regreso a casa", siguienteId: 15 }]
  },
  {
    id: 15,
    descripcion: "Después de tus aventuras, regresas al pueblo donde te espera una fiesta sorpresa organizada por tus amigos y familiares. ¡Es un final perfecto para un día lleno de magia, aventuras y amor!",
    opciones: []
  }
];
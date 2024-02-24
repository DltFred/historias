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
    descripcion: "Después de disfrutar del festival, decides explorar las Montañas Azules, un lugar lleno de misterios y peligros. ¿Qué encuentras en tu aventura?",
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

export const historiaIntriga = [
  {
    id: 1,
    descripcion: "Te despiertas en una habitación oscura y desconocida. No recuerdas cómo llegaste allí. Solo ves una puerta cerrada frente a ti. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Examinar la habitación en busca de pistas.", siguienteId: 2 },
      { id: 2, texto: "Intentar abrir la puerta.", siguienteId: 3 },
      { id: 3, texto: "Gritar pidiendo ayuda.", siguienteId: 4 }
    ]
  },
  {
    id: 2,
    descripcion: "Al examinar la habitación, encuentras una nota debajo de la almohada. La nota dice: 'No confíes en nadie. Tu vida está en peligro'. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Guardar la nota y seguir explorando la habitación.", siguienteId: 5 },
      { id: 2, texto: "Ignorar la nota y continuar intentando abrir la puerta.", siguienteId: 6 }
    ]
  },
  {
    id: 3,
    descripcion: "Intentas abrir la puerta, pero está cerrada con llave. Sin embargo, al hacerlo, escuchas pasos acercándose desde el otro lado. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Esconderte y observar quién viene.", siguienteId: 7 },
      { id: 2, texto: "Seguir intentando abrir la puerta desesperadamente.", siguienteId: 8 }
    ]
  },
  {
    id: 4,
    descripcion: "Al gritar pidiendo ayuda, escuchas un ruido sospechoso detrás de ti. Antes de que puedas reaccionar, te golpean en la cabeza y pierdes el conocimiento.",
    opciones: []
  },
  {
    id: 5,
    descripcion: "Mientras exploras la habitación, encuentras una llave escondida en un cajón. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Usar la llave para intentar abrir la puerta.", siguienteId: 9 },
      { id: 2, texto: "Esconder la llave y continuar buscando pistas.", siguienteId: 10 }
    ]
  },
  {
    id: 6,
    descripcion: "Ignoras la nota y continúas intentando abrir la puerta. Después de varios intentos, logras abrir la puerta y te encuentras en un pasillo oscuro. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Explorar el pasillo.", siguienteId: 11 },
      { id: 2, texto: "Volver a la habitación y buscar más pistas.", siguienteId: 12 }
    ]
  },
  {
    id: 7,
    descripcion: "Te escondes detrás de una cortina y observas a una figura misteriosa entrar en la habitación. La figura parece buscar algo y luego se va sin notarte. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Seguir a la figura para averiguar más.", siguienteId: 13 },
      { id: 2, texto: "Regresar a la habitación y analizar lo que has aprendido.", siguienteId: 14 }
    ]
  },
  {
    id: 8,
    descripcion: "Sigues intentando abrir la puerta desesperadamente, pero antes de que puedas hacerlo, la puerta se abre de golpe y te encuentras cara a cara con un desconocido armado. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Intentar negociar con el desconocido.", siguienteId: 15 },
      { id: 2, texto: "Huir por el pasillo.", siguienteId: 16 }
    ]
  },
  {
    id: 9,
    descripcion: "Usas la llave para abrir la puerta y te encuentras en un pasillo oscuro. Mientras exploras el pasillo, escuchas pasos acercándose. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Esconderte y observar quién viene.", siguienteId: 17 },
      { id: 2, texto: "Seguir explorando el pasillo.", siguienteId: 18 }
    ]
  },
  {
    id: 10,
    descripcion: "Decides esconder la llave y continuar buscando pistas en la habitación. Encuentras un diario antiguo que parece contener información importante. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Leer el diario y descubrir su contenido.", siguienteId: 19 },
      { id: 2, texto: "Guardar el diario y continuar buscando pistas.", siguienteId: 20 }
    ]
  },
  {
    id: 11,
    descripcion: "Exploras el pasillo y encuentras una puerta al final. Al abrirla, te encuentras en una habitación iluminada con una figura misteriosa esperándote. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Hablar con la figura y averiguar más.", siguienteId: 21 },
      { id: 2, texto: "Atacar a la figura para defenderte.", siguienteId: 22 }
    ]
  },
  {
    id: 12,
    descripcion: "Vuelves a la habitación y encuentras una nota que dice: 'No puedes escapar de tu destino'. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Investigar más sobre el significado de la nota.", siguienteId: 23 },
      { id: 2, texto: "Ignorar la nota y buscar otra salida.", siguienteId: 24 }
    ]
  },
  {
    id: 13,
    descripcion: "Sigues a la figura y descubres un pasadizo secreto que conduce a una habitación oculta. Dentro de la habitación, encuentras evidencia de un complot siniestro. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Informar a las autoridades sobre el complot.", siguienteId: 25 },
      { id: 2, texto: "Tratar de resolver el misterio por tu cuenta.", siguienteId: 26 }
    ]
  },
  {
    id: 14,
    descripcion: "Regresas a la habitación y analizas lo que has aprendido. Te das cuenta de que estás atrapado en un juego de intriga y misterio. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Buscar una salida y escapar del lugar.", siguienteId: 27 },
      { id: 2, texto: "Investigar más para descubrir la verdad.", siguienteId: 28 }
    ]
  },
  {
    id: 15,
    descripcion: "Intentas negociar con el desconocido, pero antes de que puedas decir algo, te atacan y te llevan a un lugar desconocido. Tu destino está en manos de tus captores.",
    opciones: []
  },
  {
    id: 16,
    descripcion: "Huyes por el pasillo y encuentras una salida. Sales corriendo del lugar, pero no estás seguro de si estás a salvo. te refugias en un arbol pero escuchas sonidos extraños... Son una manada de lobos hambrientos... luego de tres dias encontraron tus restos :/",
    opciones: []
  },
  {
    id: 17,
    descripcion: "Te escondes y observas a un grupo de personas armadas entrar en el pasillo. Parecen estar buscándote. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Esperar a que se vayan y luego seguir explorando.", siguienteId: 29 },
      { id: 2, texto: "Intentar escapar mientras tienen la guardia baja.", siguienteId: 30 }
    ]
  },
  {
    id: 18,
    descripcion: "Sigues explorando el pasillo y encuentras una salida. Sales corriendo del lugar pero era una trampa. estabas siendo monitoreada todo el tiempo y caiste a un agujero donde pasaras tus últimos días. :/",
    opciones: []
  },
  {
    id: 19,
    descripcion: "Lees el diario y descubres que pertenecía a un prisionero que estuvo encarcelado en la habitación. El diario contiene pistas sobre cómo escapar. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Seguir las pistas del diario para intentar escapar.", siguienteId: 31 },
      { id: 2, texto: "Guardar el diario y buscar más pistas en la habitación.", siguienteId: 32 }
    ]
  },
  {
    id: 20,
    descripcion: "Guardas el diario y continuas buscando pistas en la habitación. Encuentras un mapa oculto que parece mostrar una salida secreta. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Seguir el mapa y buscar la salida secreta.", siguienteId: 33 },
      { id: 2, texto: "Continuar buscando más pistas en la habitación.", siguienteId: 34 }
    ]
  },
  {
    id: 21,
    descripcion: "Hablas con la figura y descubres que es un aliado que quiere ayudarte a escapar. Te revela la verdad sobre por qué estás allí y cómo puedes escapar. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Seguir el plan del aliado y escapar juntos.", siguienteId: 35 },
      { id: 2, texto: "Desconfiar del aliado y buscar una salida por tu cuenta.", siguienteId: 36 }
    ]
  },
  {
    id: 22,
    descripcion: "Atacas a la figura para defenderte, pero antes de que puedas hacerlo, la figura se desvanece en el aire, revelando que era una ilusión. Te quedas desconcertado y confundido. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Continuar explorando la habitación en busca de respuestas.", siguienteId: 37 },
      { id: 2, texto: "Regresar a la habitación principal y buscar más pistas.", siguienteId: 38 }
    ]
  },
  {
    id: 23,
    descripcion: "Investigas más sobre el significado de la nota y descubres que está vinculada a un antiguo complot que ha estado ocurriendo en la ciudad. ¿Qué decides hacer?",
    opciones: [
      { id: 1, texto: "Informar a las autoridades sobre el complot.", siguienteId: 39 },
      { id: 2, texto: "Tratar de resolver el misterio por tu cuenta.", siguienteId: 40 }
    ]
  },
  {
    id: 24,
    descripcion: "Ignoras la nota y buscas otra salida. Sin embargo, no encuentras ninguna otra salida y te das cuenta de que estás atrapado. Pronto llega un grupo de personas y al ver que intentas escapar te usan como arma para llevar a cabo su plan. eras un peon más. :/ ",
    opciones: []
  },
  {
    id: 25,
    descripcion: "Informas a las autoridades sobre el complot y les ayudas a desmantelarlo. Pero no hay nadie en quien confiar. las autoridades desconfian de ti y te finalizan...",
    opciones: []
  },
  {
    id: 26,
    descripcion: "Decides resolver el misterio por tu cuenta y descubres la verdad detrás del complot. No hay nadie afuera, eres el unico sobreviviente de una catastrofe... tarde o temprano morirás.",
    opciones: []
  },
  {
    id: 27,
    descripcion: "Buscas una salida pero no la encuentras te das cuenta que estas atrapado en un juego de intriga y misterio mucho más grande de lo que imaginabas. Tu aventura está lejos de terminar.",
    opciones: []
  },
  {
    id: 28,
    descripcion: "Investigas más para descubrir la verdad y te das cuenta de que estás atrapado en un juego de intriga y misterio mucho más grande de lo que imaginabas. Tu aventura está lejos de terminar.",
    opciones: []
  },
  {
    id: 29,
    descripcion: "Esperas a que se vayan y luego sigues explorando el pasillo. Pero no encuentras nada ¿Que decides hacer?",
    opciones: [
    { id: 1, texto: "Volver a la habitacion a seguir explorando", siguienteId: 10 },
    { id: 2, texto: "quedarme en el pasillo y esperar que llegue alguien", siguienteId: 41 }]
  },
  {
    id: 30,
    descripcion: "Intentas escapar mientras tienen la guardia baja, pero te descubren y te llevan de vuelta a tu celda. Tu intento de fuga fracasa y tu destino queda en manos de tus captores.",
    opciones: []
  },
  {
    id: 31,
    descripcion: "Sigues las pistas del diario y descubres que en la habitacion debe haber una nota importante ¿Que haces?",
    opciones: [
      {id:1, texto: "Volver a la habitacion y seguir explorando", siguienteId:12},
      {id:2, texto: "Ignoro el diario y voy al pasillo", siguienteId:18}
    ]
  },
  {
    id: 32,
    descripcion: "Guardas el diario y buscas más pistas en la habitación. Encuentras una trampilla oculta que te lleva a una salida secreta. No era una salida, era un tunel con gases toxicos. No te diste cuenta cuando caiste dormida y no pudiste despertar nunca más. :/ muerte por envenamiento",
    opciones: []
  },
  {
    id: 33,
    descripcion: "Sigues el mapa y encuentras la salida secreta. pero alto!! era una trampa. :/ terminas encerrada en una celda muy pequeña que poco a poco va cerrandose y termina por aplastarte....",
    opciones: []
  },
  {
    id: 34,
    descripcion: "Continúas buscando más pistas en la habitación, pero no encuentras nada más y por la desesperación no te diste cuenta que alguien más habia llegado a la habitación. te toma por sorpresa y no recuerdas más. estás encadenada en la habitación por el resto de tus días...",
    opciones: []
  },
  {
    id: 35,
    descripcion: "Sigues el plan del aliado pero era una trampa no existian aliados en ese lugar... En un momento que te distrajiste acabó contigo..."
  },
  {
    id: 36,
    descripcion: "Desconfías del aliado y decides buscar una salida por tu cuenta. Así que decides acabar con él, pero ambos quedan heridos de gravedad y no hay quien pueda salvarlos ... ",
    opciones: []
  },
  {
    id: 37,
    descripcion: "Continúas explorando la habitación en busca de respuestas y descubres una puerta secreta detrás de una estantería. Al abrirla, se dispara un arma automatica que atraviesa tu cuerpo de pies a cabeza. Logran encontrarte despues de días pero nadie te reconoció ... :/ ",
    opciones: []
  },
  {
    id: 38,
    descripcion: "Regresas a la habitación principal y buscas más pistas. Encuentras una carta que revela la verdad sobre por qué estás allí. Eres un arma, implantaron dentro de ti explosivos. Así que decides no seguir, te encierras en una trampilla de la habitacion y bloqueas las puertas. Nadie supo de ti hasta el momento...",
    opciones: []
  },
  {
    id: 39,
    descripcion: "Informas a las autoridades sobre el complot y les ayudas a desmantelarlo. O eso esperabas, un policia en realidad era quien controlaba todo asi que decide eliminarte de su juego. :/",
    opciones: []
  },
  {
    id: 40,
    descripcion: "Decides resolver el misterio por tu cuenta y descubres la verdad detrás del complot. Aunque tu aventura es peligrosa, logras salir victorioso y salvar a la ciudad de un destino terrible.",
    opciones: []
  },
  {
    id: 41,
    descripcion: "Llegan varias personas que te ven a lo lejos y disparan a matar. Eran policias que recibieron la alerta de un grupo terrorista que estaban en ese edificio y eran muy peligrosos, te confundieron :/",
    opciones: []
  }
];



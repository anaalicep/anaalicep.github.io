/* Bite Club: Spanish (Latin America). Text only; structure, answers and sources come from index.html. */
window.BC_I18N = window.BC_I18N || {};
window.BC_I18N.es = {
  html: {
    'refsLink': 'Referencias',
    'h.eyebrow': 'Un juego sobre los virus que viajan en mosquito',
    'h.rule1': 'La primera regla del Bite Club: <em>cero picaduras.</em>',
    'h.lead': 'El dengue, el Zika, el chikungunya, la fiebre amarilla y el virus del Nilo Occidental tienen algo en común: todos viajan de un huésped a otro a bordo de un mosquito. Descubre cómo funciona esa cadena, cómo cortarla y cómo los médicos averiguan quién está infectado.',
    'h.start': 'Empezar por la Regla 1',
    'h.guideBtn': 'Guía de campo',
    'h.careersBtn': 'Carreras',
    'h.swatTag': 'Calentamiento · aplasta al mosquito',
    'rulesTitle': 'Las reglas',
    'guideTitle': 'Guía de campo',
    'guideSub': 'Cinco virus, dos tipos de mosquito',
    'table': '<thead><tr><th>Virus</th><th>Mosquito principal</th><th>Dónde circula</th><th>Qué causa</th><th>¿Hay vacuna?</th></tr></thead><tbody>' +
      '<tr><td class="v">Dengue</td><td><i>Aedes aegypti</i> y <i>Ae. albopictus</i>. Activos de día.<sup class="cite" data-r="who-dengue"></sup></td><td>Zonas tropicales y subtropicales de todo el mundo</td><td>Solo 1 de cada 4 personas infectadas se enferma.<sup class="cite" data-r="cdc-dengue"></sup> Da fiebre con dolor detrás de los ojos, dolor de músculos, articulaciones o huesos, náuseas y sarpullido.<sup class="cite" data-r="cdc-dengue-sx"></sup> Contagiarse por segunda vez aumenta el riesgo de dengue grave.<sup class="cite" data-r="who-dengue"></sup></td><td>Hay una vacuna autorizada en algunos países. La OMS la recomienda solo de los 6 a los 16 años, en zonas de alta transmisión.<sup class="cite" data-r="who-dengue"></sup></td></tr>' +
      '<tr><td class="v">Zika</td><td><i>Aedes</i>. También se transmite por vía sexual y de la madre al bebé durante el embarazo.<sup class="cite" data-r="cdc-zika"></sup></td><td>Zonas tropicales y subtropicales</td><td>Suele ser leve o pasar sin síntomas: sarpullido, fiebre, ojos rojos, dolor de articulaciones. En el embarazo puede causar microcefalia y otras malformaciones en el bebé.<sup class="cite" data-r="who-zika"></sup></td><td>Todavía no<sup class="cite" data-r="who-zika"></sup></td></tr>' +
      '<tr><td class="v">Chikungunya</td><td><i>Aedes</i></td><td>África, Asia, las Américas y otras regiones</td><td>Fiebre y dolor de articulaciones, que puede ser muy fuerte y durar meses.<sup class="cite" data-r="cdc-chik-sx"></sup></td><td>Hay dos vacunas aprobadas en varios países, pero todavía son difíciles de conseguir.<sup class="cite" data-r="who-chik"></sup> Los CDC la recomiendan para algunos viajeros.<sup class="cite" data-r="cdc-chik"></sup></td></tr>' +
      '<tr><td class="v">Fiebre amarilla</td><td><i>Aedes</i> y mosquitos parecidos</td><td>Partes de África y de América del Sur<sup class="cite" data-r="cdc-yf"></sup></td><td>Muchas veces es leve, pero algunas personas desarrollan la forma grave, con ictericia (piel y ojos amarillos) y sangrado.<sup class="cite" data-r="cdc-yf"></sup></td><td>Sí. Para la mayoría de las personas, una sola dosis protege por mucho tiempo, sin refuerzo.<sup class="cite" data-r="cdc-yf-vax"></sup></td></tr>' +
      '<tr><td class="v">Nilo Occidental</td><td><i>Culex</i>, el mosquito común. El virus circula entre estos mosquitos y las aves.<sup class="cite" data-r="cdc-wnv-cause"></sup></td><td>En todo el mundo. En la parte continental de EE. UU. es la enfermedad transmitida por mosquitos más común.<sup class="cite" data-r="cdc-wnv"></sup></td><td>8 de cada 10 personas infectadas no sienten nada. Menos de 1 de cada 100 desarrolla la forma grave, que afecta el cerebro o la médula espinal. Las personas de 65 años o más tienen el triple de riesgo.<sup class="cite" data-r="cdc-wnv-sx"></sup></td><td>No hay para personas</td></tr></tbody>',
    'back': '← Volver a las reglas',
    'c.eyebrow': 'Regla 1 de 3 · La cadena de transmisión',
    'c.title': 'Entiende la cadena',
    'c.intro': 'El mosquito no fabrica virus: solo los lleva de una persona infectada a la siguiente. Cada eslabón de esa cadena toma su tiempo, y cada uno es una oportunidad para cortarla.',
    'c.aTitle': 'Parte A: Arma la cadena',
    'c.aSub': 'El dengue se está propagando por un barrio. Toca los pasos en el orden correcto, empezando por la persona infectada. Cada error te resta puntos.',
    'c.loop': 'Después del paso 6, todo vuelve a empezar en el paso 1.',
    'c.brk': '<div class="brk"><b>Periodo de incubación extrínseco (pasos 3–4)</b>El tiempo que pasa el virus dentro del mosquito hasta que este puede transmitirlo. Suele tardar alrededor de una semana y se acorta cuando hace más calor (mira la Parte C).<sup class="cite" data-r="cdc-wnv-cause"></sup><sup class="cite" data-r="mordecai"></sup></div>' +
      '<div class="brk"><b>Periodo de incubación intrínseco (paso 6)</b>El tiempo entre la picadura y los primeros síntomas en la persona. En el dengue, normalmente de 4 a 10 días.<sup class="cite" data-r="who-dengue"></sup></div>',
    'c.replay': 'Jugar otra vez la Parte A',
    'c.bTitle': 'Parte B: Callejón sin salida',
    'c.bSub': 'El virus del Nilo Occidental sigue otro camino: los mosquitos <i>Culex</i> lo pasan de ave en ave, y las personas entran en la historia por casualidad.',
    'c.cTitle': 'Parte C: Laboratorio de temperatura',
    'c.cSub': 'Un mosquito infectado solo se vuelve peligroso si vive lo suficiente para completar el periodo de incubación extrínseco. El calor acelera al virus, pero también acorta la vida del mosquito. Mueve el control, encuentra la temperatura en la que el mosquito tiene más probabilidades de volverse infeccioso y confírmala para ver la curva completa.',
    'c.statTemp': 'Temperatura',
    'c.statEip': 'Periodo de incubación extrínseco',
    'c.statLife': 'Vida promedio del mosquito',
    'c.statChance': 'Probabilidad de que el mosquito infectado viva lo suficiente para transmitir el virus',
    'c.lock': 'Confirmar temperatura',
    'c.note': 'Este es un modelo simplificado, hecho para enseñar, sobre el dengue en <i>Aedes aegypti</i>. La forma de la curva sigue datos reales: Mordecai et al. (2017) mostraron que el dengue, el Zika y el chikungunya circulan entre unos 18 y 34 °C, con el pico entre 26 y 29 °C. Los números sirven para ilustrar, no para pronosticar.',
    'p.eyebrow': 'Regla 2 de 3 · Prevención',
    'p.title': 'Corta el problema de raíz',
    'p.intro': 'La hembra del <i>Aedes</i> pone sus huevos en las paredes internas de los recipientes, justo encima del nivel del agua. En 7 a 10 días, esos huevos ya son mosquitos adultos.<sup class="cite" data-r="cdc-aedes"></sup> Sin agua estancada, no hay siguiente generación.',
    'p.aTitle': 'Parte A: A la caza de criaderos',
    'p.aSub': 'Tienes 40 segundos para limpiar este patio. Toca todo lo que tenga agua estancada. Cada segundo que un recipiente sigue con agua, nacen más mosquitos. Ojo: algunas cosas ya son seguras, y tocarlas te hace perder tiempo.',
    'p.time': 'Tiempo restante',
    'p.hatched': 'Mosquitos que nacieron',
    'p.points': 'Puntos',
    'p.cover': '<b>¿Listo?</b> En este patio hay 8 criaderos escondidos. Encuéntralos todos, y rápido.',
    'p.start': '¡A la caza!',
    'p.bTitle': 'Parte B: Arma tu kit de protección',
    'p.bSub': 'En cada situación, marca <b>todas</b> las opciones que de verdad protegen y luego revisa. Hay productos muy populares que no sirven.',
    'd.eyebrow': 'Regla 3 de 3 · Diagnóstico',
    'd.title': 'Descifra el caso',
    'd.intro': 'Estos virus causan fiebres parecidas, así que los médicos juntan pistas: por dónde anduvo el paciente, qué le duele y cuántos días lleva enfermo. A la hora de elegir la prueba, el día es lo que más cuenta. Al principio se busca el virus mismo; después, los anticuerpos que el cuerpo produjo contra él.',
    'd.sheet': 'Guía rápida del laboratorio',
    'd.sheetSub': 'Línea de tiempo del dengue · día 0 = primer día de fiebre',
    'd.legend': '<span><i style="background:var(--water)"></i>RT-PCR detecta el material genético del virus</span><span><i style="background:var(--water);opacity:.5"></i>NS1 detecta una proteína del virus del dengue</span><span><i style="background:var(--amber-fill)"></i>Anticuerpos IgM (la primera respuesta del cuerpo)</span>',
    'd.next': 'Siguiente',
    'd.note': 'Los pacientes son ficticios, creados para que practiques. Si tú o alguien cercano tiene fiebre después de picaduras de mosquito o de un viaje, acude a un servicio de salud. Este juego no reemplaza una consulta médica.',
    'f.eyebrow': 'Desafío final · 10 preguntas',
    'f.title': 'Simulacro de brote',
    'f.intro': 'Un poco de todo: la cadena, la prevención y el diagnóstico. Encadena aciertos para tener de qué presumir. Cada respuesta correcta vale 10 puntos.',
    'ft.teachers': 'Para docentes',
    'ft.p1': 'Pensado para estudiantes de 14 a 18 años. Calcula de 35 a 45 minutos para las tres reglas y el simulacro final, que se pueden jugar en cualquier orden. El progreso se guarda solo en el navegador de cada estudiante. La tabla de la guía de campo funciona muy bien como punto de partida para conversar en clase.',
    'ft.p2': 'Cada respuesta del juego muestra de dónde viene la información. Los números pequeños llevan a la lista completa de referencias, que está en inglés. Las fuentes se revisaron en septiembre de 2026.',
    'ft.credit': 'Creado por <a href="/">Ana Alice Pimenta Pereira</a>.',
    'refsTitle': 'Referencias',
    'k.eyebrow': 'Más allá del juego · Carreras',
    'k.title': 'Rompe la cadena en la vida real',
    'k.intro': 'Tu nivel en Bite Club corresponde a una etapa de una carrera real en la investigación. Quienes hoy rastrean, estudian y combaten estos virus empezaron justo donde estás tú.',
    'k.pathTitle': 'Tu camino',
    'k.pathSub': 'Los cuatro niveles del juego siguen las etapas de una carrera científica.',
    'k.cardsTitle': 'Profesiones que rompen la cadena',
    'k.cardsSub': 'Cada una usa algo que practicaste en el juego.',
    'k.note': 'La información sobre carreras viene de la Oficina de Estadísticas Laborales de EE. UU. (BLS) y de sociedades científicas estadounidenses, y los enlaces están en inglés. La formación cambia de un país a otro, así que vale la pena hablar con un profesor, con la orientación de tu escuela o con alguien que trabaje en el área.'
  },
  aria: {
    brand: 'Inicio de Bite Club',
    lang: 'Idioma',
    swat: 'Un mosquito volando. Tócalo para aplastarlo y ver un dato curioso.',
    tsvg: 'Gráfica de la probabilidad de transmisión según la temperatura',
    tlsvg: 'Línea de tiempo que muestra cuándo funciona cada prueba de dengue'
  },
  ui: {
    src1: 'Fuente: ', srcN: 'Fuentes: ',
    correct: '¡Correcto!', notQuite: 'Casi.',
    swatted: '{n} aplastados',
    pipsLabel: '{n} de 4 completadas',
    totalPts: '{n} / 400 pts',
    rankLine: 'Nivel: <b>{rank}</b> · {n} / 400',
    rank1: 'Inspector Novato', rank2: 'Técnico de Campo', rank3: 'Agente de Control de Vectores', rank4: 'Cazavirus',
    best: 'Récord: {n} / 100', notPlayed: 'Sin jugar todavía',
    step: 'Paso {n}',
    perfectChain: '¡Cadena perfecta, sin un solo error!',
    chainDone1: 'Cadena completa, con 1 error.',
    chainDoneN: 'Cadena completa, con {n} errores.',
    hint: 'Pista: {h}',
    upTo: 'hasta <b>{n}</b> pts', ptsOf: '<b>{n}</b> / {max} pts',
    tempAxis: 'Temperatura (°C)',
    lockReveal: 'Confirma una temperatura para ver la curva completa',
    peakReal: 'pico en datos reales [{n}]',
    days: '{n} días',
    tempFb: '<strong>Elegiste {t} °C.</strong> En este modelo, el riesgo es mayor alrededor de 28 °C. En los datos reales, el pico está entre 26 y 29 °C, y la transmisión casi desaparece por debajo de unos 18 °C o por encima de 34 °C. Con frío, el virus tarda semanas en llegar a la saliva y la mayoría de los mosquitos muere antes. Con calor extremo, el virus va rápido, pero los mosquitos mueren en pocos días. Por eso la temperatura influye en dónde y cuándo se propagan estos virus.',
    ruleComplete: 'Regla completada', pointsOf: '{n} / 100 puntos', nextRule: 'Siguiente: {label} →',
    rule2label: 'Regla 2: Corta el problema de raíz', rule3label: 'Regla 3: Descifra el caso', finalLabel: 'Simulacro de brote',
    tipped: 'Resuelto', safe: 'Seguro', missed: 'Se te pasó',
    yardCleared: '¡Patio limpio!', timesUp: 'Se acabó el tiempo.',
    yardSummary: 'Eliminaste {c} de 8 criaderos',
    yardBonus: ' y ganaste {b} puntos extra por el tiempo que te sobró',
    yardHatched: '. Mientras tanto, nacieron unos {m} mosquitos. ',
    yardMore: '<br><br><strong>Y hay más:</strong> los huevos del <i>Aedes</i> se quedan pegados a las paredes de los recipientes, justo encima del nivel del agua, y aguantan hasta 8 meses secos. No basta con tirar el agua. Los CDC recomiendan, una vez por semana, vaciar y restregar, voltear, tapar o desechar todo lo que acumule agua.',
    playAgainYard: 'Salir de cacería otra vez',
    situation: 'Situación {i} de {n}', selectAll: 'marca todo lo que ayuda', check: 'Revisar',
    scenPts: '<b>+{p}</b> de 8 · verde punteado = una buena opción que no marcaste',
    nextSituation: 'Siguiente situación', finish: 'Terminar',
    scenDone: '<strong>Kit listo: {g} / 40.</strong> Lo que de verdad funciona: repelentes con eficacia comprobada, ropa que cubra la piel, mosquiteros en ventanas y camas, vacunas cuando existen y acabar con el agua estancada. Las pulseras y las velas de citronela no sirven.',
    replayScen: 'Repetir las situaciones',
    caseFile: 'Caso {i} de {n}', dxCorrect: '<b>{r}</b> de {n} aciertos',
    seeResults: 'Ver mi resultado', nextCase: 'Siguiente caso', nextQ: 'Siguiente pregunta',
    casesClosed: 'Casos resueltos',
    casesSummary: 'Acertaste {r} de {n}. Para recordar: en la primera semana, busca el virus (RT-PCR, NS1). Después, busca los anticuerpos (IgM), sin olvidar que virus parecidos pueden dar reacción cruzada. En el dengue, los signos de alarma suelen aparecer entre 24 y 48 horas después de que se quita la fiebre.',
    reviewCases: 'Repasar los casos',
    tlWarn: 'cuando aparecen los signos de alarma', tlFever: 'Fiebre', tlPcr: 'RT-PCR (virus)', tlNs1: 'NS1 (proteína)', tlIgm: 'Anticuerpos IgM',
    tlLasts: 'duran ~3 meses →', tlDay: 'Día de enfermedad', tlToday: 'hoy: día {d}',
    question: 'Pregunta {i} de {n}', streak: 'Racha: {n}', inARow: '¡{n} seguidas!',
    seeScore: 'Ver mi puntaje', drillComplete: 'Simulacro completado',
    finalSummary: 'Tu mejor racha: {b}. Sumando todas las reglas, hiciste <b>{t} / 400</b> y llegaste al nivel <b>{rank}</b>.',
    skipped: ' Juega las reglas que te faltan para subir de nivel.',
    playDrillAgain: 'Repetir el simulacro', backAll: 'Volver a las reglas',
    resetBtn: 'Borrar mi progreso', resetConfirm: 'Haz clic otra vez para borrarlo todo', resetDone: 'Progreso borrado.',
    careersLink: 'Ver carreras →', exploreCareers: 'Ver carreras', youAreHere: 'Estás aquí', stage: 'Etapa {n}',
    ptsRange: '{a}–{b} pts', learnMore: 'Más información', trainLabel: 'Formación: '
  },
  refs: {
    'cdc-dengue': 'CDC: Dengue', 'cdc-dengue-sx': 'CDC: Síntomas del dengue', 'cdc-dengue-tx': 'CDC: Tratamiento del dengue',
    'cdc-dengue-dx': 'CDC: Pruebas de dengue', 'who-dengue': 'OMS: Nota descriptiva sobre el dengue', 'cdc-zika': 'CDC: Zika',
    'cdc-zika-test': 'CDC: Pruebas de Zika', 'cdc-zika-prev': 'CDC: Prevención del Zika', 'who-zika': 'OMS: Nota descriptiva sobre el Zika',
    'cdc-chik': 'CDC: Chikungunya', 'cdc-chik-sx': 'CDC: Síntomas del chikungunya', 'who-chik': 'OMS: Nota descriptiva sobre el chikungunya',
    'cdc-yf': 'CDC: Fiebre amarilla', 'cdc-yf-vax': 'CDC: Vacuna contra la fiebre amarilla', 'cdc-wnv': 'CDC: Nilo Occidental',
    'cdc-wnv-cause': 'CDC: Cómo se transmite el Nilo Occidental', 'cdc-wnv-sx': 'CDC: Síntomas del Nilo Occidental',
    'cdc-wnv-dx': 'CDC: Pruebas del Nilo Occidental', 'cdc-aedes': 'CDC: Ciclo de vida del Aedes',
    'cdc-home': 'CDC: Control de mosquitos en casa', 'cdc-bites': 'CDC: Cómo prevenir picaduras'
  },
  rules: [
    { t: 'Entiende la cadena', d: 'Arma la cadena de transmisión en el orden correcto y descubre a qué temperatura el mosquito es más peligroso.' },
    { t: 'Corta el problema de raíz', d: 'Acaba con los criaderos de un patio contra reloj y elige la protección que de verdad funciona.' },
    { t: 'Descifra el caso', d: 'Seis pacientes, seis fiebres. Descubre el virus más probable, la prueba correcta para el día y qué hacer después.' },
    { t: 'Simulacro de brote', d: 'Diez preguntas rápidas sobre todo. Conviene jugarlo después de las tres reglas.' }
  ],
  facts: [
    'Solo la hembra del Aedes pica: necesita sangre para producir sus huevos.',
    'Los mosquitos que transmiten el dengue están activos de día.',
    'Los huevos del Aedes aguantan hasta 8 meses secos.',
    'Del huevo al mosquito adulto, el Aedes tarda de 7 a 10 días.',
    'La hembra del Aedes pone los huevos en las paredes internas de los recipientes, justo encima del nivel del agua.',
    'Liberar mosquitos con la bacteria Wolbachia redujo los casos de dengue en un 77% en un estudio en Yogyakarta, Indonesia.',
    'En la parte continental de EE. UU., el Nilo Occidental es la enfermedad transmitida por mosquitos más común.',
    'El dengue, el Zika y el chikungunya circulan entre unos 18 y 34 °C, con más transmisión entre 26 y 29 °C.',
    'Solo alrededor de 1 de cada 4 personas infectadas con dengue llega a enfermarse.',
    'En una prueba de laboratorio, una vela de citronela no hizo ninguna diferencia para los mosquitos.'
  ],
  cycle: [
    { tag: 'Persona infectada', t: 'Una persona con dengue tiene mucho virus circulando en la sangre.', hint: 'Empieza por dónde está el virus antes de que aparezca cualquier mosquito.' },
    { tag: 'Picadura', t: 'Una hembra de Aedes la pica y, junto con la sangre, se lleva el virus.', hint: '¿Cómo sale el virus de la persona y entra en el mosquito?' },
    { tag: 'Infección en el intestino', t: 'El virus infecta las células del intestino del mosquito.', hint: 'La sangre llega primero al estómago del mosquito. ¿Qué pasa ahí?' },
    { tag: 'Rumbo a la saliva', t: 'El virus sale del intestino y llega a las glándulas salivales.', hint: 'El virus está atrapado en el intestino. ¿A dónde tiene que llegar para salir otra vez?' },
    { tag: 'Transmisión', t: 'El mosquito pica a otra persona y le inyecta el virus con su saliva.', hint: 'Ahora el mosquito es infeccioso. ¿Qué hace después?' },
    { tag: 'Caso nuevo', t: 'Entre 4 y 10 días después, la nueva persona se enferma y ya tiene el virus en la sangre.', hint: '¿Qué le pasa a quien acaba de recibir la picadura?' }
  ],
  wnv: {
    q: 'Un abuelo se contagió del virus del Nilo Occidental por una picadura. Días después, otro mosquito Culex lo pica. ¿Puede ese mosquito llevarse el virus y pasárselo a la familia?',
    opts: [
      { t: 'No. La sangre de las personas nunca tiene suficiente virus para infectar a un mosquito.', why: 'Las personas son “huéspedes terminales” del Nilo Occidental: a diferencia de las aves, no llegan a tener tanto virus en la sangre. Las que mantienen el ciclo son las aves.' },
      { t: 'Sí, igual que con el dengue.', why: 'En el dengue, el ser humano es el huésped principal. En el Nilo Occidental es distinto: las personas son huéspedes terminales porque les llega muy poco virus a la sangre.' },
      { t: 'Solo si el mosquito lo pica en menos de una hora.', why: 'El tiempo no es el problema. La sangre humana nunca tiene suficiente virus del Nilo Occidental para infectar a un mosquito.' },
      { t: 'Sí, pero solo a través de su saliva.', why: 'El mosquito toma el virus de la sangre, no de la saliva. Y las personas son huéspedes terminales del Nilo Occidental.' }
    ]
  },
  yard: {
    tire: { name: 'Llanta vieja', lesson: 'Las llantas juntan agua de lluvia. Vacíalas, guárdalas bajo techo o deséchalas.' },
    bucket: { name: 'Balde', lesson: 'Vacíalo, restriégalo y guárdalo boca abajo.' },
    saucer: { name: 'Plato de maceta', lesson: 'Un clásico del dengue. Vacíalo y restriégalo una vez por semana.' },
    cans: { name: 'Lata y tapita de botella', lesson: 'Cualquier basura que junte agua puede volverse criadero. Tírala.' },
    birdbath: { name: 'Bebedero de pájaros', lesson: 'Puede quedarse, pero vacíalo y restriégalo una vez por semana.' },
    gutter: { name: 'Canaleta del techo', lesson: 'Las hojas tapan la canaleta y atrapan agua. Límpiala.' },
    tarp: { name: 'Lona sobre la leña', lesson: 'Una lona floja forma charcos en los pliegues. Estírala bien o sácale el agua.' },
    vase: { name: 'Florero del porche', lesson: 'Los floreros también cuentan. Vacíalos y restriégalos una vez por semana.' },
    flipped: { name: 'Balde guardado boca abajo', lesson: 'Ya es seguro. Voltear los recipientes es una de las medidas que recomiendan los CDC.' },
    barrel: { name: 'Tanque de agua bien tapado', lesson: 'Seguro. Con la tapa bien cerrada, el mosquito no puede entrar a poner huevos.' },
    trash: { name: 'Basurero bien tapado', lesson: 'Seguro. Un recipiente tapado no junta agua de lluvia.' },
    pot: { name: 'Maceta con agujero, sin plato', lesson: 'Segura. El agua se escurre sola.' }
  },
  scen: [
    { s: 'Entrenamiento de fútbol por la tarde, en una ciudad con brote de dengue.', opts: [
      { t: 'Repelente con eficacia comprobada, como DEET, picaridina, IR3535 o aceite de eucalipto de limón', why: 'Los CDC recomiendan repelentes registrados con estos ingredientes. Funcionan si se usan como indica la etiqueta.' },
      { t: 'Pulsera repelente', why: 'En una prueba de laboratorio, la mayoría de los repelentes “para llevar puestos” no redujo la cantidad de mosquitos atraídos.' },
      { t: 'Ropa ligera y holgada, de manga larga y pantalón largo, cuando se pueda', why: 'Mientras menos piel al aire, menos picaduras.' },
      { t: 'Olvidarse del repelente, porque los mosquitos solo pican de noche', why: 'Los mosquitos que transmiten el dengue están activos de día.' }
    ] },
    { s: 'Campamento en una noche de verano, justo después de que encontraran el virus del Nilo Occidental en aves de la zona.', opts: [
      { t: 'Repelente en la piel descubierta', why: 'Los repelentes registrados protegen contra los mosquitos que llevan el virus de las aves a las personas.' },
      { t: 'Ropa y equipo tratados con permetrina', why: 'La permetrina va en la tela. Nunca directamente sobre la piel.' },
      { t: 'Una vela de citronela junto a la carpa', why: 'En una prueba de laboratorio, la vela de citronela no hizo ninguna diferencia.' },
      { t: 'Mantener siempre cerrado el mosquitero de la carpa', why: 'El mosquitero bloquea a los mosquitos. Si tiene agujeros, hay que repararlos.' }
    ] },
    { s: 'Viaje en familia a una zona de América del Sur con riesgo de fiebre amarilla.', opts: [
      { t: 'Vacunarse contra la fiebre amarilla antes de viajar', why: 'Los CDC la recomiendan para la mayoría de los viajeros de EE. UU. que van a zonas de riesgo de África y América del Sur. Algunos países piden el comprobante.' },
      { t: 'Llevar repelente registrado en la maleta', why: 'La vacuna solo protege contra la fiebre amarilla. El repelente también ayuda contra el dengue, el Zika y el chikungunya.' },
      { t: 'Llevar antibióticos, por si acaso', why: 'Los antibióticos matan bacterias. Contra los virus no sirven de nada.' },
      { t: 'Saltarse la vacuna, porque con el repelente alcanza', why: 'El repelente reduce las picaduras, pero no las evita todas. Y, para la mayoría de las personas, una dosis de la vacuna protege por mucho tiempo.' }
    ] },
    { s: 'Tu hermano menor tiene dengue y se está recuperando en casa.', opts: [
      { t: 'Evitar que lo piquen, con mosquiteros en ventanas o en la cama', why: 'Durante la primera semana, el virus está en su sangre. Un mosquito que lo pique puede llevárselo y pasárselo al resto de la familia.' },
      { t: 'Vaciar y restregar todo lo que junte agua en la casa', why: 'Menos mosquitos cerca, menos oportunidades de que la cadena siga.' },
      { t: 'No preocuparse por las picaduras, total ya está enfermo', why: 'Justo ahora es cuando las picaduras importan. Él podría ser el comienzo de la siguiente cadena.' },
      { t: 'Darle aspirina o ibuprofeno para el dolor', why: 'Los CDC indican usar paracetamol (acetaminofén) y evitar la aspirina y el ibuprofeno.' }
    ] },
    { s: 'Una familiar embarazada está planeando un viaje a una zona con brote de Zika.', opts: [
      { t: 'Hablar con su médico antes de decidir', why: 'El Zika durante el embarazo puede causar microcefalia y otras malformaciones en el bebé.' },
      { t: 'Usar repelente registrado', why: 'Si se usan como indica la etiqueta, estos repelentes son seguros incluso durante el embarazo y la lactancia.' },
      { t: 'Si su pareja viaja, que use condón', why: 'El Zika también se transmite por vía sexual, y el condón reduce ese riesgo.' },
      { t: 'Vacunarse contra el Zika antes de ir', why: 'Todavía no existe una vacuna contra el Zika.' }
    ] }
  ],
  cases: [
    { who: 'Maya, 16 años', id: 'CASO 01', chart: [['Temp.', '39,6 °C'], ['Día de fiebre', '2'], ['Viaje', 'Volvió del Caribe hace 5 días; hay casos confirmados de arbovirus en la zona']],
      story: 'Fiebre alta, un dolor de cabeza fuerte, dolor detrás de los ojos y le duele todo el cuerpo, de los músculos a los huesos. También tiene náuseas.',
      qs: [
        { q: '¿Cuál es el virus más probable?', opts: [
          { t: 'Dengue', why: 'Los arbovirus son virus que transmiten insectos como los mosquitos, y varios dan fiebre. Pero dolor detrás de los ojos, dolor de músculos y huesos y náuseas, todo junto, es el cuadro clásico del dengue.' },
          { t: 'Virus del Nilo Occidental', why: 'La mayoría de las personas con Nilo Occidental ni siquiera tiene síntomas, y no suele causar dolor detrás de los ojos.' },
          { t: 'Fiebre amarilla', why: 'La fiebre amarilla se da en partes de África y América del Sur, no en el Caribe.' },
          { t: 'Enfermedad de Lyme', why: 'La enfermedad de Lyme la transmiten las garrapatas, no los mosquitos.' } ] },
        { q: 'Va por el segundo día de fiebre. ¿Qué pruebas tienen más sentido hoy?', opts: [
          { t: 'RT-PCR o NS1 para encontrar el virus, junto con una serología IgM', why: 'En los primeros 7 días, los CDC recomiendan RT-PCR o NS1 junto con una prueba de IgM.' },
          { t: 'Solo la serología IgM', why: 'Al principio de la enfermedad, puede que los anticuerpos todavía no aparezcan. Por eso los CDC recomiendan combinar la IgM con RT-PCR o NS1 en la primera semana.' },
          { t: 'Esperar un mes y recién ahí hacer pruebas', why: 'Esperar retrasa la atención. Es en la primera semana cuando se puede encontrar el virus mismo.' },
          { t: 'Atrapar un mosquito y analizarlo', why: 'Eso te dice algo sobre el mosquito, no sobre Maya.' } ] },
        { q: 'A Maya le duele mucho. ¿Qué debería tomar para el dolor y la fiebre?', opts: [
          { t: 'Paracetamol (acetaminofén), además de muchos líquidos y reposo', why: 'Es lo que recomiendan los CDC y la OMS.' },
          { t: 'Ibuprofeno', why: 'El ibuprofeno puede aumentar el riesgo de sangrado en el dengue.' },
          { t: 'Aspirina', why: 'La aspirina puede aumentar el riesgo de sangrado en el dengue.' },
          { t: 'Antibióticos', why: 'Los antibióticos no sirven contra los virus.' } ] }
      ] },
    { who: 'Maya, 16 años', id: 'CASO 01 · CONTROL', chart: [['Temp.', '37,2 °C'], ['Día de enfermedad', '5'], ['Resultado', 'NS1 positivo: dengue']],
      story: 'Ayer se le quitó la fiebre y pensó que ya estaba mejorando. Hoy amaneció con un dolor fuerte de estómago, vomitó cuatro veces desde la mañana y le sangran las encías al cepillarse.',
      qs: [
        { q: '¿Y ahora qué hay que hacer?', opts: [
          { t: 'Ir a urgencias ya', why: 'Dolor abdominal, vómitos 3 o más veces en 24 horas y encías que sangran son signos de alarma de dengue grave. Necesita atención inmediata.' },
          { t: 'Descansar en casa, porque ya no tiene fiebre', why: 'Esa es la trampa. En el dengue, los signos de alarma suelen aparecer justo después de que se quita la fiebre.' },
          { t: 'Tomar aspirina para el dolor de estómago', why: 'La aspirina aumenta el riesgo de sangrado. Necesita ir al hospital.' },
          { t: 'Esperar otro resultado de laboratorio antes de decidir', why: 'Un signo de alarma significa atención ahora, no después.' } ] },
        { q: '¿Por qué el día después de que se quita la fiebre es tan importante en el dengue?', opts: [
          { t: 'Los signos de alarma del dengue grave suelen aparecer entre 24 y 48 horas después de que se quita la fiebre', why: 'Por eso la familia tiene que seguir atenta, aunque la persona parezca estar mejor.' },
          { t: 'El virus vuelve con más fuerza después de la fiebre', why: 'Lo que importa es cuándo suelen aparecer los signos de alarma, no que el virus vuelva.' },
          { t: 'Es el único día en que funcionan las pruebas', why: 'Cada prueba funciona en un momento distinto. Échale un vistazo a la guía rápida del laboratorio.' },
          { t: 'No importa: la enfermedad ya terminó', why: 'Los signos de alarma suelen aparecer entre 24 y 48 horas después de que se quita la fiebre.' } ] }
      ] },
    { who: 'Jordan, 17 años', id: 'CASO 02', chart: [['Temp.', '36,9 °C'], ['Días desde que empezó la fiebre', '10'], ['Viaje', 'Volvió de América del Sur hace 2 semanas; hay casos confirmados de arbovirus en la zona']],
      story: 'La semana pasada tuvo fiebre, sarpullido y dolor de articulaciones. Ahora está bien, pero el médico quiere saber qué infección fue.',
      qs: [
        { q: 'Ya es el día 10. ¿Cuál es la mejor prueba?', opts: [
          { t: 'Serología IgM en sangre', why: 'Después del día 7, los CDC recomiendan la IgM como prueba principal. La IgM se puede detectar durante unos 3 meses.' },
          { t: 'Solo RT-PCR', why: 'La RT-PCR se recomienda en los primeros 7 días. Después, los CDC recomiendan la IgM.' },
          { t: 'Prueba NS1', why: 'El NS1 indica infección durante los primeros 7 días de enfermedad.' },
          { t: 'Ya no se puede hacer ninguna prueba, porque la fiebre pasó', why: 'Los anticuerpos IgM se pueden detectar durante unos 3 meses.' } ] },
        { q: 'Su IgM salió positiva para dengue y para Zika. ¿Qué significa?', opts: [
          { t: 'Los anticuerpos contra virus parecidos pueden dar reacción cruzada, así que hace falta una prueba de confirmación', why: 'El dengue y el Zika son flavivirus. Una prueba llamada PRNT ayuda a aclarar los falsos positivos de IgM.' },
          { t: 'Seguro tuvo los dos al mismo tiempo', why: 'La reacción cruzada entre virus parecidos es una limitación conocida de las pruebas de anticuerpos.' },
          { t: 'El laboratorio se equivocó', why: 'No es un error: es una limitación conocida de las pruebas de anticuerpos.' },
          { t: 'La RT-PCR y el NS1 tienen el mismo problema', why: 'Según los CDC, la RT-PCR y el NS1 no dan reacción cruzada con otros flavivirus. El problema está en las pruebas de anticuerpos.' } ] }
      ] },
    { who: 'Sra. Alvarez, 27 años', id: 'CASO 03', chart: [['Temp.', '37,9 °C'], ['Embarazo', '20 semanas'], ['Viaje', 'Volvió hace 3 días de una zona con casos confirmados de arbovirus, incluido el Zika']],
      story: 'Sarpullido leve, ojos rojos que le pican y dolor de articulaciones. Se siente apenas un poco mal.',
      qs: [
        { q: 'Los síntomas son leves. ¿Por qué hacerse la prueba de todos modos?', opts: [
          { t: 'El Zika en el embarazo puede causar microcefalia y otras malformaciones en el bebé', why: 'La OMS calcula que entre el 5 y el 15% de los bebés de madres infectadas con Zika durante el embarazo presentan alguna complicación.' },
          { t: 'Los síntomas leves siempre empeoran', why: 'Para el adulto, el Zika suele ser leve. La preocupación es el bebé.' },
          { t: 'Si los síntomas son leves, no hace falta la prueba', why: 'En el embarazo, incluso un Zika leve importa.' },
          { t: 'Para empezar la vacuna contra el Zika', why: 'Todavía no existe una vacuna contra el Zika.' } ] },
        { q: '¿Cuándo y cómo se le debe hacer la prueba?', opts: [
          { t: 'Lo antes posible, mientras todavía tenga síntomas, con una prueba que busque el virus (como la RT-PCR)', why: 'Los CDC aconsejan hacer la prueba lo antes posible, mientras haya síntomas. La OMS explica que la RT-PCR detecta el virus en la sangre u otros líquidos del cuerpo.' },
          { t: 'Una prueba de infección de garganta por estreptococo', why: 'Esa es una infección de garganta causada por bacterias. Objetivo equivocado.' },
          { t: 'Solo cuando el sarpullido haya desaparecido del todo', why: 'La prueba funciona mejor mientras todavía hay síntomas.' },
          { t: 'Esperar a que nazca el bebé', why: 'Hacer la prueba ahora permite seguir de cerca el embarazo.' } ] }
      ] },
    { who: 'Sr. Okafor, 68 años', id: 'CASO 04', chart: [['Temp.', '39,1 °C'], ['Época', 'Fines del verano'], ['Viaje', 'Ninguno']],
      story: 'Todas las tardes trabaja en su jardín. Tiene fiebre, un dolor de cabeza muy fuerte, el cuello rígido y, hoy, se le ve confundido.',
      qs: [
        { q: '¿Cuál es el virus más probable?', opts: [
          { t: 'Virus del Nilo Occidental', why: 'Se contagió cerca de casa a fines del verano, y el Nilo Occidental se propaga localmente por mosquitos que pican aves infectadas. Su edad también aumenta el riesgo de que la enfermedad afecte el cerebro.' },
          { t: 'Dengue', why: 'La confusión y el cuello rígido apuntan a una infección del cerebro, algo que encaja mucho mejor con el Nilo Occidental que con el dengue.' },
          { t: 'Zika', why: 'El Zika suele ser leve y normalmente no causa confusión ni cuello rígido.' },
          { t: 'Chikungunya', why: 'El chikungunya causa sobre todo fiebre y dolor de articulaciones, no confusión ni cuello rígido.' } ] },
        { q: 'La confusión y el cuello rígido sugieren que el virus pudo llegar al cerebro. ¿Cuál es la primera prueba que hay que pedir?', opts: [
          { t: 'Serología IgM contra el Nilo Occidental en sangre y/o líquido cefalorraquídeo', why: 'Es la primera prueba que recomiendan los CDC. Si sale positiva, hay que confirmarla por la reacción cruzada entre anticuerpos.' },
          { t: 'Prueba NS1', why: 'El NS1 es una prueba para dengue.' },
          { t: 'Radiografía de tórax', why: 'El problema no está en los pulmones.' },
          { t: 'Ninguna prueba, solo esperar', why: 'La confusión es una emergencia. Necesita ir al hospital y que lo evalúen ya.' } ] },
        { q: '¿Debe preocuparse la familia de que los mosquitos se lleven el virus de él?', opts: [
          { t: 'No. Las personas son huéspedes terminales del Nilo Occidental.', why: 'Aun así, la familia debe seguir evitando las picaduras, porque las aves y los mosquitos de la zona tienen el virus.' },
          { t: 'Sí, igual que con el dengue', why: 'La sangre de las personas no llega a tener suficiente virus para infectar mosquitos con el Nilo Occidental.' },
          { t: 'Solo si lo pican de noche', why: 'La hora del día no importa. Las personas no tienen suficiente virus para infectar mosquitos.' },
          { t: 'Sí, pero solo durante un día', why: 'Las personas no les pasan el Nilo Occidental a los mosquitos en ningún momento.' } ] }
      ] },
    { who: 'Kai, 15 años', id: 'CASO 05', chart: [['Temp.', '39,4 °C'], ['Día de fiebre', '3'], ['Viaje', 'Volvió del sur de Asia hace 1 semana; hay casos confirmados de arbovirus en la zona']],
      story: 'Fiebre y un dolor tan fuerte en las dos muñecas y los dos tobillos que Kai ni siquiera puede abrir una botella de agua.',
      qs: [
        { q: '¿Cuál es el virus más probable?', opts: [
          { t: 'Chikungunya', why: 'La fiebre y el dolor fuerte de articulaciones son sus síntomas más comunes. El nombre viene del idioma kimakonde y significa “el que se dobla”, por las personas encorvadas de dolor.' },
          { t: 'Virus del Nilo Occidental', why: 'La mayoría de las infecciones por Nilo Occidental no dan síntomas, y el dolor fuerte de articulaciones no es típico.' },
          { t: 'Fiebre amarilla', why: 'La fiebre amarilla se da en partes de África y América del Sur, no en Asia.' },
          { t: 'Infección de garganta por estreptococo', why: 'Es una infección de garganta causada por bacterias.' } ] },
        { q: '¿Qué puede esperar Kai?', opts: [
          { t: 'El dolor de articulaciones puede durar semanas o incluso meses', why: 'El dolor puede ser fuerte, complicar el día a día y durar meses, por eso el seguimiento es importante.' },
          { t: 'Se le pasa en un día', why: 'El dolor de articulaciones suele durar mucho más que la fiebre.' },
          { t: 'Un medicamento lo cura enseguida', why: 'Según los CDC, no hay un medicamento específico contra el chikungunya. El cuidado se basa en reposo, líquidos y alivio del dolor.' },
          { t: 'Va a quedar paralizado para siempre', why: 'Eso no es lo esperable, aunque las articulaciones pueden seguir doliendo por bastante tiempo.' } ] }
      ] }
  ],
  final: [
    { q: '¿Por qué solo pica la hembra del Aedes?', opts: ['Necesita sangre para producir sus huevos', 'El macho no tiene boca', 'La hembra es más grande y tiene más hambre', 'Para propagar virus a propósito'] },
    { q: '¿A qué hora están más activos los mosquitos del dengue?', opts: ['Durante el día', 'Solo a medianoche', 'Solo en invierno', 'Solo dentro de casa, de noche'], explain: 'Por eso protegerse de día hace la diferencia contra el dengue.' },
    { q: '¿Cuánto tiempo aguantan sin agua los huevos del Aedes?', opts: ['Hasta unos 8 meses', 'Unas horas', 'Un día', 'No sobreviven secos'], explain: 'Por eso hay que restregar los recipientes, no solo vaciarlos.' },
    { q: '¿Qué es el periodo de incubación extrínseco?', opts: ['El tiempo hasta que el mosquito infectado puede transmitir el virus', 'El tiempo hasta que la persona tiene síntomas', 'Cuánto vive el mosquito', 'Cuánto tardan los huevos en eclosionar'], explain: 'El tiempo hasta que la persona tiene síntomas es el periodo de incubación intrínseco.' },
    { q: '¿En qué rango de temperatura se propagan más el dengue, el Zika y el chikungunya?', opts: ['26–29 °C', '10–15 °C', '35–40 °C', 'La temperatura no importa'], explain: 'La transmisión ocurre entre unos 18 y 34 °C.' },
    { q: '¿Por qué las personas no les devuelven el Nilo Occidental a los mosquitos?', opts: ['Les llega muy poco virus a la sangre', 'Los mosquitos no pican a las personas', 'El virus muere a la temperatura del cuerpo', 'Todo el mundo está vacunado'], explain: 'Las que mantienen el ciclo son las aves.' },
    { q: 'Segundo día de fiebre, después de un viaje a una zona con dengue. ¿Qué pruebas pedir?', opts: ['RT-PCR o NS1, más una serología IgM', 'Solo la serología IgM', 'Una prueba de garganta', 'Ninguna prueba hasta el día 30'], explain: 'Al principio, busca el virus. Después del día 7, la IgM es la prueba principal.' },
    { q: '¿Qué analgésico conviene usar cuando podría ser dengue?', opts: ['Paracetamol (acetaminofén)', 'Aspirina', 'Ibuprofeno', 'Da igual'], explain: 'La aspirina y el ibuprofeno pueden aumentar el riesgo de sangrado.' },
    { q: '¿Contra cuál de estos virus una sola dosis de vacuna protege por mucho tiempo a la mayoría de las personas?', opts: ['Fiebre amarilla', 'Zika', 'Nilo Occidental', 'Ninguno'], explain: 'La mayoría de las personas ni siquiera necesita refuerzo. Contra el Zika, todavía no hay vacuna.' },
    { q: 'La Wolbachia se está usando contra el dengue. ¿Qué es?', opts: ['Una bacteria que hace que el mosquito se infecte menos con dengue', 'Un repelente nuevo', 'Una vacuna contra el dengue', 'Un tipo de mosquitero'], explain: 'En Yogyakarta, Indonesia, liberar mosquitos con Wolbachia redujo los casos de dengue en un 77% y las hospitalizaciones en un 86%.' }
  ],
  stages: [
    { when: 'En la escuela', text: 'Ponle ganas a biología, química y matemáticas. Participa en ferias y clubes de ciencias, o pregunta en la secretaría de salud de tu ciudad por visitas y voluntariado.' },
    { when: 'En la universidad', text: 'Estudia biología, microbiología, química o salud pública y busca prácticas de investigación, incluido el trabajo de campo atrapando mosquitos.' },
    { when: 'Inicio de carrera', text: 'Trabaja como técnico de laboratorio o de campo, en salud pública o como asistente de investigación. Mucha gente hace una maestría en esta etapa; en EE. UU., es la formación típica para empezar como epidemiólogo.' },
    { when: 'Liderando investigaciones', text: 'Dirige tus propios estudios como científico con doctorado o con un título de medicina o de medicina veterinaria. Hay programas que combinan dos títulos, como medicina veterinaria y doctorado.' }
  ],
  careers: [
    { t: 'Virólogo', tag: 'Regla 1 · La cadena', d: 'Estudia cómo están hechos los virus, cómo se multiplican y cómo causan enfermedades, incluido cómo atraviesan el cuerpo del mosquito.', train: 'Una licenciatura para empezar en el laboratorio. Quienes dirigen investigaciones suelen tener doctorado.', org: 'Oficina de Estadísticas Laborales de EE. UU.' },
    { t: 'Entomólogo médico', tag: 'Reglas 1 y 2', d: 'Estudia los insectos que transmiten enfermedades: dónde se crían los mosquitos, qué especie lleva qué virus y cómo les afecta la temperatura.', train: 'Una licenciatura en biología o un área afín, muchas veces seguida de maestría y doctorado.', org: 'Sociedad Entomológica de América' },
    { t: 'Especialista en control de vectores', tag: 'Regla 2 · Prevención', d: 'Encuentra y elimina criaderos, atrapa mosquitos para ver si llevan virus y dirige programas locales de control.', train: 'Mucha gente empieza como técnico de campo y después pasa a coordinar equipos.', org: 'Asociación Americana de Control de Mosquitos' },
    { t: 'Epidemiólogo', tag: 'Reglas 2 y 3', d: 'Investiga los patrones y las causas de las enfermedades: dónde empieza un brote, quién se enferma y qué frena la transmisión.', train: 'Normalmente una maestría, muchas veces en salud pública.', org: 'Oficina de Estadísticas Laborales de EE. UU.' },
    { t: 'Profesional de laboratorio clínico', tag: 'Regla 3 · Diagnóstico', d: 'Hace las pruebas que confirman infecciones, como RT-PCR, NS1 e IgM.', train: 'Una licenciatura.', org: 'Oficina de Estadísticas Laborales de EE. UU.' },
    { t: 'Investigador en salud', tag: 'Todas las reglas', d: 'Investiga para mejorar la salud humana, por ejemplo desarrollando vacunas o probando nuevas formas de controlar mosquitos.', train: 'Normalmente un doctorado, un título de medicina o ambos.', org: 'Oficina de Estadísticas Laborales de EE. UU.' },
    { t: 'Médico veterinario', tag: 'Una Salud', d: 'Cuida la salud de los animales y ayuda a proteger la salud pública. El Nilo Occidental, por ejemplo, circula entre aves y también infecta a caballos.', train: 'Un título de medicina veterinaria.', org: 'Oficina de Estadísticas Laborales de EE. UU.' },
    { t: 'Educador en salud', tag: 'Regla 2 · Prevención', d: 'Enseña a las comunidades a protegerse, con lecciones como las de este juego.', train: 'Al menos una licenciatura, muchas veces en educación o promoción de la salud.', org: 'Oficina de Estadísticas Laborales de EE. UU.' }
  ]
};

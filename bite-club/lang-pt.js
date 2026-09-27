/* Bite Club: Portuguese (Brazil). Text only; structure, answers and sources come from index.html. */
window.BC_I18N = window.BC_I18N || {};
window.BC_I18N.pt = {
  html: {
    'refsLink': 'Referências',
    'h.eyebrow': 'Um jogo sobre os vírus que viajam de mosquito',
    'h.rule1': 'A primeira regra do Bite Club: <em>nada de picadas.</em>',
    'h.lead': 'Dengue, Zika, chikungunya, febre amarela e febre do Nilo Ocidental têm algo em comum: todas pegam carona num mosquito para passar de um hospedeiro para outro. Descubra como essa cadeia funciona, como cortá-la e como os médicos descobrem quem está infectado.',
    'h.start': 'Começar pela Regra 1',
    'h.guideBtn': 'Guia de campo',
    'h.careersBtn': 'Carreiras',
    'h.swatTag': 'Aquecimento · acerte o mosquito',
    'rulesTitle': 'As regras',
    'guideTitle': 'Guia de campo',
    'guideSub': 'Cinco vírus, dois tipos de mosquito',
    'table': '<thead><tr><th>Vírus</th><th>Mosquito principal</th><th>Onde circula</th><th>O que causa</th><th>Tem vacina?</th></tr></thead><tbody>' +
      '<tr><td class="v">Dengue</td><td><i>Aedes aegypti</i> e <i>Ae. albopictus</i>. Ativos durante o dia.<sup class="cite" data-r="who-dengue"></sup></td><td>Regiões tropicais e subtropicais do mundo inteiro</td><td>Só cerca de 1 em cada 4 infectados fica doente.<sup class="cite" data-r="cdc-dengue"></sup> Os sintomas são febre com dor atrás dos olhos, dor nos músculos, nas articulações ou nos ossos, enjoo e manchas vermelhas na pele.<sup class="cite" data-r="cdc-dengue-sx"></sup> Pegar dengue pela segunda vez aumenta o risco da forma grave.<sup class="cite" data-r="who-dengue"></sup></td><td>Uma vacina está liberada em alguns países. A OMS recomenda o uso só entre 6 e 16 anos, em áreas de alta transmissão.<sup class="cite" data-r="who-dengue"></sup></td></tr>' +
      '<tr><td class="v">Zika</td><td><i>Aedes</i>. Também passa por relação sexual e da gestante para o bebê.<sup class="cite" data-r="cdc-zika"></sup></td><td>Regiões tropicais e subtropicais</td><td>Costuma ser leve ou nem dar sintomas: manchas na pele, febre, olhos vermelhos, dor nas articulações. Na gravidez, pode causar microcefalia e outras malformações no bebê.<sup class="cite" data-r="who-zika"></sup></td><td>Ainda não existe<sup class="cite" data-r="who-zika"></sup></td></tr>' +
      '<tr><td class="v">Chikungunya</td><td><i>Aedes</i></td><td>África, Ásia, Américas e outras regiões</td><td>Febre e dor nas articulações, que pode ser forte e durar meses.<sup class="cite" data-r="cdc-chik-sx"></sup></td><td>Duas vacinas já foram aprovadas em vários países, mas ainda são pouco acessíveis.<sup class="cite" data-r="who-chik"></sup> O CDC recomenda a vacina para alguns viajantes.<sup class="cite" data-r="cdc-chik"></sup></td></tr>' +
      '<tr><td class="v">Febre amarela</td><td><i>Aedes</i> e mosquitos parecidos</td><td>Partes da África e da América do Sul<sup class="cite" data-r="cdc-yf"></sup></td><td>Muitas vezes é leve, mas algumas pessoas desenvolvem a forma grave, com icterícia (pele e olhos amarelados) e sangramentos.<sup class="cite" data-r="cdc-yf"></sup></td><td>Sim. Para a maioria das pessoas, uma dose protege por muito tempo, sem precisar de reforço.<sup class="cite" data-r="cdc-yf-vax"></sup></td></tr>' +
      '<tr><td class="v">Nilo Ocidental</td><td><i>Culex</i>, o pernilongo. O vírus circula entre esses mosquitos e as aves.<sup class="cite" data-r="cdc-wnv-cause"></sup></td><td>No mundo todo. Nos EUA continentais, é a doença transmitida por mosquito mais comum.<sup class="cite" data-r="cdc-wnv"></sup></td><td>8 em cada 10 infectados não sentem nada. Menos de 1 em cada 100 desenvolve a forma grave, que atinge o cérebro ou a medula. Quem tem 65 anos ou mais corre 3 vezes mais risco.<sup class="cite" data-r="cdc-wnv-sx"></sup></td><td>Não existe para pessoas</td></tr></tbody>',
    'back': '← Voltar às regras',
    'c.eyebrow': 'Regra 1 de 3 · A cadeia de transmissão',
    'c.title': 'Entenda a cadeia',
    'c.intro': 'O mosquito não fabrica vírus: ele só leva o vírus de uma pessoa infectada até a próxima. Cada elo dessa cadeia leva um tempo, e cada um é uma chance de interrompê-la.',
    'c.aTitle': 'Parte A: Monte a cadeia',
    'c.aSub': 'A dengue está se espalhando por um bairro. Toque nas etapas na ordem certa, começando pela pessoa infectada. Cada erro custa pontos.',
    'c.loop': 'Depois da etapa 6, tudo recomeça na etapa 1.',
    'c.brk': '<div class="brk"><b>Período de incubação extrínseco (etapas 3–4)</b>O tempo que o vírus passa dentro do mosquito até que ele consiga transmiti-lo. Costuma levar cerca de uma semana e fica mais curto quando esquenta (veja a Parte C).<sup class="cite" data-r="cdc-wnv-cause"></sup><sup class="cite" data-r="mordecai"></sup></div>' +
      '<div class="brk"><b>Período de incubação intrínseco (etapa 6)</b>O tempo entre a picada e os primeiros sintomas na pessoa. Na dengue, geralmente de 4 a 10 dias.<sup class="cite" data-r="who-dengue"></sup></div>',
    'c.replay': 'Jogar a Parte A de novo',
    'c.bTitle': 'Parte B: Beco sem saída',
    'c.bSub': 'O vírus do Nilo Ocidental segue outro caminho: os mosquitos <i>Culex</i> o passam de ave para ave, e as pessoas entram na história por acaso.',
    'c.cTitle': 'Parte C: Laboratório de temperatura',
    'c.cSub': 'Um mosquito infectado só vira ameaça se viver o bastante para completar o período de incubação extrínseco. O calor acelera o vírus, mas também encurta a vida do mosquito. Arraste o controle, encontre a temperatura em que o mosquito tem mais chance de se tornar infeccioso e confirme para ver a curva completa.',
    'c.statTemp': 'Temperatura',
    'c.statEip': 'Período de incubação extrínseco',
    'c.statLife': 'Vida média do mosquito',
    'c.statChance': 'Chance de o mosquito infectado viver o bastante para transmitir o vírus',
    'c.lock': 'Confirmar temperatura',
    'c.note': 'Este é um modelo simplificado, feito para ensinar, sobre a dengue no <i>Aedes aegypti</i>. O formato da curva segue dados reais: Mordecai et al. (2017) mostraram que dengue, Zika e chikungunya circulam entre cerca de 18 e 34 °C, com o pico entre 26 e 29 °C. Os números servem para ilustrar, não para prever.',
    'p.eyebrow': 'Regra 2 de 3 · Prevenção',
    'p.title': 'Corte o mal pela raiz',
    'p.intro': 'A fêmea do <i>Aedes</i> põe os ovos na parede de dentro dos recipientes, logo acima da linha da água. Em 7 a 10 dias, esses ovos já viraram mosquitos adultos.<sup class="cite" data-r="cdc-aedes"></sup> Sem água parada, não tem próxima geração.',
    'p.aTitle': 'Parte A: Caça aos criadouros',
    'p.aSub': 'Você tem 40 segundos para limpar este quintal. Toque em tudo que estiver acumulando água parada. A cada segundo com água, nascem mais mosquitos. Atenção: algumas coisas já estão seguras, e tocar nelas faz você perder tempo.',
    'p.time': 'Tempo restante',
    'p.hatched': 'Mosquitos que nasceram',
    'p.points': 'Pontos',
    'p.cover': '<b>Preparado?</b> Tem 8 criadouros escondidos neste quintal. Ache todos, e rápido.',
    'p.start': 'Valendo!',
    'p.bTitle': 'Parte B: Monte seu kit de proteção',
    'p.bSub': 'Em cada situação, marque <b>todas</b> as opções que realmente protegem e depois confira. Tem produto famoso que não funciona.',
    'd.eyebrow': 'Regra 3 de 3 · Diagnóstico',
    'd.title': 'Decifre o caso',
    'd.intro': 'Esses vírus causam febres parecidas, então os médicos juntam pistas: por onde o paciente andou, o que está doendo e há quantos dias ele está doente. Na hora de escolher o exame, o dia é o que mais pesa. No começo, procura-se o próprio vírus. Depois, os anticorpos que o corpo produziu contra ele.',
    'd.sheet': 'Cola do laboratório',
    'd.sheetSub': 'Linha do tempo da dengue · dia 0 = primeiro dia de febre',
    'd.legend': '<span><i style="background:var(--water)"></i>RT-PCR encontra o material genético do vírus</span><span><i style="background:var(--water);opacity:.5"></i>NS1 encontra uma proteína do vírus da dengue</span><span><i style="background:var(--amber-fill)"></i>Anticorpos IgM (a primeira resposta do corpo)</span>',
    'd.next': 'Próxima',
    'd.note': 'Os pacientes são fictícios, criados para você praticar. Se você ou alguém próximo tiver febre depois de picadas de mosquito ou de uma viagem, procure um serviço de saúde. Este jogo não substitui uma consulta.',
    'f.eyebrow': 'Desafio final · 10 perguntas',
    'f.title': 'Simulado de surto',
    'f.intro': 'Um pouco de tudo: cadeia, prevenção e diagnóstico. Acerte em sequência para ter do que se gabar. Cada acerto vale 10 pontos.',
    'ft.teachers': 'Para professores',
    'ft.p1': 'Pensado para o ensino médio. Reserve de 35 a 45 minutos para as três regras e o simulado final, que podem ser jogados em qualquer ordem. O progresso fica salvo só no navegador de cada aluno. A tabela do guia de campo funciona bem como ponto de partida para discussões em sala.',
    'ft.p2': 'Toda resposta do jogo mostra de onde vem a informação. Os números pequenos levam à lista completa de referências, que está em inglês. As fontes foram conferidas em setembro de 2026.',
    'ft.credit': 'Criado por <a href="/">Ana Alice Pimenta Pereira</a>.',
    'refsTitle': 'Referências',
    'k.eyebrow': 'Além do jogo · Carreiras',
    'k.title': 'Quebre a cadeia na vida real',
    'k.intro': 'Seu nível no Bite Club corresponde a uma etapa de uma carreira de verdade na pesquisa. Quem hoje rastreia, estuda e combate esses vírus começou exatamente onde você está.',
    'k.pathTitle': 'Seu caminho',
    'k.pathSub': 'Os quatro níveis do jogo acompanham as etapas de uma carreira científica.',
    'k.cardsTitle': 'Profissões que quebram a cadeia',
    'k.cardsSub': 'Cada uma usa algo que você praticou no jogo.',
    'k.note': 'As informações sobre carreiras vêm do Departamento de Estatísticas do Trabalho dos EUA (BLS) e de sociedades científicas americanas, e os links estão em inglês. A formação muda de país para país, então vale conversar com um professor, com a orientação da escola ou com alguém que trabalhe na área.'
  },
  aria: {
    brand: 'Início do Bite Club',
    lang: 'Idioma',
    swat: 'Um mosquito voando. Toque nele para acertá-lo e ver uma curiosidade.',
    tsvg: 'Gráfico da chance de transmissão de acordo com a temperatura',
    tlsvg: 'Linha do tempo mostrando quando cada exame de dengue funciona'
  },
  ui: {
    src1: 'Fonte: ', srcN: 'Fontes: ',
    correct: 'Acertou!', notQuite: 'Quase.',
    swatted: '{n} abatidos',
    pipsLabel: '{n} de 4 concluídas',
    totalPts: '{n} / 400 pts',
    rankLine: 'Nível: <b>{rank}</b> · {n} / 400',
    rank1: 'Inspetor Novato', rank2: 'Técnico de Campo', rank3: 'Agente de Endemias', rank4: 'Caçador de Vírus',
    best: 'Recorde: {n} / 100', notPlayed: 'Ainda não jogado',
    step: 'Etapa {n}',
    perfectChain: 'Cadeia perfeita, sem nenhum erro!',
    chainDone1: 'Cadeia completa, com 1 erro.',
    chainDoneN: 'Cadeia completa, com {n} erros.',
    hint: 'Dica: {h}',
    upTo: 'até <b>{n}</b> pts', ptsOf: '<b>{n}</b> / {max} pts',
    tempAxis: 'Temperatura (°C)',
    lockReveal: 'Confirme uma temperatura para ver a curva completa',
    peakReal: 'pico nos dados reais [{n}]',
    days: '{n} dias',
    tempFb: '<strong>Você escolheu {t} °C.</strong> Neste modelo, o risco é maior por volta de 28 °C. Nos dados reais, o pico fica entre 26 e 29 °C, e a transmissão praticamente some abaixo de uns 18 °C ou acima de 34 °C. No frio, o vírus demora semanas para chegar à saliva, e a maioria dos mosquitos morre antes disso. No calor extremo, o vírus é rápido, mas os mosquitos morrem em poucos dias. É por isso que a temperatura influencia onde e quando esses vírus se espalham.',
    ruleComplete: 'Regra concluída', pointsOf: '{n} / 100 pontos', nextRule: 'Próxima: {label} →',
    rule2label: 'Regra 2: Corte o mal pela raiz', rule3label: 'Regra 3: Decifre o caso', finalLabel: 'Simulado de surto',
    tipped: 'Resolvido', safe: 'Seguro', missed: 'Ficou para trás',
    yardCleared: 'Quintal limpo!', timesUp: 'O tempo acabou.',
    yardSummary: 'Você eliminou {c} de 8 criadouros',
    yardBonus: ' e ganhou {b} pontos de bônus pelo tempo que sobrou',
    yardHatched: '. Enquanto isso, nasceram cerca de {m} mosquitos. ',
    yardMore: '<br><br><strong>E tem mais:</strong> os ovos do <i>Aedes</i> ficam grudados na parede dos recipientes, logo acima da linha da água, e aguentam até 8 meses no seco. Só virar a água não resolve. O CDC recomenda, uma vez por semana, esvaziar e esfregar, virar, tampar ou jogar fora tudo que junta água.',
    playAgainYard: 'Caçar criadouros de novo',
    situation: 'Situação {i} de {n}', selectAll: 'marque tudo que ajuda', check: 'Conferir',
    scenPts: '<b>+{p}</b> de 8 · verde tracejado = uma boa opção que você não marcou',
    nextSituation: 'Próxima situação', finish: 'Concluir',
    scenDone: '<strong>Kit montado: {g} / 40.</strong> O que funciona de verdade: repelentes com eficácia comprovada, roupas que cobrem a pele, telas e mosquiteiros, vacinas quando existem e acabar com a água parada. Pulseiras e velas de citronela não funcionam.',
    replayScen: 'Jogar as situações de novo',
    caseFile: 'Caso {i} de {n}', dxCorrect: '<b>{r}</b> de {n} acertos',
    seeResults: 'Ver meu resultado', nextCase: 'Próximo caso', nextQ: 'Próxima pergunta',
    casesClosed: 'Casos resolvidos',
    casesSummary: 'Você acertou {r} de {n}. Para lembrar: na primeira semana, procure o vírus (RT-PCR, NS1). Depois, procure os anticorpos (IgM), sem esquecer que vírus parecidos podem dar reação cruzada. Na dengue, os sinais de alarme costumam aparecer de 24 a 48 horas depois que a febre vai embora.',
    reviewCases: 'Revisar os casos',
    tlWarn: 'quando surgem os sinais de alarme', tlFever: 'Febre', tlPcr: 'RT-PCR (vírus)', tlNs1: 'NS1 (proteína)', tlIgm: 'Anticorpos IgM',
    tlLasts: 'duram ~3 meses →', tlDay: 'Dia de doença', tlToday: 'hoje: dia {d}',
    question: 'Pergunta {i} de {n}', streak: 'Sequência: {n}', inARow: '{n} seguidas!',
    seeScore: 'Ver minha pontuação', drillComplete: 'Simulado concluído',
    finalSummary: 'Maior sequência: {b}. Somando todas as regras, você fez <b>{t} / 400</b> e chegou ao nível <b>{rank}</b>.',
    skipped: ' Jogue as regras que ficaram faltando para subir de nível.',
    playDrillAgain: 'Refazer o simulado', backAll: 'Voltar às regras',
    resetBtn: 'Apagar meu progresso', resetConfirm: 'Clique de novo para apagar tudo', resetDone: 'Progresso apagado.',
    careersLink: 'Ver carreiras →', exploreCareers: 'Ver carreiras', youAreHere: 'Você está aqui', stage: 'Etapa {n}',
    ptsRange: '{a}–{b} pts', learnMore: 'Saiba mais', trainLabel: 'Formação: '
  },
  refs: {
    'cdc-dengue': 'CDC: Dengue', 'cdc-dengue-sx': 'CDC: Sintomas da dengue', 'cdc-dengue-tx': 'CDC: Tratamento da dengue',
    'cdc-dengue-dx': 'CDC: Exames para dengue', 'who-dengue': 'OMS: Ficha sobre dengue', 'cdc-zika': 'CDC: Zika',
    'cdc-zika-test': 'CDC: Exames para Zika', 'cdc-zika-prev': 'CDC: Prevenção do Zika', 'who-zika': 'OMS: Ficha sobre Zika',
    'cdc-chik': 'CDC: Chikungunya', 'cdc-chik-sx': 'CDC: Sintomas da chikungunya', 'who-chik': 'OMS: Ficha sobre chikungunya',
    'cdc-yf': 'CDC: Febre amarela', 'cdc-yf-vax': 'CDC: Vacina da febre amarela', 'cdc-wnv': 'CDC: Nilo Ocidental',
    'cdc-wnv-cause': 'CDC: Como o Nilo Ocidental se espalha', 'cdc-wnv-sx': 'CDC: Sintomas do Nilo Ocidental',
    'cdc-wnv-dx': 'CDC: Exames para Nilo Ocidental', 'cdc-aedes': 'CDC: Ciclo de vida do Aedes',
    'cdc-home': 'CDC: Controle de mosquitos em casa', 'cdc-bites': 'CDC: Como evitar picadas'
  },
  rules: [
    { t: 'Entenda a cadeia', d: 'Monte a cadeia de transmissão na ordem certa e descubra em que temperatura o mosquito é mais perigoso.' },
    { t: 'Corte o mal pela raiz', d: 'Acabe com os criadouros de um quintal contra o relógio e escolha a proteção que funciona de verdade.' },
    { t: 'Decifre o caso', d: 'Seis pacientes, seis febres. Descubra o vírus mais provável, o exame certo para o dia e o que fazer em seguida.' },
    { t: 'Simulado de surto', d: 'Dez perguntas rápidas sobre tudo. Vale mais a pena depois das três regras.' }
  ],
  facts: [
    'Só a fêmea do Aedes pica: ela precisa de sangue para produzir os ovos.',
    'Os mosquitos que transmitem a dengue são ativos durante o dia.',
    'Os ovos do Aedes aguentam até 8 meses no seco.',
    'Do ovo ao mosquito adulto, o Aedes leva de 7 a 10 dias.',
    'A fêmea do Aedes põe os ovos na parede de dentro dos recipientes, logo acima da linha da água.',
    'Soltar mosquitos com a bactéria Wolbachia derrubou os casos de dengue em 77% num estudo em Yogyakarta, na Indonésia.',
    'Nos EUA continentais, o Nilo Ocidental é a doença transmitida por mosquito mais comum.',
    'Dengue, Zika e chikungunya circulam entre uns 18 e 34 °C, com mais transmissão entre 26 e 29 °C.',
    'Só cerca de 1 em cada 4 pessoas infectadas pela dengue chega a ficar doente.',
    'Num teste de laboratório, uma vela de citronela não fez diferença nenhuma para os mosquitos.'
  ],
  cycle: [
    { tag: 'Pessoa infectada', t: 'Uma pessoa com dengue está com muito vírus circulando no sangue.', hint: 'Comece por onde o vírus está antes de qualquer mosquito entrar na história.' },
    { tag: 'Picada', t: 'Uma fêmea de Aedes pica essa pessoa e, junto com o sangue, suga o vírus.', hint: 'Como o vírus sai da pessoa e entra no mosquito?' },
    { tag: 'Infecção no intestino', t: 'O vírus infecta as células do intestino do mosquito.', hint: 'O sangue vai primeiro para o estômago do mosquito. O que acontece por lá?' },
    { tag: 'Rumo à saliva', t: 'O vírus escapa do intestino e chega às glândulas salivares.', hint: 'O vírus está preso no intestino. Aonde ele precisa chegar para sair de novo?' },
    { tag: 'Transmissão', t: 'O mosquito pica outra pessoa e injeta o vírus junto com a saliva.', hint: 'Agora o mosquito é infeccioso. Qual é o próximo passo dele?' },
    { tag: 'Novo caso', t: 'De 4 a 10 dias depois, a nova pessoa adoece, já com o vírus no sangue.', hint: 'O que acontece com quem acabou de ser picado?' }
  ],
  wnv: {
    q: 'Um avô pegou o vírus do Nilo Ocidental numa picada. Dias depois, outro mosquito Culex pica esse avô. Esse mosquito consegue pegar o vírus dele e passar para a família?',
    opts: [
      { t: 'Não. O sangue das pessoas nunca tem vírus suficiente para infectar um mosquito.', why: 'As pessoas são “hospedeiros terminais” do Nilo Ocidental: diferente das aves, elas não chegam a ter tanto vírus no sangue. Quem mantém o ciclo são as aves.' },
      { t: 'Sim, igual acontece com a dengue.', why: 'Na dengue, o ser humano é o principal hospedeiro. No Nilo Ocidental é diferente: as pessoas são hospedeiros terminais, porque pouco vírus chega ao sangue.' },
      { t: 'Só se o mosquito picar em menos de uma hora.', why: 'O tempo não é a questão. O sangue humano nunca tem vírus do Nilo Ocidental suficiente para infectar um mosquito.' },
      { t: 'Sim, mas só pela saliva dele.', why: 'O mosquito pega o vírus do sangue, não da saliva. E as pessoas são hospedeiros terminais do Nilo Ocidental.' }
    ]
  },
  yard: {
    tire: { name: 'Pneu velho', lesson: 'Pneu junta água da chuva. Esvazie, guarde coberto ou descarte.' },
    bucket: { name: 'Balde', lesson: 'Esvazie, esfregue e guarde de boca para baixo.' },
    saucer: { name: 'Pratinho de vaso', lesson: 'Um clássico da dengue. Esvazie e esfregue uma vez por semana.' },
    cans: { name: 'Latinha e tampinha de garrafa', lesson: 'Qualquer lixo que junta água pode virar criadouro. Jogue fora.' },
    birdbath: { name: 'Bebedouro de passarinho', lesson: 'Pode ficar, mas esvazie e esfregue uma vez por semana.' },
    gutter: { name: 'Calha do telhado', lesson: 'Folhas entopem a calha e prendem água. Faça a limpeza.' },
    tarp: { name: 'Lona sobre a lenha', lesson: 'Lona frouxa forma poças nas dobras. Estique bem ou tire a água.' },
    vase: { name: 'Vaso de flores na varanda', lesson: 'Vaso de flor também conta. Esvazie e esfregue uma vez por semana.' },
    flipped: { name: 'Balde guardado de boca para baixo', lesson: 'Já está seguro. Virar recipientes é uma das medidas recomendadas pelo CDC.' },
    barrel: { name: 'Caixa d’água bem tampada', lesson: 'Segura. Com a tampa bem fechada, o mosquito não entra para pôr ovos.' },
    trash: { name: 'Lixeira bem tampada', lesson: 'Segura. Recipiente tampado não junta água da chuva.' },
    pot: { name: 'Vaso com furo, sem pratinho', lesson: 'Seguro. A água escoa direto.' }
  },
  scen: [
    { s: 'Treino de futebol à tarde, numa cidade com surto de dengue.', opts: [
      { t: 'Repelente com eficácia comprovada, como DEET, icaridina, IR3535 ou óleo de eucalipto-limão', why: 'O CDC recomenda repelentes registrados com esses ingredientes. Funcionam quando usados do jeito certo.' },
      { t: 'Pulseira repelente', why: 'Num teste de laboratório, a maioria dos repelentes “de usar no corpo” não diminuiu a quantidade de mosquitos atraídos.' },
      { t: 'Camiseta de manga comprida e calça, leves e folgadas, quando der', why: 'Quanto menos pele de fora, menos picadas.' },
      { t: 'Deixar o repelente de lado, porque mosquito só pica à noite', why: 'Os mosquitos que transmitem a dengue são ativos durante o dia.' }
    ] },
    { s: 'Acampamento numa noite de verão, logo depois de encontrarem o vírus do Nilo Ocidental em aves da região.', opts: [
      { t: 'Repelente na pele que fica de fora', why: 'Repelentes registrados protegem contra os mosquitos que levam o vírus das aves para as pessoas.' },
      { t: 'Roupas e equipamentos tratados com permetrina', why: 'A permetrina vai no tecido. Nunca direto na pele.' },
      { t: 'Uma vela de citronela ao lado da barraca', why: 'Num teste de laboratório, a vela de citronela não fez diferença nenhuma.' },
      { t: 'Manter a tela da barraca sempre fechada', why: 'A tela barra os mosquitos. Se tiver furo, conserte.' }
    ] },
    { s: 'Viagem em família para uma região da América do Sul com risco de febre amarela.', opts: [
      { t: 'Tomar a vacina da febre amarela antes de viajar', why: 'O CDC recomenda a vacina para a maioria dos viajantes dos EUA que vão a áreas de risco na África e na América do Sul. Alguns países exigem o comprovante.' },
      { t: 'Levar repelente registrado na mala', why: 'A vacina só protege contra febre amarela. O repelente ajuda também contra dengue, Zika e chikungunya.' },
      { t: 'Levar antibiótico, por via das dúvidas', why: 'Antibiótico mata bactéria. Contra vírus, não faz nada.' },
      { t: 'Pular a vacina, porque o repelente já basta', why: 'O repelente diminui as picadas, mas não evita todas. E, para a maioria das pessoas, uma dose da vacina protege por muito tempo.' }
    ] },
    { s: 'Seu irmão mais novo está com dengue, se recuperando em casa.', opts: [
      { t: 'Evitar que ele seja picado, com telas ou mosquiteiro', why: 'Na primeira semana, o vírus está no sangue dele. Um mosquito que o picar pode pegar o vírus e passar para o resto da família.' },
      { t: 'Esvaziar e esfregar tudo que junta água pela casa', why: 'Menos mosquito por perto, menos chance de a cadeia continuar.' },
      { t: 'Não se preocupar com picadas, já que ele já está doente', why: 'É justamente agora que as picadas importam. Ele pode ser o começo da próxima cadeia.' },
      { t: 'Dar aspirina ou ibuprofeno para a dor', why: 'O CDC orienta usar paracetamol e evitar aspirina e ibuprofeno.' }
    ] },
    { s: 'Uma parente grávida está planejando viajar para uma área com surto de Zika.', opts: [
      { t: 'Conversar com o médico antes de decidir', why: 'O Zika na gravidez pode causar microcefalia e outras malformações no bebê.' },
      { t: 'Usar repelente registrado', why: 'Usados do jeito certo, esses repelentes são seguros até na gravidez e na amamentação.' },
      { t: 'O parceiro que viajar deve usar camisinha', why: 'O Zika também passa por relação sexual, e a camisinha reduz esse risco.' },
      { t: 'Tomar a vacina contra o Zika antes de ir', why: 'Ainda não existe vacina contra o Zika.' }
    ] }
  ],
  cases: [
    { who: 'Maya, 16 anos', id: 'CASO 01', chart: [['Temp.', '39,6 °C'], ['Dia de febre', '2'], ['Viagem', 'Voltou do Caribe há 5 dias; há casos confirmados de arbovírus na região']],
      story: 'Febre alta, dor de cabeça forte, dor atrás dos olhos e o corpo todo doendo, dos músculos aos ossos. Também está enjoada.',
      qs: [
        { q: 'Qual é o vírus mais provável?', opts: [
          { t: 'Dengue', why: 'Arbovírus são vírus transmitidos por insetos como o mosquito, e vários deles dão febre. Mas dor atrás dos olhos, dor nos músculos e nos ossos e enjoo, tudo junto, é o quadro clássico da dengue.' },
          { t: 'Vírus do Nilo Ocidental', why: 'A maioria das pessoas infectadas pelo Nilo Ocidental nem tem sintomas, e ele não costuma causar dor atrás dos olhos.' },
          { t: 'Febre amarela', why: 'A febre amarela ocorre em partes da África e da América do Sul, não no Caribe.' },
          { t: 'Doença de Lyme', why: 'A doença de Lyme é transmitida por carrapato, não por mosquito.' } ] },
        { q: 'Ela está no 2º dia de febre. Quais exames fazem mais sentido hoje?', opts: [
          { t: 'RT-PCR ou NS1 para achar o vírus, junto com a sorologia IgM', why: 'Nos primeiros 7 dias, o CDC recomenda RT-PCR ou NS1 junto com um teste de IgM.' },
          { t: 'Só a sorologia IgM', why: 'No começo da doença, os anticorpos podem ainda não ter aparecido. Por isso o CDC recomenda juntar o IgM com RT-PCR ou NS1 na primeira semana.' },
          { t: 'Esperar um mês e só então fazer exames', why: 'Esperar atrasa o cuidado. É na primeira semana que dá para encontrar o próprio vírus.' },
          { t: 'Capturar um mosquito e testar', why: 'Isso diz algo sobre o mosquito, não sobre a Maya.' } ] },
        { q: 'A Maya está com muita dor. O que ela deve tomar para a dor e a febre?', opts: [
          { t: 'Paracetamol, além de bastante líquido e repouso', why: 'É o que o CDC e a OMS recomendam.' },
          { t: 'Ibuprofeno', why: 'O ibuprofeno pode aumentar o risco de sangramento na dengue.' },
          { t: 'Aspirina (AAS)', why: 'A aspirina pode aumentar o risco de sangramento na dengue.' },
          { t: 'Antibiótico', why: 'Antibiótico não funciona contra vírus.' } ] }
      ] },
    { who: 'Maya, 16 anos', id: 'CASO 01 · RETORNO', chart: [['Temp.', '37,2 °C'], ['Dia de doença', '5'], ['Resultado', 'NS1 positivo: dengue']],
      story: 'A febre passou ontem e ela achou que já estava melhorando. Hoje acordou com uma dor forte na barriga, vomitou quatro vezes desde cedo e a gengiva sangra quando ela escova os dentes.',
      qs: [
        { q: 'E agora, o que fazer?', opts: [
          { t: 'Ir ao pronto-socorro agora', why: 'Dor na barriga, vômitos 3 ou mais vezes em 24 horas e gengiva sangrando são sinais de alarme da dengue grave. Ela precisa de atendimento imediato.' },
          { t: 'Descansar em casa, já que a febre passou', why: 'Essa é a pegadinha. Na dengue, os sinais de alarme costumam aparecer justamente depois que a febre vai embora.' },
          { t: 'Tomar aspirina para a dor na barriga', why: 'A aspirina aumenta o risco de sangramento. Ela precisa ir ao hospital.' },
          { t: 'Esperar outro resultado de exame antes de decidir', why: 'Sinal de alarme quer dizer atendimento agora, não depois.' } ] },
        { q: 'Por que o dia seguinte ao fim da febre é tão importante na dengue?', opts: [
          { t: 'Os sinais de alarme da dengue grave costumam aparecer de 24 a 48 horas depois que a febre vai embora', why: 'Por isso a família precisa continuar de olho, mesmo quando a pessoa parece melhor.' },
          { t: 'O vírus volta mais forte depois da febre', why: 'O que importa é quando os sinais de alarme costumam aparecer, não uma volta do vírus.' },
          { t: 'É o único dia em que os exames funcionam', why: 'Cada exame funciona num momento diferente. Dê uma olhada na cola do laboratório.' },
          { t: 'Não tem importância: a doença já acabou', why: 'Os sinais de alarme costumam aparecer de 24 a 48 horas depois que a febre vai embora.' } ] }
      ] },
    { who: 'Jordan, 17 anos', id: 'CASO 02', chart: [['Temp.', '36,9 °C'], ['Dias desde o início da febre', '10'], ['Viagem', 'Voltou da América do Sul há 2 semanas; há casos confirmados de arbovírus na região']],
      story: 'Semana passada teve febre, manchas na pele e dor nas articulações. Agora está bem, mas o médico quer saber qual foi a infecção.',
      qs: [
        { q: 'Já é o 10º dia. Qual é o melhor exame?', opts: [
          { t: 'Sorologia IgM no sangue', why: 'Depois do 7º dia, o CDC recomenda o IgM como exame principal. Dá para detectar o IgM por cerca de 3 meses.' },
          { t: 'Só RT-PCR', why: 'O RT-PCR é indicado nos primeiros 7 dias. Depois disso, o CDC recomenda o IgM.' },
          { t: 'Teste NS1', why: 'O NS1 indica infecção nos primeiros 7 dias de doença.' },
          { t: 'Não dá mais para testar, a febre já passou', why: 'Os anticorpos IgM podem ser detectados por cerca de 3 meses.' } ] },
        { q: 'O IgM dele deu positivo para dengue e para Zika. O que isso quer dizer?', opts: [
          { t: 'Anticorpos contra vírus parecidos podem dar reação cruzada, então é preciso um exame de confirmação', why: 'Dengue e Zika são flavivírus. Um teste chamado PRNT ajuda a esclarecer resultados falso-positivos de IgM.' },
          { t: 'Com certeza ele teve os dois ao mesmo tempo', why: 'A reação cruzada entre vírus parecidos é uma limitação conhecida dos testes de anticorpos.' },
          { t: 'O laboratório errou', why: 'Não é erro: é uma limitação conhecida dos testes de anticorpos.' },
          { t: 'RT-PCR e NS1 têm o mesmo problema', why: 'Segundo o CDC, RT-PCR e NS1 não dão reação cruzada com outros flavivírus. O problema está nos testes de anticorpos.' } ] }
      ] },
    { who: 'Sra. Alvarez, 27 anos', id: 'CASO 03', chart: [['Temp.', '37,9 °C'], ['Gestação', '20 semanas'], ['Viagem', 'Voltou há 3 dias de uma área com casos confirmados de arbovírus, inclusive Zika']],
      story: 'Manchas leves na pele, olhos vermelhos coçando e dor nas articulações. Ela se sente só um pouco indisposta.',
      qs: [
        { q: 'Os sintomas são leves. Por que fazer o exame mesmo assim?', opts: [
          { t: 'O Zika na gravidez pode causar microcefalia e outras malformações no bebê', why: 'A OMS estima que 5 a 15% dos bebês de gestantes infectadas pelo Zika têm alguma complicação.' },
          { t: 'Sintomas leves sempre pioram', why: 'Para o adulto, o Zika costuma ser leve. A preocupação é com o bebê.' },
          { t: 'Se os sintomas são leves, não precisa de exame', why: 'Na gravidez, até um Zika leve faz diferença.' },
          { t: 'Para ela começar a tomar a vacina contra o Zika', why: 'Ainda não existe vacina contra o Zika.' } ] },
        { q: 'Quando e como ela deve ser testada?', opts: [
          { t: 'O quanto antes, enquanto ainda tem sintomas, com um exame que procura o vírus (como o RT-PCR)', why: 'O CDC orienta testar o quanto antes, ainda com sintomas. A OMS explica que o RT-PCR encontra o vírus no sangue ou em outros líquidos do corpo.' },
          { t: 'Um teste para infecção de garganta por estreptococo', why: 'Isso é uma infecção de garganta causada por bactéria. Alvo errado.' },
          { t: 'Só depois que as manchas sumirem de vez', why: 'O exame funciona melhor enquanto ainda há sintomas.' },
          { t: 'Esperar o bebê nascer', why: 'Testar agora permite acompanhar a gravidez de perto.' } ] }
      ] },
    { who: 'Sr. Okafor, 68 anos', id: 'CASO 04', chart: [['Temp.', '39,1 °C'], ['Época', 'Fim do verão'], ['Viagem', 'Nenhuma']],
      story: 'Todo fim de tarde ele mexe no jardim. Está com febre, uma dor de cabeça muito forte, pescoço duro e, hoje, parece confuso.',
      qs: [
        { q: 'Qual é o vírus mais provável?', opts: [
          { t: 'Vírus do Nilo Ocidental', why: 'Ele se infectou perto de casa no fim do verão, e o Nilo Ocidental se espalha localmente por mosquitos que picam aves infectadas. A idade dele também aumenta o risco de a doença atingir o cérebro.' },
          { t: 'Dengue', why: 'Confusão e pescoço duro apontam para uma infecção no cérebro, o que combina muito mais com o Nilo Ocidental do que com a dengue.' },
          { t: 'Zika', why: 'O Zika costuma ser leve e normalmente não causa confusão nem pescoço duro.' },
          { t: 'Chikungunya', why: 'A chikungunya causa principalmente febre e dor nas articulações, não confusão nem pescoço duro.' } ] },
        { q: 'Confusão e pescoço duro sugerem que o vírus pode ter chegado ao cérebro. Qual é o primeiro exame a pedir?', opts: [
          { t: 'Sorologia IgM para Nilo Ocidental no sangue e/ou no líquor', why: 'É o primeiro exame recomendado pelo CDC. Se der positivo, precisa ser confirmado, por causa da reação cruzada entre anticorpos.' },
          { t: 'Teste NS1', why: 'O NS1 é um exame para dengue.' },
          { t: 'Raio-X do tórax', why: 'O problema não está nos pulmões.' },
          { t: 'Nenhum exame, é só esperar', why: 'Confusão é emergência. Ele precisa ir ao hospital e ser examinado agora.' } ] },
        { q: 'A família precisa se preocupar com mosquitos pegando o vírus dele?', opts: [
          { t: 'Não. As pessoas são hospedeiros terminais do Nilo Ocidental.', why: 'Mas a família deve continuar evitando picadas, porque as aves e os mosquitos da região estão com o vírus.' },
          { t: 'Sim, igual à dengue', why: 'O sangue das pessoas não chega a ter vírus suficiente para infectar mosquitos com o Nilo Ocidental.' },
          { t: 'Só se ele for picado à noite', why: 'A hora do dia não importa. As pessoas não têm vírus suficiente para infectar mosquitos.' },
          { t: 'Sim, mas só por um dia', why: 'As pessoas não passam o Nilo Ocidental para mosquitos em momento nenhum.' } ] }
      ] },
    { who: 'Kai, 15 anos', id: 'CASO 05', chart: [['Temp.', '39,4 °C'], ['Dia de febre', '3'], ['Viagem', 'Voltou do Sul da Ásia há 1 semana; há casos confirmados de arbovírus na região']],
      story: 'Febre e uma dor tão forte nos punhos e nos tornozelos, dos dois lados, que o Kai não consegue nem abrir uma garrafa de água.',
      qs: [
        { q: 'Qual é o vírus mais provável?', opts: [
          { t: 'Chikungunya', why: 'Febre e dor forte nas articulações são os sintomas mais comuns. O nome vem da língua kimakonde e quer dizer “aquele que se dobra”, por causa das pessoas curvadas de dor.' },
          { t: 'Vírus do Nilo Ocidental', why: 'A maioria das infecções pelo Nilo Ocidental não dá sintomas, e dor forte nas articulações não é típica.' },
          { t: 'Febre amarela', why: 'A febre amarela ocorre em partes da África e da América do Sul, não na Ásia.' },
          { t: 'Infecção de garganta por estreptococo', why: 'É uma infecção de garganta causada por bactéria.' } ] },
        { q: 'O que o Kai pode esperar?', opts: [
          { t: 'A dor nas articulações pode durar semanas ou até meses', why: 'A dor pode ser forte, atrapalhar o dia a dia e durar meses, por isso o acompanhamento é importante.' },
          { t: 'Passa em um dia', why: 'A dor nas articulações costuma durar bem mais que a febre.' },
          { t: 'Um remédio resolve rapidinho', why: 'Segundo o CDC, não existe remédio específico contra a chikungunya. O cuidado é repouso, líquidos e alívio da dor.' },
          { t: 'Vai ficar paralisado para sempre', why: 'Isso não é o esperado, embora as articulações possam continuar doloridas por bastante tempo.' } ] }
      ] }
  ],
  final: [
    { q: 'Por que só a fêmea do Aedes pica?', opts: ['Ela precisa de sangue para produzir os ovos', 'O macho não tem boca', 'A fêmea é maior e sente mais fome', 'Para espalhar vírus de propósito'] },
    { q: 'Em que horário os mosquitos da dengue ficam mais ativos?', opts: ['Durante o dia', 'Só à meia-noite', 'Só no inverno', 'Só dentro de casa, à noite'], explain: 'Por isso a proteção durante o dia faz diferença contra a dengue.' },
    { q: 'Quanto tempo os ovos do Aedes aguentam sem água?', opts: ['Até uns 8 meses', 'Algumas horas', 'Um dia', 'Eles não sobrevivem no seco'], explain: 'Por isso é preciso esfregar os recipientes, e não só esvaziar.' },
    { q: 'O que é o período de incubação extrínseco?', opts: ['O tempo até o mosquito infectado conseguir transmitir o vírus', 'O tempo até a pessoa ter sintomas', 'Quanto tempo o mosquito vive', 'Quanto tempo os ovos levam para eclodir'], explain: 'O tempo até a pessoa ter sintomas é o período de incubação intrínseco.' },
    { q: 'Dengue, Zika e chikungunya se espalham mais em que faixa de temperatura?', opts: ['26–29 °C', '10–15 °C', '35–40 °C', 'A temperatura não importa'], explain: 'A transmissão acontece entre uns 18 e 34 °C.' },
    { q: 'Por que as pessoas não devolvem o Nilo Ocidental para os mosquitos?', opts: ['Pouco vírus chega ao sangue delas', 'Mosquito não pica gente', 'O vírus morre na temperatura do corpo', 'Todo mundo é vacinado'], explain: 'Quem mantém o ciclo são as aves.' },
    { q: '2º dia de febre, depois de uma viagem para uma área com dengue. Quais exames pedir?', opts: ['RT-PCR ou NS1, mais a sorologia IgM', 'Só a sorologia IgM', 'Um teste de garganta', 'Nenhum exame até o 30º dia'], explain: 'No começo, procure o vírus. Depois do 7º dia, o IgM é o exame principal.' },
    { q: 'Qual remédio para dor usar quando pode ser dengue?', opts: ['Paracetamol', 'Aspirina', 'Ibuprofeno', 'Tanto faz'], explain: 'Aspirina e ibuprofeno podem aumentar o risco de sangramento.' },
    { q: 'Contra qual destes vírus uma única dose de vacina protege a maioria das pessoas por muito tempo?', opts: ['Febre amarela', 'Zika', 'Nilo Ocidental', 'Nenhum deles'], explain: 'Para a maioria das pessoas, nem é preciso reforço. Contra o Zika, ainda não existe vacina.' },
    { q: 'A Wolbachia está sendo usada contra a dengue. O que ela é?', opts: ['Uma bactéria que deixa o mosquito menos propenso a se infectar com dengue', 'Um repelente novo', 'Uma vacina contra a dengue', 'Um tipo de mosquiteiro'], explain: 'Em Yogyakarta, na Indonésia, soltar mosquitos com Wolbachia derrubou os casos de dengue em 77% e as internações em 86%.' }
  ],
  stages: [
    { when: 'No ensino médio', text: 'Capriche em biologia, química e matemática. Participe de feiras e clubes de ciências, ou procure a secretaria de saúde da sua cidade para saber sobre visitas e voluntariado.' },
    { when: 'Na faculdade', text: 'Curse biologia, biomedicina, microbiologia, química ou saúde pública e corra atrás de iniciação científica, inclusive com trabalho de campo capturando mosquitos.' },
    { when: 'Início de carreira', text: 'Trabalhe como técnico de laboratório ou de campo, na saúde pública ou como assistente de pesquisa. Muita gente faz mestrado nessa fase; nos EUA, é a formação típica para começar como epidemiologista.' },
    { when: 'Liderando pesquisas', text: 'Coordene seus próprios estudos como cientista com doutorado ou formação em medicina ou medicina veterinária. Há programas que combinam dois títulos, como medicina veterinária e doutorado.' }
  ],
  careers: [
    { t: 'Virologista', tag: 'Regra 1 · A cadeia', d: 'Estuda como os vírus são feitos, como se multiplicam e como causam doenças, inclusive como atravessam o corpo do mosquito.', train: 'Graduação para começar no laboratório. Quem lidera pesquisas geralmente tem doutorado.', org: 'Departamento de Estatísticas do Trabalho dos EUA' },
    { t: 'Entomologista médico', tag: 'Regras 1 e 2', d: 'Estuda os insetos que transmitem doenças: onde os mosquitos se criam, que espécie carrega qual vírus e como a temperatura mexe com eles.', train: 'Graduação em biologia ou área afim, muitas vezes seguida de mestrado e doutorado.', org: 'Sociedade Entomológica da América' },
    { t: 'Especialista em controle de vetores', tag: 'Regra 2 · Prevenção', d: 'Encontra e elimina criadouros, captura mosquitos para testar se carregam vírus e comanda programas locais de controle.', train: 'Muita gente começa como técnico de campo e depois passa a coordenar equipes.', org: 'Associação Americana de Controle de Mosquitos' },
    { t: 'Epidemiologista', tag: 'Regras 2 e 3', d: 'Investiga os padrões e as causas das doenças: onde um surto começa, quem adoece e o que interrompe a transmissão.', train: 'Geralmente mestrado, muitas vezes em saúde pública.', org: 'Departamento de Estatísticas do Trabalho dos EUA' },
    { t: 'Profissional de análises clínicas', tag: 'Regra 3 · Diagnóstico', d: 'Faz os exames que confirmam infecções, como RT-PCR, NS1 e IgM.', train: 'Graduação.', org: 'Departamento de Estatísticas do Trabalho dos EUA' },
    { t: 'Pesquisador em saúde', tag: 'Todas as regras', d: 'Faz pesquisas para melhorar a saúde humana, como desenvolver vacinas ou testar novas formas de controlar mosquitos.', train: 'Geralmente doutorado, formação em medicina, ou as duas coisas.', org: 'Departamento de Estatísticas do Trabalho dos EUA' },
    { t: 'Médico veterinário', tag: 'Saúde Única', d: 'Cuida da saúde dos animais e ajuda a proteger a saúde pública. O Nilo Ocidental, por exemplo, circula entre aves e também infecta cavalos.', train: 'Graduação em medicina veterinária.', org: 'Departamento de Estatísticas do Trabalho dos EUA' },
    { t: 'Educador em saúde', tag: 'Regra 2 · Prevenção', d: 'Ensina as comunidades a se protegerem, com lições como as deste jogo.', train: 'Pelo menos uma graduação, geralmente em educação ou promoção da saúde.', org: 'Departamento de Estatísticas do Trabalho dos EUA' }
  ]
};

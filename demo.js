const { generateKeywords } = require('./lib/keyword-builder.js');
const { clearKeywords } = require('./lib/keyword-cleaner.js');

function getStopwords() {
  return  [
    'a',
    'acerca',
    'adeus',
    'agora',
    'ainda',
    'algmas',
    'algo',
    'algumas',
    'alguns',
    'ali',
    'além',
    'ambos',
    'ano',
    'anos',
    'antes',
    'ao',
    'aos',
    'apenas',
    'apoio',
    'apontar',
    'após',
    'aquela',
    'aquelas',
    'aquele',
    'aqueles',
    'aqui',
    'aquilo',
    'as',
    'assim',
    'através',
    'atrás',
    'até',
    'aí',
    'baixo',
    'bastante',
    'bem',
    'bom',
    'breve',
    'cada',
    'caminho',
    'catorze',
    'cedo',
    'cento',
    'certamente',
    'certeza',
    'cima',
    'cinco',
    'coisa',
    'com',
    'como',
    'comprido',
    'conhecido',
    'conselho',
    'contra',
    'corrente',
    'custa',
    'cá',
    'da',
    'daquela',
    'daquele',
    'dar',
    'das',
    'de',
    'debaixo',
    'demais',
    'dentro',
    'depois',
    'desde',
    'desligado',
    'dessa',
    'desse',
    'desta',
    'deste',
    'deve',
    'devem',
    'deverá',
    'dez',
    'dezanove',
    'dezasseis',
    'dezassete',
    'dezoito',
    'dia',
    'diante',
    'direita',
    'diz',
    'dizem',
    'dizer',
    'do',
    'dois',
    'dos',
    'doze',
    'duas',
    'dá',
    'dão',
    'dúvida',
    'e',
    'ela',
    'elas',
    'ele',
    'eles',
    'em',
    'embora',
    'enquanto',
    'entre',
    'então',
    'era',
    'essa',
    'essas',
    'esse',
    'esses',
    'esta',
    'estado',
    'estar',
    'estará',
    'estas',
    'estava',
    'este',
    'estes',
    'esteve',
    'estive',
    'estivemos',
    'estiveram',
    'estiveste',
    'estivestes',
    'estou',
    'está',
    'estás',
    'estão',
    'eu',
    'exemplo',
    'falta',
    'fará',
    'favor',
    'faz',
    'fazeis',
    'fazem',
    'fazemos',
    'fazer',
    'fazes',
    'fazia',
    'faço',
    'fez',
    'fim',
    'final',
    'foi',
    'fomos',
    'for',
    'fora',
    'foram',
    'forma',
    'foste',
    'fostes',
    'fui',
    'geral',
    'grande',
    'grandes',
    'grupo',
    'hoje',
    'horas',
    'há',
    'iniciar',
    'inicio',
    'ir',
    'irá',
    'isso',
    'ista',
    'iste',
    'isto',
    'já',
    'lado',
    'ligado',
    'local',
    'logo',
    'longe',
    'lugar',
    'lá',
    'maior',
    'maioria',
    'maiorias',
    'mais',
    'mal',
    'mas',
    'me',
    'meio',
    'menor',
    'menos',
    'meses',
    'mesmo',
    'meu',
    'meus',
    'mil',
    'minha',
    'minhas',
    'momento',
    'muito',
    'muitos',
    'máximo',
    'mês',
    'na',
    'nada',
    'naquela',
    'naquele',
    'nas',
    'nem',
    'nenhuma',
    'nessa',
    'nesse',
    'nesta',
    'neste',
    'no',
    'noite',
    'nome',
    'nos',
    'nossa',
    'nossas',
    'nosso',
    'nossos',
    'nova',
    'nove',
    'novo',
    'novos',
    'num',
    'numa',
    'nunca',
    'não',
    'nível',
    'nós',
    'número',
    'o',
    'obra',
    'obrigada',
    'obrigado',
    'oitava',
    'oitavo',
    'oito',
    'onde',
    'ontem',
    'onze',
    'os',
    'ou',
    'outra',
    'outras',
    'outro',
    'outros',
    'para',
    'parece',
    'parte',
    'partir',
    'pegar',
    'pela',
    'pelas',
    'pelo',
    'pelos',
    'perto',
    'pessoas',
    'pode',
    'podem',
    'poder',
    'poderá',
    'podia',
    'ponto',
    'pontos',
    'por',
    'porque',
    'porquê',
    'posição',
    'possivelmente',
    'posso',
    'possível',
    'pouca',
    'pouco',
    'povo',
    'primeira',
    'primeiro',
    'promeiro',
    'próprio',
    'próximo',
    'puderam',
    'pôde',
    'põe',
    'põem',
    'qual',
    'qualquer',
    'quando',
    'quanto',
    'quarta',
    'quarto',
    'quatro',
    'que',
    'quem',
    'quer',
    'quero',
    'questão',
    'quieto',
    'quinta',
    'quinto',
    'quinze',
    'quê',
    'relação',
    'sabe',
    'saber',
    'se',
    'segunda',
    'segundo',
    'sei',
    'seis',
    'sem',
    'sempre',
    'ser',
    'seria',
    'sete',
    'seu',
    'seus',
    'sexta',
    'sexto',
    'sim',
    'sistema',
    'sob',
    'sobre',
    'sois',
    'somente',
    'somos',
    'sou',
    'sua',
    'suas',
    'são',
    'sétima',
    'sétimo',
    'tal',
    'talvez',
    'também',
    'tanto',
    'tarde',
    'te',
    'tem',
    'temos',
    'tempo',
    'tendes',
    'tenho',
    'tens',
    'tentar',
    'tentaram',
    'tente',
    'tentei',
    'ter',
    'terceira',
    'terceiro',
    'teu',
    'teus',
    'teve',
    'tipo',
    'tive',
    'tivemos',
    'tiveram',
    'tiveste',
    'tivestes',
    'toda',
    'todas',
    'todo',
    'todos',
    'trabalhar',
    'trabalho',
    'treze',
    'três',
    'tu',
    'tua',
    'tuas',
    'tudo',
    'tão',
    'têm',
    'um',
    'uma',
    'umas',
    'uns',
    'usa',
    'usar',
    'vai',
    'vais',
    'valor',
    'veja',
    'vem',
    'vens',
    'ver',
    'verdade',
    'verdadeiro',
    'vez',
    'vezes',
    'viagem',
    'vindo',
    'vinte',
    'você',
    'vocês',
    'vos',
    'vossa',
    'vossas',
    'vosso',
    'vossos',
    'vários',
    'vão',
    'vêm',
    'vós',
    'zero',
    'à',
    'às',
    'área',
    'é',
    'és',
    'último',
    'só',
    'Em',
    'ai',
    'aí',
    'dá',
    'www',
    'http',
    'https',
  ];
}

function getText() {
  var text = 'A gente te pega pela mão e só solta na hora da aprovação :) Enem e vestibulares estão com tudo! A gente sabe que dá. Em 2016, os alunos do nosso curso preparatório ficaram até 106 pontos na frente dos concorrentes no ENEM e detonaram nas provas de vestibulares! Depois de estudar com o Descomplica, você aumenta as chances de entrar na faculdade e sair dizendo por aí: Passei!Quer ajuda para estudar para as provas?Escolha o seu plano e experimente o Descomplica por 7 dias grátis! Formas de pagamento: Cartão de crédito ou Cartão pré-pago do Google PlayAqui, você se diverte enquanto aprende! Temos os professores mais divertidos do Brasil em um excelente curso preparatório online com video aulas ao vivo e online!.Eles vão te ajudar a arrasar nas questões de vestibulares das melhores faculdades e a estudar para provas do ENEM! No Descomplica, você aprende o que importa para passar no Enem e vestibulares:◉ Receba plano de estudos personalizado, semanalmente;◉ Acesse vídeo aulas online e offline;◉ Tenha redação corrigidas mensalmente por especialistas; ◉ Obtenha acesso a todo conteúdo do Ensino Médio e Vestibulares!Isso mesmo, um cursinho preparatório online completo na palma da sua mão! Conheça as funcionalidades do Descomplica:VÍDEO AULAS ONLINE E OFFLINE. Você pode fazer nossos cursos do Enem por meio de aulas online e offline. Ficou fácil estudar para o Enem 2017 e as questões de vestibulares com as nossas vídeo aulas dos cursos preparatórios! ◉ Aulas ao vivo todos os dias! Sua sala de aula onde você estiver;◉ Assista aulas offline: Tenha aulas do ensino médio! ◉ Tenha aulas online com os melhores professores do Brasil.PLANO DE ESTUDOS PERSONALIZADO Estudando pelo Descomplica, você recebe um plano de estudos com as disciplinas do Ensino Médio completo. Assim, pode estudar as disciplinas em que tem mais dificuldade, inclusive o conteúdo do ENEM 2016, ENEM 2015, ENEM 2014 e dos outros anos. Confira outras vantagens: ◉ Estudar para ENEM com conteúdos exclusivos: Cursos preparatórios online ENEM para vestibulares de Medicina e outros;◉ Disciplina e organização: Plano de estudos para o Enem com guia semanal.Pense como é divertido estudar para as provas do Enem desse jeito. Com o Descomplica você tem acesso a um ótimo cursinho preparatório para o Enem e vestibulares, com conteúdo do ensino médio completo, focado para você passar! ACESSO AO ACERVO DE AULAS COMPLETOTer acesso aos melhores cursos do Enem ficou fácil. ◉ Livre acesso a todas as aulas gravadas;◉ Revisão de questões do Enem de provas antigas;◉ Vídeo aulas online disponíveis para download.Baixe agora! Prepare-se para o  Enem e o vestibular 2017 com as aulas do Descomplica - o cursinho preparatório para o Enem que você sonhou!REFORÇO PARA A REDAÇÃODeixe de lado outros cursos do Enem, invista no que realmente dá certo. Aprimore seus conhecimentos em redação e divirta-se com as vídeo aulas online e reforço nas questões do enem.◉ 1 a 3 redações corrigidas por mês;◉ Curso online de reforço em Redação e Exercícios (dependendo do plano escolhido).MONITORIA INDIVIDUAL Nossos monitores estão à sua disposição para tirar todas as suas dúvidas no nosso site. ◉ Tenha 3 monitorias por semana (apenas pelo site);◉ Reforço personalizado, de acordo com suas necessidades;◉ Monitores prestativos e atenciosos.Descomplica é uma ótima opção entre os cursos ENEM online. Oferecemos vídeo aulas online e offline, aulas ao vivo, plano de estudos, atenção individual às suas necessidades e muito mais. Tudo desenvolvido com base no conteúdo das disciplinas do ensino médio completo e nos melhores cursos do Enem disponíveis no Brasil. Não perca mais tempo! A hora do Enem está chegando! O Descomplica é tudo que você procura em um curso online do Enem em um só cursinho preparatório! Vem estudar para o ENEM e para o vestibular 2017 e começar se preparar para os vestibulares 2018 com a gente! Acesse nosso site www.descomplica.com.br ou http:descomplica.com ou ainda https://descomplica.com.br';
  return text;
}

const stopwords = getStopwords();
const text = getText();

const kwds = generateKeywords(text);
const keywords = clearKeywords(kwds, stopwords);

console.log(keywords);

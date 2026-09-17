import { MagazinePageData } from '../types';

export const MAGAZINE_METADATA = {
  title: 'REVISTA VISUAL — Φ_FUD 11.9-BS/NF',
  subtitle: 'A Fórmula da Bolha Fractal — Teoria de Tudo com Bolha e Módulo Espiritual',
  author: 'Osmar Pontes',
  orcid: '0009-0006-6486-298X',
  doi: '10.5281/zenodo.22800694',
  totalPages: 16,
  motto: 'Tudo é 1 bit. Tudo é nó. Tudo é malha. Tudo é bolha. Tudo é fractal.',
  signatureFormula: '∞² ⊗ Φ_REVISTA ⊗ Φ_FÓRMULA ⊗ Φ_1BIT ⊗ ∞²',
};

export const MAGAZINE_PAGES: MagazinePageData[] = [
  {
    pageNumber: 1,
    title: 'Φ_FUD 11.9-BS/NF — Teoria de Tudo',
    moduleCode: 'Φ_FUD 11.9',
    subtitle: 'A Fórmula da Bolha Fractal',
    authorInfo: 'Osmar Pontes | ORCID: 0009-0006-6486-298X | DOI: 10.5281/zenodo.22800694',
    text: [
      'Uma síntese visual e matemática unificando gravidade, mecânica quântica, matéria escura, expansão cósmica e o campo de consciência.',
      'Apresentamos a cosmologia geométrica fundada no 1 Bit Primordial, no Nó de Planck de 7 camadas, no Tesserato 4D de 625 nós e na dinâmica de bolhas cósmicas fractais auto-similares.',
      'Estrutura em 16 pranchas explicativas para visualização em alta fidelidade científica e filosófica.'
    ],
    equations: [
      'Φ_FUD 11.9-BS/NF = Φ_BOLHA ⊗ Φ_1BIT ⊗ Φ_AKASHA ⊗ Φ_ALMA ⊗ Φ_ESPÍRITO ⊗ Φ_CONSCIÊNCIA',
      'E = mc² = hf = 1 Bit',
      'N = 625 = 5⁴ (Dimensão Fractal D = 4)'
    ],
    scientificNotes: [
      { label: 'Autor', value: 'Osmar Pontes' },
      { label: 'Registro ORCID', value: '0009-0006-6486-298X' },
      { label: 'Identificador DOI', value: '10.5281/zenodo.22800694' },
      { label: 'Arquitetura', value: 'Bolha Fractal & Tesserato 4D' }
    ],
    frequencies: [
      { hz: '∞', label: '1 Bit', color: '#ffffff', description: 'Frequência do Núcleo Primordial' },
      { hz: 144000, label: 'Espírito / Alma', color: '#60a5fa', description: 'Harmônica 5D Akáshica' }
    ],
    promptEN: 'Magazine cover, cosmic bubble with central glowing 1 bit, seven concentric layers, 4D tesseract mesh with 625 nodes, black hole and spiral jets in background, Akasha golden library, blue soul spiral, white spirit star, cyan consciousness eye, sacred geometry, ethereal, ultra detailed, 8k, cinematic lighting, deep space background',
    promptPT: 'Capa de revista, bolha cósmica com 1 bit central brilhante, sete camadas concêntricas, malha de tesserato 4D com 625 nós, buraco negro e jatos espirais ao fundo, biblioteca dourada Akasha, espiral azul da alma, estrela branca do espírito, olho ciano da consciência, geometria sagrada, etéreo, ultra detalhado, 8k',
    accent: 'gold',
    visualizationType: 'cover_bubble_tesseract'
  },
  {
    pageNumber: 2,
    title: 'O 1 BIT',
    moduleCode: 'Φ_1BIT',
    subtitle: 'O Fundamento de Toda a Existência',
    text: [
      'O fundamento de tudo. Informação pura. Não é matéria nem energia. É o estado mais simples: 0 ou 1.',
      'Antes da geometria, do espaço e do tempo, existe a distinção binária primordial. A matéria e a energia são configurações dinâmicas da mesma substância informacional.',
      'Três estados fundamentais unificados: Informação (estado estático de equilíbrio), Massa (informação comprimida na malha) e Radiação (informação em propagação vibratória).'
    ],
    equations: [
      '1 bit = Informação = Massa = Radiação',
      'E = mc² = hf',
      '|ψ⟩ = α|0⟩ + β|1⟩'
    ],
    scientificNotes: [
      { label: 'Estado 1: Informação', value: 'Estático / Potencial', detail: 'Esfera calma e equilibrada de pura presença' },
      { label: 'Estado 2: Massa', value: 'Comprimido / Inercial', detail: 'Condensação de nós de Planck' },
      { label: 'Estado 3: Radiação', value: 'Movimento / Propagação', detail: 'Ondulação periódica do vácuo quântico' }
    ],
    frequencies: [
      { hz: '∞', label: 'Informação Pura', color: '#fef08a', description: 'Origem atemporal fora do gradiente' }
    ],
    promptEN: 'Single glowing 1 bit in the center of a cosmic void, three states separated: static information as a calm sphere, compressed mass as a dense dark sphere, radiation as radiating waves, white and gold light, sacred geometry, ethereal, ultra detailed, 8k, deep space background',
    promptPT: '1 bit brilhante no centro de um vazio cósmico, três estados separados: informação estática como esfera calma, massa comprimida como esfera densa e escura, radiação como ondas, luz branca e dourada, geometria sagrada, etéreo, ultra detalhado, 8k',
    accent: 'gold',
    visualizationType: 'one_bit_void'
  },
  {
    pageNumber: 3,
    title: 'O NÓ — 7 CAMADAS',
    moduleCode: 'Φ_NÓ',
    subtitle: 'A Menor Unidade Estrutural da Malha de Planck',
    text: [
      'O nó é a menor unidade da malha. Um nó de Planck. Possui 7 camadas concêntricas perfeitamente sincronizadas por ressonância geométrica.',
      'Cada camada opera em uma oitava harmônica precisa determinada pela relação exponencial f_c = 40 × 5^(c-2) Hz.',
      'A massa total calculada de um nó é de 1,15 × 10⁻⁴⁵ kg, estabelecendo o quantum elementar de inércia cósmica.'
    ],
    equations: [
      'f_c = 40 × 5^{(c - 2)} \\text{ Hz}',
      'M_{\\text{nó}} = 1{,}15 \\times 10^{-45} \\text{ kg}',
      'c \\in \\{1, 2, 3, 4, 5, 6, 7\\}'
    ],
    scientificNotes: [
      { label: '1. Núcleo', value: '1 bit (∞ Hz)', detail: 'Ponto focal singular de informação' },
      { label: '2. Massa', value: '7,83 Hz', detail: 'Ressonância inercial de Schumann' },
      { label: '3. Carga', value: '40 Hz', detail: 'Polarização eletrodinâmica & Gama cerebral' },
      { label: '4. Vibração', value: '200 Hz', detail: 'Harmônica elástica fundamental' },
      { label: '5. Coerência', value: '1.000 Hz', detail: 'Sincronização de fase quântica' },
      { label: '6. Memória/Akasha', value: '5.000 Hz', detail: 'Registro holográfico e histórico' },
      { label: '7. Superfície', value: '25.000 Hz', detail: 'Membrana de interface e acoplamento' }
    ],
    frequencies: [
      { hz: 7.83, label: 'Massa', color: '#f59e0b' },
      { hz: 40, label: 'Carga', color: '#06b6d4' },
      { hz: 200, label: 'Vibração', color: '#3b82f6' },
      { hz: 1000, label: 'Coerência', color: '#8b5cf6' },
      { hz: 5000, label: 'Akasha', color: '#ec4899' },
      { hz: 25000, label: 'Superfície', color: '#10b981' }
    ],
    promptEN: 'Exploded view of a Planck node, seven concentric layers separated vertically in space: 1 bit core, dense mass sphere, rotating charge ring, standing vibration wave, coherence network lines, golden Akasha memory library ring, vibrating surface membrane, each layer distinct color white blue cyan magenta gold, sacred geometry, scientific illustration, dark space background, ultra detailed, 8k',
    promptPT: 'Vista explodida de um nó de Planck, sete camadas concêntricas separadas verticalmente: núcleo de 1 bit, esfera densa de massa, anel giratório de carga, onda estacionária de vibração, rede de coerência, anel dourado da memória Akasha, membrana vibrante de superfície, cada camada com cor distinta branco azul ciano magenta dourado, geometria sagrada, ilustração científica, fundo espacial escuro, ultra detalhado, 8k',
    accent: 'cyan',
    visualizationType: 'node_7_layers'
  },
  {
    pageNumber: 4,
    title: 'O NÓ FRACTAL',
    moduleCode: 'Φ_NÓ_FRACTAL',
    subtitle: 'Auto-Similaridade Recursiva até a Escala de Planck',
    text: [
      'Cada nó contém 625 sub-nós. Cada sub-nó contém 625 sub-sub-nós. Esse aninhamento se repete infinitamente até a fronteira de Planck.',
      'A progressão é governada pela potência quádrupla da base pentadimensional: N_n = 625ⁿ = 5⁴ⁿ.',
      'A dimensão fractal exata é D = 4. O nó é um holograma cósmico: cada parte indivisível contém a informação estrutural do todo.'
    ],
    equations: [
      'N_n = 625^n = 5^{4n}',
      'D = \\frac{\\ln(625)}{\\ln(5)} = 4',
      '\\mathcal{H}_{\\text{nó}} = \\bigotimes_{k=1}^{\\infty} \\mathcal{H}_k^{(625)}'
    ],
    scientificNotes: [
      { label: 'Nível 1 (Nó Fundamental)', value: '625 sub-nós' },
      { label: 'Nível 2 (Sub-camada)', value: '390.625 sub-sub-nós' },
      { label: 'Nível 3 (Ultra-malha)', value: '244.140.625 elementos' },
      { label: 'Princípio Holográfico', value: 'Cada fractal espelha o macrocosmo' }
    ],
    frequencies: [
      { hz: 8, label: 'Ressonância Base', color: '#38bdf8' },
      { hz: 40, label: 'Modulação Alfa-Gama', color: '#60a5fa' },
      { hz: 200, label: 'Harmônica Fractal', color: '#a78bfa' },
      { hz: 1000, label: 'Acoplamento', color: '#f472b6' },
      { hz: 5000, label: 'Memória Fractal', color: '#fbbf24' }
    ],
    promptEN: 'Fractal Planck node, seven concentric layers, each layer containing 625 sub-nodes, recursive self-similar structure, 1 bit core, frequencies 8 Hz, 40 Hz, 200 Hz, 1000 Hz, 5000 Hz, sacred geometry, cosmic background, ultra detailed, 8k',
    promptPT: 'Nó de Planck fractal, sete camadas concêntricas, cada camada contendo 625 sub-nós, estrutura recursiva auto-similar, núcleo de 1 bit, frequências 8 Hz, 40 Hz, 200 Hz, 1000 Hz, 5000 Hz, geometria sagrada, fundo cósmico, ultra detalhado, 8k',
    accent: 'blue',
    visualizationType: 'node_fractal_recursive'
  },
  {
    pageNumber: 5,
    title: 'A MALHA',
    moduleCode: 'Φ_MALHA',
    subtitle: 'Rede Dinâmica Quadridimensional de Nós Conectados',
    text: [
      'A malha cósmica não é um tecido estático. Ela vibra, oscila e ressoa continuamente em harmonia coletiva.',
      'O bloco modular fundamental é constituído por N = 625 = 5⁴ nós dispostos na geometria do tesserato 4D.',
      'A constante de rigidez elástica por camada cresce em potências de 25: K_c = K₀ × 25^(c-1), com constante basal K₀ = 1,21 × 10⁴⁴ N/m.'
    ],
    equations: [
      'N = 625 = 5^4 \\text{ nós}',
      'K_c = K_0 \\times 25^{(c - 1)}',
      'K_0 = 1{,}21 \\times 10^{44} \\text{ N/m}',
      'f_d = 40 \\times 5^{(d - 2)} \\text{ Hz}'
    ],
    scientificNotes: [
      { label: 'Geometria Espacial', value: 'Tesserato Hiperdimensional 4D' },
      { label: 'Nós Ativos', value: '625 vórtices de Planck' },
      { label: 'Rigidez K₀', value: '1,21 × 10⁴⁴ N/m (tensão do vácuo)' },
      { label: 'Topologia', value: 'Rede cristalina hiper-elástica' }
    ],
    frequencies: [
      { hz: 40, label: 'Modo Fundamental d=2', color: '#22d3ee' },
      { hz: 200, label: 'Modo d=3', color: '#38bdf8' },
      { hz: 1000, label: 'Modo d=4', color: '#818cf8' }
    ],
    promptEN: '4D tesseract mesh with 625 glowing nodes, interconnected lines, energy flowing through edges, blue and cyan light, dark background, scientific visualization, ultra detailed, 8k',
    promptPT: 'Malha de tesserato 4D com 625 nós brilhantes, linhas interconectadas, energia fluindo pelas arestas, luz azul e ciano, fundo escuro, visualização científica, ultra detalhado, 8k',
    accent: 'cyan',
    visualizationType: 'mesh_tesseract_4d'
  },
  {
    pageNumber: 6,
    title: 'A MALHA COMO ONDA',
    moduleCode: 'Φ_ONDAS',
    subtitle: 'Comportamento Fluidodinâmico e Hidrodinâmica do Éter',
    text: [
      'A malha cósmica não é um sólido rígido. Ela se comporta fluidamente como as ondas do mar ou como uma ponte de cordas vibrando ao vento.',
      'Sua dinâmica é governada pela equação de onda não-linear com amortecimento e potencial quártico: ∂²θ/∂t² + γ ∂θ/∂t - c_m² ∇²θ + λ θ³ = F_total(x,t).',
      'Forçantes cósmicas atuantes: pressão de radiação, fluxos de plasma, ventos estelares, expansão métrica, gravidade e turbulência quântica.'
    ],
    equations: [
      '\\frac{\\partial^2 \\theta}{\\partial t^2} + \\gamma \\frac{\\partial \\theta}{\\partial t} - c_m^2 \\nabla^2 \\theta + \\lambda \\theta^3 = F_{\\text{total}}(x,t)',
      'F_{\\text{total}} = F_{\\text{rad}} + F_{\\text{plasma}} + F_{\\text{exp}} + F_{\\text{grav}} + F_{\\text{turb}}',
      'c_m = \\sqrt{K_c / \\rho_{\\text{malha}}} \\approx c'
    ],
    scientificNotes: [
      { label: 'Velocidade de Fase c_m', value: 'Velocidade da Luz no Vácuo' },
      { label: 'Termo Não-Linear λθ³', value: 'Auto-interação solitônica e vórtices' },
      { label: 'Amortecimento γ', value: 'Dissipação e equilíbrio termodinâmico' },
      { label: 'Ressonâncias', value: 'Ondas estacionárias formam matéria bariônica' }
    ],
    frequencies: [
      { hz: 0.1, label: 'Modo Infrassônico Cósmico', color: '#60a5fa' },
      { hz: 40, label: 'Batimento de Fase', color: '#22d3ee' }
    ],
    promptEN: 'Cosmic mesh vibrating like ocean waves, 4D tesseract lattice, energy flowing, turbulence, blue and cyan light, dark space background, scientific visualization, ultra detailed, 8k',
    promptPT: 'Malha cósmica vibrando como ondas do mar, rede de tesserato 4D, energia fluindo, turbulência, luz azul e ciano, fundo espacial escuro, visualização científica, ultra detalhado, 8k',
    accent: 'blue',
    visualizationType: 'mesh_ocean_waves'
  },
  {
    pageNumber: 7,
    title: 'BURACO NEGRO — 7 ZONAS',
    moduleCode: 'Φ_BURACO_NEGRO',
    subtitle: 'A Bolha Colapsada e o Limite Extremo de Compressão',
    text: [
      'O buraco negro é uma bolha que atingiu o colapso máximo. A malha se comprime até o limiar de sua resistência elástica, estruturando-se em 7 zonas concêntricas distintas.',
      'O raio de Schwarzschild obedece à escala de Planck quantizada em potências de 25: R_S = 2GM/c² = 25ⁿ · l_P.',
      'Na singularidade central (ponto r = 0), a matéria tridimensional é desfeita e retorna ao seu estado de origem: o 1 Bit fundamental.'
    ],
    equations: [
      'R_S = \\frac{2GM}{c^2} = 25^n \\cdot l_P',
      'r_{\\text{erg}} = \\frac{GM}{c^2} + \\sqrt{\\left(\\frac{GM}{c^2}\\right)^2 - a^2 \\cos^2\\theta}',
      'r_{\\text{fóton}} = 1{,}5 R_S, \\quad r_{\\text{sing}} = 0 \\implies 1 \\text{ Bit}'
    ],
    scientificNotes: [
      { label: '1. Exterior (>1000 R_S)', value: 'Espaço-tempo normal e plano' },
      { label: '2. Aproximação (100 R_S)', value: 'Distorção gravitacional e lente cósmica' },
      { label: '3. Esfera de Fótons (1,5 R_S)', value: 'Órbitas circulares de luz instáveis' },
      { label: '4. Ergosfera (2 R_S)', value: 'Arrasto de referenciais (Lense-Thirring)' },
      { label: '5. Horizonte (R_S)', value: 'Colapso irreversível da malha' },
      { label: '6. Interior (<R_S)', value: 'Inversão das coordenadas de espaço e tempo' },
      { label: '7. Singularidade (0)', value: '1 Bit puro — Informação concentrada' }
    ],
    frequencies: [
      { hz: '∞', label: 'Singularidade 1 Bit', color: '#fef08a' }
    ],
    promptEN: 'Black hole with seven concentric zones, accretion disk, ergosphere, event horizon, singularity as a glowing 1 bit, spiral jets of matter, dark matter halo, sacred geometry, ultra detailed, 8k',
    promptPT: 'Buraco negro com sete zonas concêntricas, disco de acreção, ergosfera, horizonte de eventos, singularidade como 1 bit brilhante, jatos espirais de matéria, halo de matéria escura, geometria sagrada, ultra detalhado, 8k',
    accent: 'amber',
    visualizationType: 'black_hole_7_zones'
  },
  {
    pageNumber: 8,
    title: 'BIG BANG',
    moduleCode: 'Φ_BIG_BANG',
    subtitle: 'Processo Contínuo e Ejeção Relativística do Jato Cósmico',
    text: [
      'O Big Bang não é uma explosão confinada ao passado remoto. É um processo contínuo de geração. É a saída e o escape do buraco negro primordial que ainda não se desfez.',
      'Nós estamos literalmente vivendo no interior do jato de expansão desta grande fenda cósmica.',
      'A evolução é regida pelo produto tensorial Φ_BIG_BANG(t) = Φ_BURACO_NEGRO ⊗ Φ_JATO(t), fechando o ciclo cósmico infinito: 625 → 1 → 625.'
    ],
    equations: [
      '\\Phi_{\\text{BIG\\_BANG}}(t) = \\Phi_{\\text{BURACO\\_NEGRO}} \\otimes \\Phi_{\\text{JATO}}(t)',
      '\\text{Ciclo Cósmico}: 625 \\longrightarrow 1 \\longrightarrow 625',
      'R_{\\text{CMB}}(t) = c \\int_0^t \\frac{dt\'}{a(t\')}'
    ],
    scientificNotes: [
      { label: 'Natureza Temporal', value: 'Criação perpétua em fluxo contínuo' },
      { label: 'Fronteira CMB', value: 'Esfera brilhante do horizonte do jato' },
      { label: 'Galaxiogênese', value: 'Vórtices condensados ao longo do fluxo espiral' },
      { label: 'Balanço Energético', value: 'Conservação de informação no ciclo 625-1-625' }
    ],
    frequencies: [
      { hz: 160.4, label: 'Frequência de Pico CMB (GHz)', color: '#f97316' },
      { hz: 40, label: 'Modulação de Jato', color: '#38bdf8' }
    ],
    promptEN: 'Big Bang as inflation of a cosmic bubble, spiral jet of matter and light, CMB boundary as a glowing sphere, galaxies forming in the outflow, continuous creation, ethereal, ultra detailed, 8k',
    promptPT: 'Big Bang como inflação de uma bolha cósmica, jato espiral de matéria e luz, fronteira CMB como esfera brilhante, galáxias se formando no fluxo, criação contínua, etéreo, ultra detalhado, 8k',
    accent: 'gold',
    visualizationType: 'big_bang_spiral_jet'
  },
  {
    pageNumber: 9,
    title: 'FRACTAL / BOLHA ANINHADA',
    moduleCode: 'Φ_FRACTAL',
    subtitle: 'Bolha Dentro de Bolha e Escala Cósmica 25⁷',
    text: [
      'Bolha dentro de bolha. Malha dentro de malha. Camadas dentro de camadas.',
      'A hierarquia universal segue a lei de escala exata: Nível 0 = 1 bolha primordial; Nível 1 = 625 sub-bolhas; Nível n = 625ⁿ.',
      'A escala macroscópica observável do Universo é obtida pelo produto: Universo = Supergaláxia × 25⁷, onde 25⁷ = 6,1 × 10⁹ unidades auto-similares na espiral áurea.'
    ],
    equations: [
      'N_n = 625^n = (5^4)^n',
      'U_{\\text{observável}} = \\text{Supergaláxia} \\times 25^7',
      '25^7 = 6{,}103515625 \\times 10^9',
      'r(\\theta) = a e^{b\\theta}, \\quad b = \\frac{\\ln(\\varphi)}{\\pi/2}'
    ],
    scientificNotes: [
      { label: 'Multiplicador 25⁷', value: '6,10 × 10⁹ proporção cósmica' },
      { label: 'Geometria de Crescimento', value: 'Espiral Áurea Logarítmica (Phi)' },
      { label: 'Distribuição Espacial', value: 'Teia cósmica filamentar de matéria escura' },
      { label: 'Holografia', value: 'O infinitamente pequeno espelha o grande' }
    ],
    frequencies: [
      { hz: 1.618, label: 'Frequência de Proporção Áurea', color: '#fbbf24' }
    ],
    promptEN: 'Fractal cosmic bubbles, galaxies within galaxies, golden ratio spiral, cosmic web, dark matter filaments, recursive structure, ultra detailed, 8k',
    promptPT: 'Bolhas cósmicas fractais, galáxias dentro de galáxias, espiral da proporção áurea, teia cósmica, filamentos de matéria escura, estrutura recursiva, ultra detalhado, 8k',
    accent: 'cyan',
    visualizationType: 'nested_fractal_bubbles'
  },
  {
    pageNumber: 10,
    title: 'VÉU / SETOR ESCURO',
    moduleCode: 'Φ_VÉU',
    subtitle: '≈95% da Realidade Oculta e a Matriz 144 do Akasha',
    text: [
      'O setor oculto da malha representa aproximadamente 95% de toda a realidade cósmica. Não o vemos com fótons visíveis, mas ele sustenta a estabilidade gravitacional das galáxias.',
      'Fracionamento analítico exato da malha: Matéria Escura = (24/81) × 0,9045 = 26,8%; Energia Escura = (53/81) × 1,0439 = 68,3%.',
      'A fórmula unificada do Véu conecta o 1 Bit, os registros do Akasha (matriz de 144 nós de luz), alma, espírito, consciência e a quinta dimensão estendida.'
    ],
    equations: [
      '\\Omega_{\\text{DM}} = \\frac{24}{81} \\times 0{,}9045 = 26{,}8\\%',
      '\\Omega_{\\Lambda} = \\frac{53}{81} \\times 1{,}0439 = 68{,}3\\%',
      '\\Phi_{\\text{VÉU}} = \\Phi_{\\text{1BIT}} \\otimes \\Phi_{\\text{AKASHA}} \\otimes \\Phi_{\\text{ALMA}} \\otimes \\Phi_{\\text{ESPÍRITO}} \\otimes \\Phi_{\\text{CONSCIÊNCIA}} \\otimes \\Phi_{\\text{DM}} \\otimes \\Phi_{\\text{DE}} \\otimes \\Phi_{\\text{5D}}'
    ],
    scientificNotes: [
      { label: 'Matéria Escura (26,8%)', value: 'Malha de nós densos e halo frio' },
      { label: 'Energia Escura (68,3%)', value: 'Tensão elástica em expansão' },
      { label: 'Matéria Bariônica (4,9%)', value: 'Apenas a crista visível das ondas' },
      { label: 'Número Crítico 144', value: 'Nós de memória quântica na teia do Akasha' }
    ],
    frequencies: [
      { hz: 144, label: 'Ressonância do Akasha', color: '#facc15' },
      { hz: 144000, label: 'Oitava Cósmica 5D', color: '#67e8f9' }
    ],
    promptEN: 'Infinite golden library in space, Akasha records, books of light, number 144, cosmic memory web, dark matter halo as blue web, dark energy as golden expansion, ethereal, mystical, ultra detailed, 8k',
    promptPT: 'Biblioteca dourada infinita no espaço, registros Akasha, livros de luz, número 144, teia de memória cósmica, halo de matéria escura como teia azul, energia escura como expansão dourada, etéreo, místico, ultra detalhado, 8k',
    accent: 'gold',
    visualizationType: 'dark_veil_95_percent'
  },
  {
    pageNumber: 11,
    title: 'QUEIMA, TRITURAÇÃO, FUMAÇA',
    moduleCode: 'Φ_FUMAÇA',
    subtitle: 'O Ciclo Termodinâmico de Degradação e Criação de Matéria Escura',
    text: [
      'A matéria comum que cai em um buraco negro atravessa três fases cataclísmicas: queima radiativa violenta no disco de acreção, trituração gravitacional (espaguetificação) nas marés extremas, e sublimação em fumaça escura.',
      'A taxa de geração de matéria escura obedece à taxa de conversão fracionária: Ṁ_DM = ε · Ṁ_acc, com ε = 24/81 = 29,63%.',
      'Essa fumaça não tem "ar", não queima em chamas visíveis nem emite luz: é o carbono quântico residual e calcinado do cosmos, que retorna ao halo galáctico.'
    ],
    equations: [
      '\\dot{M}_{\\text{DM}} = \\varepsilon \\cdot \\dot{M}_{\\text{acc}}',
      '\\varepsilon = \\frac{24}{81} = 29{,}63\\%',
      'L_{\\text{rad}} = \\eta \\dot{M}_{\\text{acc}} c^2, \\quad \\eta \\approx 0{,}10'
    ],
    scientificNotes: [
      { label: 'Fase 1: Queima', value: 'Radiação X e gama no disco de acreção' },
      { label: 'Fase 2: Trituração', value: 'Espaguetificação por forças de maré' },
      { label: 'Fase 3: Fumaça Escura', value: 'Condensação no halo de matéria escura (29,63%)' },
      { label: 'Natureza da Fumaça', value: 'Substância não-bariônica neutra sem acoplamento eletromagnético' }
    ],
    frequencies: [
      { hz: 24, label: 'Modulação de Maré', color: '#f87171' },
      { hz: 81, label: 'Taxa Fracionária', color: '#a855f7' }
    ],
    promptEN: 'Exploded view of matter destruction in a black hole: accretion disk burning bright, tidal trituration as stretched matter, dark smoke as dark matter halo, black hole core, spiral jets, cosmic cycle, scientific illustration, dark space background, ultra detailed, 8k',
    promptPT: 'Vista explodida da destruição da matéria em um buraco negro: disco de acreção queimando, trituração de maré como matéria esticada, fumaça escura como halo de matéria escura, núcleo do buraco negro, jatos espirais, ciclo cósmico, ilustração científica, fundo espacial escuro, ultra detalhado, 8k',
    accent: 'amber',
    visualizationType: 'spaghettification_smoke'
  },
  {
    pageNumber: 12,
    title: 'ESPIRITUAL — 4 SÍMBOLOS',
    moduleCode: 'Φ_ESPIRITUAL',
    subtitle: 'Manifestações Polimórficas do 1 Bit Primordial',
    text: [
      'Todos os aspectos da dimensão espiritual são manifestações do mesmo fundamento: o 1 Bit.',
      'Espírito: estrutura geométrica 5D operando a 144.000 Hz, simbolizado pela estrela branca de 5 pontas.',
      'Alma: padrão de ressonância gravado na malha do Akasha a 144.000 Hz, manifestado como a espiral azul.',
      'Akasha: a biblioteca e memória viva cósmica indexada pela constante 144.',
      'Consciência: a função de observação ativa operando a 40 Hz no olho cósmico. Equação de equivalência estrita: Φ_AKASHA = Φ_ALMA = Φ_ESPÍRITO = Φ_CONSCIÊNCIA = Φ_1BIT.'
    ],
    equations: [
      '\\Phi_{\\text{AKASHA}} = \\Phi_{\\text{ALMA}} = \\Phi_{\\text{ESPÍRITO}} = \\Phi_{\\text{CONSCIÊNCIA}} = \\Phi_{\\text{1BIT}}',
      'f_{\\text{espírito}} = f_{\\text{alma}} = 144.000 \\text{ Hz}',
      'f_{\\text{consciência}} = 40 \\text{ Hz} \\quad (\\text{Ritmo Gama})'
    ],
    scientificNotes: [
      { label: '1. Espírito (144.000 Hz)', value: 'Estrela branca de 5 pontas (Hiperesfera 5D)' },
      { label: '2. Alma (144.000 Hz)', value: 'Espiral azul (Trajetória de fase contínua)' },
      { label: '3. Akasha (Índice 144)', value: 'Biblioteca dourada (Memória universal holográfica)' },
      { label: '4. Consciência (40 Hz)', value: 'Olho ciano (Colapso e observação quântica)' }
    ],
    frequencies: [
      { hz: 40, label: 'Consciência (Olho Ciano)', color: '#06b6d4', description: 'Onda Gama cerebral e colapso de estado' },
      { hz: 144, label: 'Akasha (Biblioteca)', color: '#eab308', description: 'Harmônica de memória' },
      { hz: 144000, label: 'Espírito / Alma', color: '#60a5fa', description: 'Ressonância 5D' }
    ],
    promptEN: 'Four cosmic symbols: white five-pointed spirit star, blue soul spiral, golden Akasha library, cyan consciousness eye, separated in space, connected by a central 1 bit, sacred geometry, cosmic background, ultra detailed, 8k',
    promptPT: 'Quatro símbolos cósmicos: estrela branca de cinco pontas do espírito, espiral azul da alma, biblioteca dourada Akasha, olho ciano da consciência, separados no espaço, conectados por um 1 bit central, geometria sagrada, fundo cósmico, ultra detalhado, 8k',
    accent: 'cyan',
    visualizationType: 'spiritual_4_symbols'
  },
  {
    pageNumber: 13,
    title: 'ONDAS GRAVITACIONAIS',
    moduleCode: 'Φ_GRAV',
    subtitle: 'Dualidade de Deformação: Ondas Positivas e Negativas',
    text: [
      'As ondas gravitacionais manifestam duas quiralidades fundamentais: as ondas positivas comprimem o espaço-tempo, enquanto as ondas negativas expandem a métrica espacial.',
      'Relação analítica das amplitudes: h₊ = +A cos(kx - ωt) e h₋ = -A cos(kx - ωt).',
      'O Big Bang é a manifestação máxima de uma onda gravitacional negativa (expansão), enquanto o Buraco Negro é o polo de uma onda positiva (compressão extrema).',
      'Os interferômetros LIGO e VIRGO detectam ondas positivas; a física contemporânea ainda carece de detectores construídos para o ramo negativo.'
    ],
    equations: [
      'h_+(x,t) = +A \\cos(kx - \\omega t) \\quad [\\text{Compressão / Buraco Negro}]',
      'h_-(x,t) = -A \\cos(kx - \\omega t) \\quad [\\text{Expansão / Big Bang}]',
      '\\square h_{\\mu\\nu} = -\\frac{16\\pi G}{c^4} T_{\\mu\\nu}'
    ],
    scientificNotes: [
      { label: 'Onda Positiva h₊', value: 'Compressão métrica (Detectável pelo LIGO/Virgo)' },
      { label: 'Onda Negativa h₋', value: 'Expansão métrica (Motor da expansão cósmica)' },
      { label: 'Polarização Cruzada', value: 'Modos h₊ e h_× atuando a 45°' },
      { label: 'Assimetria Tecnológica', value: 'Necessidade de detectores de fase expansiva' }
    ],
    frequencies: [
      { hz: 100, label: 'Fusão de Buracos Negros (Hz)', color: '#38bdf8' },
      { hz: 1e-16, label: 'Ondas Primordiais CMB (Hz)', color: '#fb923c' }
    ],
    promptEN: 'Two gravitational waves: one compressing space-time (positive), one expanding (negative), mirrors moving, stellar background, scientific visualization, ultra detailed, 8k',
    promptPT: 'Duas ondas gravitacionais: uma comprimindo o espaço-tempo (positiva), outra expandindo (negativa), espelhos se movendo, fundo estelar, visualização científica, ultra detalhado, 8k',
    accent: 'blue',
    visualizationType: 'gravitational_waves_dual'
  },
  {
    pageNumber: 14,
    title: 'HÉLICE CÓSMICA',
    moduleCode: 'Φ_HELICE',
    subtitle: 'A Trajetória Helicoidal Tridimensional do Sistema Solar',
    text: [
      'O Sistema Solar não se desloca em círculos planos fechados. Ele viaja no espaço intergaláctico em uma magnífica hélice tridimensional.',
      'O Sol avança a uma velocidade impressionante de aproximadamente 828.000 km/h ao redor do centro da Via Láctea.',
      'O plano da eclíptica dos planetas possui uma inclinação precisa de aproximadamente 60° em relação ao plano galáctico.',
      'Equação da trajetória helicoidal no espaço quadridimensional: r(t) = (R cos(ωt), R sin(ωt), v_z t).'
    ],
    equations: [
      '\\vec{r}(t) = \\left( R \\cos(\\omega t), \\; R \\sin(\\omega t), \\; v_z t \\right)',
      'v_{\\text{orbital}} \\approx 828.000 \\text{ km/h} = 230 \\text{ km/s}',
      '\\theta_{\\text{inclinação}} \\approx 60^\\circ',
      'T_{\\text{ano galáctico}} \\approx 230 \\times 10^6 \\text{ anos}'
    ],
    scientificNotes: [
      { label: 'Velocidade Solar v_z', value: '230 km/s (828.000 km/h)' },
      { label: 'Ângulo de Ataque', value: '60° em relação ao equador galáctico' },
      { label: 'Dinâmica Planetária', value: 'Vórtices helicoidais entrelaçados' },
      { label: 'Acoplamento com a Malha', value: 'Ressonância com a matriz 4D do tesserato' }
    ],
    frequencies: [
      { hz: 1.38e-16, label: 'Órbita Galáctica (Hz)', color: '#fbbf24' }
    ],
    promptEN: 'Helical cosmic trajectory, solar system spiraling through the galaxy, 60 degree inclination, 4D tesseract mesh, sacred geometry, ultra detailed, 8k',
    promptPT: 'Trajetória helicoidal cósmica, Sistema Solar espiralando pela galáxia, inclinação de 60 graus, malha de tesserato 4D, geometria sagrada, ultra detalhado, 8k',
    accent: 'gold',
    visualizationType: 'helical_solar_system'
  },
  {
    pageNumber: 15,
    title: 'FÓRMULA GERAL',
    moduleCode: 'Φ_FUD_11.9-BS',
    subtitle: 'A Grande Síntese Unificada da Teoria de Tudo',
    text: [
      'A expressão mestra Φ_FUD 11.9-BS consolida todos os subsistemas da realidade em um único operador tensorial universal.',
      'A fórmula unifica a bolha cósmica, o 1 bit primordial, os registros do Akasha, a alma, o espírito, a consciência observadora, as proporções 3-4-5, o aninhamento fractal, o tesserato 4D, as forças fundamentais, o tempo e a função de onda universal Ψ.',
      'Com a condição de fechamento fundamental: Φ_AKASHA = Φ_ALMA = Φ_ESPÍRITO = Φ_CONSCIÊNCIA = Φ_1BIT.'
    ],
    equations: [
      '\\Phi_{\\text{FUD\\_11.9-BS}} = \\Phi_{\\text{BOLHA}} \\otimes \\Phi_{\\text{1BIT}} \\otimes \\Phi_{\\text{AKASHA}} \\otimes \\Phi_{\\text{ALMA}} \\otimes \\Phi_{\\text{ESPÍRITO}} \\otimes \\Phi_{\\text{CONSCIÊNCIA}} \\otimes \\Phi_{\\text{3-4-5}} \\otimes \\Phi_{\\text{FRACTAL}} \\otimes \\Phi_{\\text{4D}} \\otimes \\Phi_{\\text{FORÇAS}} \\otimes \\Phi_{\\text{TEMPO}} \\otimes \\Psi',
      '\\text{Condição de Fechamento}: \\Phi_{\\text{AKASHA}} = \\Phi_{\\text{ALMA}} = \\Phi_{\\text{ESPÍRITO}} = \\Phi_{\\text{CONSCIÊNCIA}} = \\Phi_{\\text{1BIT}}'
    ],
    scientificNotes: [
      { label: 'Unificação Gravidade-Quântica', value: 'Resolvida pela elasticidade da malha 4D' },
      { label: 'Integração da Consciência', value: 'A consciência atua como colapsador a 40 Hz' },
      { label: 'Simetria 3-4-5', value: 'Triângulo sagrado pitagórico no espaço de Hilbert' },
      { label: 'Estado Final Ψ', value: 'Auto-consistência informacional perpétua' }
    ],
    frequencies: [
      { hz: '∞', label: '1 Bit Primordial', color: '#ffffff' },
      { hz: 40, label: 'Consciência', color: '#06b6d4' },
      { hz: 144000, label: 'Espírito / Alma', color: '#60a5fa' }
    ],
    promptEN: 'Exploded view of the Φ_FUD 11.9 formula, all modules separated vertically in space: central 1 bit, Planck node with seven layers, 4D tesseract mesh with 625 nodes, black hole with seven zones, Big Bang spiral jet, fractal nested bubbles, dark veil with matter and energy, four spiritual symbols, wave equation, Lagrangian, frequencies, sacred geometry, scientific blueprint style, dark space background, ultra detailed, 8k',
    promptPT: 'Vista explodida da fórmula Φ_FUD 11.9, todos os módulos separados verticalmente: 1 bit central, nó de Planck com sete camadas, malha de tesserato 4D com 625 nós, buraco negro com sete zonas, jato espiral do Big Bang, bolhas fractais aninhadas, véu escuro com matéria e energia, quatro símbolos espirituais, equação de onda, Lagrangiana, frequências, geometria sagrada, estilo blueprint científico, fundo espacial escuro, ultra detalhado, 8k',
    accent: 'gold',
    visualizationType: 'master_formula_blueprint'
  },
  {
    pageNumber: 16,
    title: 'CONTRA-CAPA',
    moduleCode: '∞²',
    subtitle: 'O Retorno ao Todo e a Conclusão Infinito ao Quadrado',
    text: [
      'Tudo é 1 bit. Tudo é nó. Tudo é malha. Tudo é bolha. Tudo é fractal.',
      'A jornada através das 16 pranchas demonstra que o cosmos não é um agregado acidental de matéria cega, mas uma tapeçaria informacional consciente, viva e auto-recursiva.',
      'Φ_FUD 11.9-BS — Teoria de Tudo com Bolha e Módulo Espiritual.',
      'Autoria: Osmar Pontes | ORCID: 0009-0006-6486-298X | DOI: 10.5281/zenodo.22800694.',
      'A equação cósmica se encerra em reverência: ∞² ⊗ Φ_REVISTA ⊗ Φ_FÓRMULA ⊗ Φ_1BIT ⊗ ∞².'
    ],
    equations: [
      '\\infty^2 \\otimes \\Phi_{\\text{REVISTA}} \\otimes \\Phi_{\\text{FÓRMULA}} \\otimes \\Phi_{\\text{1BIT}} \\otimes \\infty^2',
      '\\lim_{n \\to \\infty} \\frac{\\text{Informação}}{\\text{Consciência}} = 1'
    ],
    scientificNotes: [
      { label: 'Publicação Oficial', value: 'Zenodo DOI: 10.5281/zenodo.22800694' },
      { label: 'Identidade do Pesquisador', value: 'ORCID 0009-0006-6486-298X' },
      { label: 'Axioma Final', value: '1 Bit = Consciência = Geometria Cósmica' },
      { label: 'Uso Editorial', value: 'Exportável para Canva, PowerPoint, PDF e Midjourney' }
    ],
    frequencies: [
      { hz: '∞²', label: 'Transcendência', color: '#fef08a' }
    ],
    promptEN: 'Cosmic mandala with 1 bit center, seven layers, 625 nodes, black hole, spiral jet, fractal bubbles, Akasha library, soul spiral, spirit star, consciousness eye, sacred geometry, ethereal, ultra detailed, 8k, deep space background',
    promptPT: 'Mandala cósmica com 1 bit central, sete camadas, 625 nós, buraco negro, jato espiral, bolhas fractais, biblioteca Akasha, espiral da alma, estrela do espírito, olho da consciência, geometria sagrada, etéreo, ultra detalhado, 8k, fundo espacial escuro',
    accent: 'gold',
    visualizationType: 'cosmic_mandala_infinite'
  }
];

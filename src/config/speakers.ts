import { SpeakerType } from "types";
import { urlFormatString } from "utils";

const speakers: Array<SpeakerType> = [
  {
    name: "Mateus de Assis Silva",
    bio: "Engenheiro de Aprendizado de Máquina (ML) / Cientista de Dados com certificação no programa Huawei HCIA AI. Possui experiência no treinamento de modelos usando MLFlow, Hydra-Core, Sklearn e XGBoost. Também atua na criação da APIs para serviços baseados em ML. Formado em Engenharia Mecatrônica pela Universidade Federal do Rio Grande do Norte em 2023, Mateus também possui um diploma de Bacharel em Ciência e Tecnologia pela mesma universidade em 2017.",
    pictureUrl: "",
  },
  {
    name: "Arnaldo Gualberto",
    bio: "Arnaldo é Google Developer Expert em Machine Learning desde 2018 e trabalha como Engenheiro de Machine Learning e Deep Learning desde 2016. Atualmente, trabalha na Arado, uma startup que ajuda a agricultura familiar a prosperar. Arnaldo também é doutorando em Deep Learning pela UFCG.",
    pictureUrl: "",
  },
  {
    name: "Ianca",
    bio: "Há quase 3 anos trabalhando como Cientista de Dados de Produto na Nuvemshop, a maior plataforma de e-commerce da américa latina, é formada em Engenharia Elétrica pela UFRN. Começou em Análise de Dados com um estágio em 2016 na companhia de distribuição de energia do RN, na área de Gestão da Base de Dados, o que a fez ter bastante contato com Excel, SQL, GIS e começar a aprender Python. Logo, morou alguns meses em Vancouver fazendo um Bootcamp de Python para Ciência de Dados. Enquanto não conseguia uma vaga em Dados, se aventurou no mundo do desenvolvimento web: estagiou em um laboratório onde disponibilizamos um dos softwares de monitoramento das refinarias da Petrobrás, também esteve alguns anos desenvolvendo sites para agências como freelancer.",
    pictureUrl: "",
  },
  {
    name: "Gustavo Costa",
    bio: "Desenvolvedor Front-end com mais de 12 anos de experiência, trabalha com a nova versão do Angular desde sua versão beta, programação reativa e RxJS.",
    pictureUrl: "",
  },
  {
    name: "Lincoln Clarete",
    bio: "Tendo iniciado sua carreira como membro da comunidade de Software Livre, Lincoln contribuiu com projetos como o GNOME, Debian, co-criou o Guake Terminal, ajudou a realizar eventos pelo país, como o Encontro Mineiro de Software Livre e o Festival Internacional de Software Livre.  Lincoln contribuiu com o modelo de democracia participativa, liderando tecnicamente projetos como o Marco Civil da Internet e o Gabinete Digital no Rio Grande do Sul. Depois de ver que humanos são mais complicados que computadores, decidiu focar sua carreira em assuntos estritamente técnicos, como design de linguagens de programação, software distribuído e bancos de dados.  Lincoln atualmente trabalha no time de query de metricas no DataDog.",
    pictureUrl: "",
  },
  {
    name: "Yuri Sales",
    bio: "Desenvolvedor Back-End na Imperium Markets. Graduado em Análise e Desenvolvimento de Sistemas, pós-graduando em Engenharia de Software. Desenvolve em Python profissionalmente desde 2017.",
    pictureUrl: "",
  },
  {
    name: "Djalma Rodrigues",
    bio: "Me chamo Djalma Antony, mas atendo mais facilmente por Antony. Sou graduando em TI pela UFRN e Desenvolvedor Front-end Senior na Luizalabs.",
    pictureUrl: "",
  },
  {
    name: "Fernando Guisso",
    bio: "Especialista em appsec e desenvolvimento seguro. Já palestrou em vários eventos como Latinoware, Campus Party, Roadsec, Mindthesec, e é voluntário na capitulo OWASP Natal. Atualmente, ele trabalha como engenheiro de segurança de software na Globo e é uma pessoa ativa na comunidade de Open Source, contribuindo com projetos abertos de ferramentas de segurança como Nuclei, Amass e HuskyCI.",
    pictureUrl: "",
  },
  {
    name: "Kai Pimenta",
    bio: "Me formei em Design pela UFRN e trabalhei com moda antes de migrar de carreira. Hoje trabalho com Front End e ajudo pessoas em transição de carreira que precisam de mentoria :) ",
    pictureUrl: "",
  },
  {
    name: "Anderson Cirilo Valentim ",
    bio: "Bacharel em Sistemas de Informação pela UFERSA, atua como Analista de Cibersegurança no Conta Simples.",
    pictureUrl: "",
  },
  {
    name: "Hemerson Rafael Pereira Pontes",
    bio: "Hemerson Rafael é um profissional multifacetado atuando como Engenheiro de Dados, Desenvolvedor de Software e Analista de Automação Industrial na Geowellex, onde possui mais de 3,5 anos de experiência trabalhando com dados no setor de óleo e gás. Ele possui formação acadêmica na área, com bacharelado em Engenharia de Computação e Ciências e Tecnologia, com ênfase em Tecnologia de Computação, pela Universidade Federal do Rio Grande do Norte. Além de sua dedicação ao trabalho, Hemerson tem interesse em solucionar problemas utilizando tecnologia. Nos momentos de lazer, ele aprecia assistir filmes, ler livros, desfrutar do convívio familiar e é adepto da cultura maker.",
    pictureUrl: "",
  },
  {
    name: "Gabriel Lins",
    bio: "Atuo como cientista de dados há 3 anos, tenho desenvolvido soluções em Dados para ajudar a melhorar a saúde pública no Brasil. Além disso, sou um entusiasta da área de NLP, e tenho me aventurado nesse mundo dos modelos de linguagem :)",
    pictureUrl: "",
  },
  {
    name: "Andriéria Dantas",
    bio: "Andriéria Dantas é técnica em Informática, atualmente estudante de Sistemas para Internet(IFRN - Parnamirim ) e bolsista voluntária e  pesquisadora no Laboratório de Pesquisa em Redes e Sistemas Computacionais (NOCS Lab) do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN) tendo como principal coordenador o professor Diego Pereira. ",
    pictureUrl: "",
  },
  {
    name: "Lucas Matheus Alves da Silva",
    bio: "Olá, Me chamo Lucas Matheus, sou Técnico em Informática para Internet (IFRN) e Redes de Computadores (UFRN - IMD). Atualmente, sou estudante de Sistemas para Internet (IFRN). Profissionalmente, sou co-fundador da empresa LavaiLavem Turismo, uma agência de vendas de passeios com ênfase no turismo inteligente, e bolsista de Iniciação Científica em projetos nas áreas de Sistemas Multi-Vant, 5G, Arquitetura de Alto Desempenho e Realidade Aumentada. Desde criança, sempre gostei de assuntos relacionados à tecnologia e tenho uma imensa paixão em produzir, aprender e compartilhar conhecimento.",
    pictureUrl: "",
  },
  {
    name: "Hudson Brendon",
    bio: "Hudson Brendon é um desenvolvedor de software com 10 anos de experiência, atuando em linguagens como Python, JavaScript e Go Lang. Atualmente, ele é engenheiro de software na Luizalabs, uma empresa do grupo Magazine Luiza. Hudson tem um forte interesse em temas como arquitetura de software, iot, open source e open hardware.",
    pictureUrl: "",
  },
  {
    name: "Sarah Lima",
    bio: "Sarah é Team Lead e Desenvolvedora Sênior na thoughtbot empresa americana de consultoria especializada em Ruby on Rails. É Bacharel em TI pela UFRN e tem mais de 8 anos de experiência atuando com produtos de diversas escalas - desde produtos de pequenas startups a de grandes multinacionais. Já palestrou em eventos como a Campus Party, Python Brasil e DevFest Nordeste, e atuou de muitas outras iniciativas de comunidades de tecnologia. ",
    pictureUrl: "",
  },
  {
    name: "Mariana Fernandes de Medeiros",
    bio: "Sou formada em engenharia civil pela UFRN e com especialização na área, mas sempre tive muita afinidade e interesse na parte de programação. No fim de 2019/começo de 2020 decidi mudar de área totalmente, começando meus estudos voltados para programação + dados (análise/ciência de dados). No mesmo ano, fui conhecendo mais o mundo de startups de tech, fiz um bootcamp de desenvolvimento web e consegui minha primeira oportunidade como cientista de dados. Ao longo dos anos, fui migrando mais para área de engenharia de software/dados, que é o que realmente me identifico :) Hoje em dia trabalho para uma empresa da Estônia como engenheira de software desenvolvendo um software que tem como core linhagem de dados, além de estar fazendo um mestrado na UFPE em ciência da computação com foco em aprendizagem de máquina.",
    pictureUrl: "",
  },
  {
    name: "Victor Bastos Xavier",
    bio: "Aluno do Bacharelado em Tecnologia da informação, no 7 período.",
    pictureUrl: "",
  },
  {
    name: "Vinicius Mendes",
    bio: "Tech Lead e Senior Back end Engineer na Loadsmart, iniciou a carreira empreendendo com sua empresa de desenvolvimento de sites, depois foi Tech Lead no G1 da Globo.com, gerente de projetos na Dataprev e Professor Universitário. Formado em Engenharia de Computação pela UFRN e Especialista em Desenvolvimento de Sistemas Corporativos pela UNI-RN, possui mais de 15 anos de experiência com desenvolvimento de software.",
    pictureUrl: "",
  },
].map((data) => ({ ...data, slug: urlFormatString(data.name) }));

export default speakers;

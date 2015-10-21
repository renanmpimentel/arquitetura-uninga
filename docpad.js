module.exports = {

    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference infoy
        conf: {
            name: "Semana Acadêmica Arquitetura e Urbanismo Uningá",
            description: 'A Semana Acadêmica de Arquitetura e Urbanismo da Faculdade Ingá tem como objetivo estimular a reflexão sobre a produção da Arquitetura e do Urbanismo em um contexto contemporâneo, passando pela temática das políticas de habitação social, atuação profissional do arquiteto e urbanista e revivendo a obra de um dos mais importantes arquitetos brasileiros através da exibição do documentário "Vilanova Artigas: o arquiteto e a luz". O evento também tem como objetivo complementar a formação acadêmica dos estudantes do curso de Arquiteura e Urbanismo, através dos mini-cursos, oficinas e workshops, que proporcionarão grande contribuição e aperfeiçoamento no domínio de técnicas de representação gráfica. Por fim, como encerramento da semana, o desafio da charrete busca discutir diversas formas de pensar e fazer Arquitetura e Urbanismo, gerando reflexões e instigando a criatividade para solucionar problemas do cotidiano. Assim, o exercício instigará o aluno a uma reflexão mais profunda sobre os principais tópicos que regem o ensino e a prática da arquitetura e do urbanismo. A fragmentação das práticas de projeto, bem como a natural distancia em que se encontram as disciplinas teóricas necessitam serem extrapoladas eventualmente, para permitir ao acadêmico uma visão da totalidade que é o oficio da arquitetura.',
            date: "",
            // If your event is free, just comment this line
            //price: "$100",
            venue: "",
            address: "Faculdade Ingá",
            city: "Maringá",
            state: "Paraná"
        },

        // Site info
        site: {
            theme: "yellow-swan",
            url: "http://braziljs.github.io/conf-boilerplate/",
            googleanalytics: "UA-33656081-1"
        },

        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
          'about',
          'location',
          'speakers',
          'workshops',
          'charrete',
          'organization',
          'partners'
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "Sobre",
            location: "Localização",
            speakers: "Palestras",
            schedule: "Agenda",
            workshops: "Workshops",
            charrete: "Charrete",
            organization: "ComOrg",
            partners: "Apoio"
        },

        // The entire schedule
        schedule: [
          {
              name: "Beatriz Fleury e Ricardo Silva",
              photo: "themes/yellow-swan/img/beatrizericardo.png",
              bio: "Beatriz Fleury e Ricardo Silva são professores do departamento de arquitetura e urbanismo da Universidade Estadual de Maringá e apresentam pesquisa sobre a política habitacional recente e os impactos sócio ambientais no aglomerado metropolitano Sarandi – Maringá – Paiçandu.",
              company: "UEM",
              link: {
                  href: "http://www.dau.uem.br/",
                  text: "www.dau.uem.br"
              },
              presentation: {
                  title: "A política Habitacional recente em Maringá.",
                  description: "A política Habitacional recente e os impactos socioambientais aglomerado metropolitano Sarandi-Maringá-Paiçandu",
                  date: "27/10",
                  time: "19h00"
              }
          },
          {
              name: "GrupoPR",
              photo: "themes/yellow-swan/img/grupopr.jpg",
              bio: "O grupo pr arquitetura iniciou suas atividades em 2005 na cidade de Maringá - PR com a postura de realizar um trabalho integrado e coletivo nas áreas de projeto arquitetônico e projeto arquitetônico de interiores. Integrado porque considera desde os sistemas construtivos, até o acabamento e mobiliário. Coletivo porque reúne diversos integrantes e parceiros, cada um colaborando com a sua potencialidade.",
              company: "GrupoPR",
              link: {
                  href: "http://www.grupopr.arq.br/",
                  text: "www.grupopr.arq.br"
              },
              presentation: {
                  title: "Trajetória e obra em 10 anos",
                  description: "Os arquitetos João Vitor e Rodrigo Pupin formam com seus colaboradores o escritório GRUPOPR e apresentam sua trajetória e obra em 10 anos de atuação profissional",
                  date: "28/10",
                  time: "19h00"
              }
          },
          {
              name: "VILANOVA ARTIGAS 100",
              photo: "themes/yellow-swan/img/vilanova-artigas.jpg",
              bio: 'O documentário "Vilanova Artigas: o arquiteto e a luz" remonta a trajetória do icônico arquiteto brasileiro João Batista Vilanova Artigas. Por meio das lembranças de familiares, amigos, alunos, imagens de arquivo e visitas a seis de suas principais obras, a história de vida de Artigas é contada. Escrito e dirigido por Laura Artigas, neta do arquiteto, o filme tem codireção de Pedro Gorski e produção de Gal Buitoni e Luiz Ferraz, da Olé Produções.',
              company: "Teatro Regional Calil Haddad",
              link: {
                  href: "https://www.facebook.com/events/1658755757705623/",
                  text: "CAU/PR e IAB-PR"
              },
              presentation: {
                  title: "VILANOVA ARTIGAS 100",
                  description: 'O IAB-PR Núcleo Maringá , com apoio da Secretaria de Cultura da PMM, do CAU/PR e do IAB-PR, convida Arquitetos e estudantes para celebrar o centenário de Vilanova Artigas (1915-1985). A memória de um dos mais importantes arquitetos brasileiros será lembrada através da exibição do documentário "Vilanova Artigas: o arquiteto e a luz". Serão lançados ainda os livros "À mão livre do vovô", com desenhos do arquiteto, e "Vilanova Artigas", de autoria de Rosa Artigas.',
                  date: "29/10",
                  time: "19h30"
              }
          }
        ],

        // The entire schedule
        workshop: [
            {
                name: "Rosana Bacicheti",
                photo: "themes/yellow-swan/img/Rosana.jpg",
                bio: 'Doodle é uma palavra inglesa para referir um tipo de esboço ou desenho realizado quando uma pessoa está distraída ou ocupada. A palavra portuguesa é "rabisco". São desenhos simples que podem ter significado concreto de representação ou simplesmente representar formas abstratas.',
                company: "UEM",
                link: {
                    href: "http://www.uem.br/",
                    text: "www.uem.br"
                },
                presentation: {
                    title: "Oficina de criação e composição com Doodle",
                    description: "Materiais: Caneta retroprojetor ou nanquim ponta fina e grossa; Caneta hidrocor ou lápis aquarelado; Esquadro pequeno, regua e tesoura.",
                    date: "27/10",
                    time: "08h00",
                    local: "Lab. 15"
                }
            },
            {
              name: "Gleison Gerola",
              photo: "themes/yellow-swan/img/Gleison.jpg",
              bio: "A expressão gráfica computacional está presente cada vez mais em escritórios de design, arquitetura e engenharia modernos, por se tratar de uma ferramenta que otimiza e facilita a compreensão gráfica de projetos e produtos. Assim, o curso será um complemento ao conteúdo curricular do curso de Arquitetura e Urbanismo, com o objetivo de auxiliar em uma melhor qualidade de apresentação de trabalhos acadêmicos.",
              company: "Faculdade Ingá",
              link: {
                  href: "http://www.faculdadeinga.com.br/",
                  text: "www.faculdadeinga.com.br"
              },
              presentation: {
                  title: "Diagramação de Pranchas em Corel Draw - Parte I",
                  description: "Materiais: Notebook, incluindo mouse e carregador de bateria. O programa do Corel Draw deverá estar instalado.",
                  date: "27/10",
                  time: "14h00",
                  local: "Lab. 15"
              }
          },
          {
              name: "Oráculo Cursos",
              photo: "themes/yellow-swan/img/sketchup.jpg",
              bio: 'Sketchup é uma ferramenta fantástica onde você desenvolve projetos 3D com grande facilidade certo? NEM SEMPRE! Você precisa saber quais os plug-ins adequados para não sofrer na modelagem de escadas, telhados e formas orgânicas, o curso de Sketchup avançado é para você que já sabe utilizar o programa mas que ir além desse nível. Aulas com tira-dúvidas, novos plug-ins, e o melhor que o Sketchup tem para oferecer.',
              company: "Oráculo Cursos",
              link: {
                  href: "http://www.oraculocursos.com.br",
                  text: "www.oraculocursos.com.br"
              },
              presentation: {
                  title: "Sketchup - Ferramentas de velocidade",
                  description: "Materiais: Notebook, incluindo mouse e carregador de bateria. O programa do Sketchup deverá estar instalado.",
                  date: "28/10",
                  time: "08h00",
                  local: "Lab. 15"
              }
          },
          {
              photo: "themes/yellow-swan/img/Gleison.jpg",
              presentation: {
                  title: "Diagramação de Pranchas em Corel Draw - Parte II",
                  description: "Materiais: Notebook, incluindo mouse e carregador de bateria. O programa do Corel Draw deverá estar instalado.",
                  date: "28/10",
                  time: "14h00",
                  local: "Lab. 15"
              }
          },
          {
              photo: "themes/yellow-swan/img/Gleison.jpg",
              presentation: {
                  title: "Diagramação de Pranchas em Corel Draw - Parte I",
                  description: "Materiais: Notebook, incluindo mouse e carregador de bateria. O programa do Corel Draw deverá estar instalado.",
                  date: "29/10",
                  time: "08h00",
                  local: "Lab. 15"
              }
          },
          {
              photo: "themes/yellow-swan/img/Gleison.jpg",
              presentation: {
                  title: "Diagramação de Pranchas em Corel Draw - Parte II",
                  description: "Materiais: Notebook, incluindo mouse e carregador de bateria. O programa do Corel Draw deverá estar instalado.",
                  date: "30/10",
                  time: "08h00",
                  local: "Lab. 15"
              }
          }
        ],

        charrete: [
          {
              name: "",
              photo: "themes/yellow-swan/img/charrete.jpg",
              bio: "A origem do termo é controversa e múltipla. A versão mais conhecida vem da França, da Escola de Belas Artes de Paris, onde havia uma tradição que compreendia em dar aos estudantes uma tarefa de projeto em um tempo extremamente curto. Concluído o exercício, uma charrette passava pelas ruas, recolhendo os projetos. Na década de 80, o termo foi resgatado por urbanistas norte-americanos como uma nova forma colaborativa de planejamento da cidade e hoje se tornou mais uma importante ferramenta de elaboração de projetos.",
              company: "Faculdade Ingá",
              presentation: {
                  title: "II Charrete Arquitetura e Urbanismo",
                  description: "A política Habitacional recente e os impactos socioambientais aglomerado metropolitano Sarandi-Maringá-Paiçandu",
                  date: "30/10",
                  time: "19h00"
              }
          }
        ],

        // List of Partners
        partners: [
          {
              name: "Uningá",
              logo: "themes/yellow-swan/img/uninga.png",
              url: "http://faculdadeinga.com.br/"
          }
        ],

        // List of Partners
        organization: [
          {
              name: "Daniel",
              logo: "themes/yellow-swan/img/organization/Daniel.jpg",
              url: "https://www.facebook.com/daniel.bittencourtcosta"
          },
          {
              name: "Andressa",
              logo: "themes/yellow-swan/img/organization/Andressa.jpg",
              url: "https://www.facebook.com/andressa.mortean"
          },
          {
              name: "Guilherme",
              logo: "themes/yellow-swan/img/organization/Guilherme.jpg",
              url: "https://www.facebook.com/tijolins"
          },
          {
              name: "Hugo",
              logo: "themes/yellow-swan/img/organization/Hugo.jpg",
              url: "https://www.facebook.com/rompatto"
          },
          {
              name: "Laize",
              logo: "themes/yellow-swan/img/organization/Laize.jpg",
              url: "https://www.facebook.com/laizebianchi"
          },
          {
              name: "Leopoldo",
              logo: "themes/yellow-swan/img/organization/Leopoldo.jpg",
              url: "https://www.facebook.com/leopoldolopesI"
          },
          {
              name: "Luiz Felipe",
              logo: "themes/yellow-swan/img/organization/LuizFelipe.jpg",
              url: "https://www.facebook.com/felipebathke"
          },
          {
              name: "Paola",
              logo: "themes/yellow-swan/img/organization/Paola.jpg",
              url: "https://www.facebook.com/paola.verri.5"
          },
          {
              name: "Giovana",
              logo: "themes/yellow-swan/img/organization/Giovana.jpg",
              url: "https://www.facebook.com/giovana.bergamo.1"
          },
          {
              name: "Sarah",
              logo: "themes/yellow-swan/img/organization/Sarah.jpg",
              url: "https://www.facebook.com/sarah.augustasilva"
          }
        ],











        // Theme path
        getTheme: function () {
            return "themes/" + this.site.theme;
        },

        // Site Path
        getUrl: function () {
            return this.site.url;
        }
    }
};

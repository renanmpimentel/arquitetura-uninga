module.exports = {

    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference infoy
        conf: {
            name: "Arquitetura Uningá",
            description: "Semana de Arquitetura da Uningá",
            date: "27/10 - 30/10",
            // If your event is free, just comment this line
            //price: "$100",
            venue: "Uningá",
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
          'partners'
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "Sobre",
            location: "Localização",
            speakers: "Palestras",
            schedule: "Agenda",
            workshops: "Workshops",
            partners: "Apoio"
        },

        // The entire schedule
        schedule: [
          {
              name: "Beatriz Fleury e Ricardo Silva",
              photo: "themes/yellow-swan/img/beatrizericardo.png",
              bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
              name: "Tiririca",
              photo: "themes/yellow-swan/img/tiririca.jpg",
              bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
              company: "Tiririca",
              link: {
                  href: "http://www.google.arq.br/",
                  text: "www.google.arq.br"
              },
              presentation: {
                  title: "Titulo workshop",
                  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                  date: "21/10",
                  time: "21h00"
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

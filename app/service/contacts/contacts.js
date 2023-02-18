(() => {
	'use strict';

  // Cria o Módulo 'api.contacts'
	angular.module('api.contacts', [])
    .factory('Contacts', () => { /* O método 'factory' cria um novo serviço.
                                         Nesse caso, cria o serviço 'Contacts'. */
      let Contacts = {};

      const ContactsList = [ // Lista de Contatos - JSON
        {
            "id": 1,
            "nome": "Calebe Tiago Arthur da Luz",
            "idade": 19,
            "email": "calebe-daluz97@gigaonline.com.br",
            "senha": "aUdxiJwstR"
        },
        {
            "id": 2,
            "nome": "Paulo Yuri da Rosa",
            "idade": 23,
            "email": "paulo_yuri_darosa@br.pwc.com",
            "senha": "c0xsjwPxJG"
        },
        {
            "id": 3,
            "nome": "Benedito Benício Gabriel Peixoto",
            "idade": 27,
            "email": "benedito_peixoto@arysta.com.br",
            "senha": "ytTA2lySWu"
        },
        {
            "id": 4,
            "nome": "Diego Cláudio Oliver Cardoso",
            "idade": 33,
            "email": "diegoclaudiocardoso@smbcontabil.com.br",
            "senha": "bucpOXeoK4"
        }
      ]

      // Cria o método '.all'
      Contacts.all = () => {
        return ContactsList; // Retorna Lista de Contatos
      };

      // Cria o método '.id'
      Contacts.id = () => {
        return null; // Retorna o Contato do ID passado
      }

      return Contacts; // Retorna o serviço
	  });
})();
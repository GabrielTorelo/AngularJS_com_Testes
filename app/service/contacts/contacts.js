(function() {
	'use strict';

    // Cria o Módulo 'api.contacts'
	angular.module('api.contacts', [])
    .factory('Contacts', function() { /* O método 'factory' cria um novo serviço.
                                         Nesse caso, cria o serviço 'Contacts'. */
      let Contacts = {};

      // Retorna Lista de Contatos
      Contacts.all = function() {
        return null;
      };

      return Contacts; // Retorna o serviço
	  });
})();
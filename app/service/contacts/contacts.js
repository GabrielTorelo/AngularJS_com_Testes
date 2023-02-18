(function() {
	'use strict';

    // Cria o Módulo 'api.contacts'
	angular.module('api.contacts', [])
        .factory('Contacts', function() { /* O método 'factory' cria um novo serviço.
                                             Nesse caso, cria o serviço 'Contacts'. */
		    var Contacts = {}; // Lista de Contatos - JSON

		    return Contacts; // Retorna o serviço
	});
})();
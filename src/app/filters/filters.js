(() => {
	'use strict';

	angular.module('api.filters', [])
    .factory('Filters', ($filter) => { /* O parâmetro '$filter' recebido, é um 
                                          método do próprio Framework (AngularJS) */
      let Filters = {};

      // Cria o método '.dateUStoBrazil'.
      Filters.dateUStoBrazil = (date) => { /* O Método converte datas no formato
                                              Ano-Mês-Dia para Dia-Mês-Ano. */

        if (date === null) // Verifica se parâmetro recebido é nulo.
          return ''; // Retorna uma string vazia.

        const _date = $filter('date')(date, 'dd-MM-yyyy'); /* O método "$filter('date')"
                                                              (Framework - AngularJS), filtra e
                                                              retorna uma data. Para isso, é
                                                              necessário passar entre parênteses
                                                              [( )] a data que deseja ser filtrada
                                                              (convertida) e o formato desejado. */
        
        if (_date === date)
          return 'ERROR_123';

        return _date;
      };

      return Filters;
    });
})();

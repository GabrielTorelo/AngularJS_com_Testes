describe('Grupo de Testes - Filtros', () => {
  let TestFilters; // Variável auxiliar.

  // Chama o Módulo 'api.filters'
  beforeEach(angular.mock.module('api.filters')); /* O 'beforeEach' é um método chamado antes
                                                     de qualquer execução de teste. Ou seja,
                                                     caso seja necessário realizar uma
                                                     configuração antes do inicio dos testes,
                                                     deve-se utilizar esse método.
                                                     Tip: Permite que você execute algum código
                                                     antes da especificação no bloco 'it()'. */


  // Injeta o Serviço
  beforeEach(inject((Filters) => { /* O 'inject' é um método que cria uma nova instância
                                      injetora para os testes. Nesse caso, em outras
                                      palavras, ele injeta o serviço 'Filters' no nosso
                                      caso de teste.
                                      Importante: O nome do parâmetro recebido pela
                                      função do método 'inject' (Filters), dever ser
                                      exatamente igual ao retorno do módulo. */

    TestFilters = Filters; /* Atribui o serviço recebido (Filters) para
                              a variável auxiliar 'TestFilters'. */
    
  }));

  // Primeiro Caso de Teste
  it('Serviço', () => { /* O método 'it' (do inglês isto), é usado para dizer que
                           algo (dentro do seu escopo) deve ocorrer, ou seja, define
                           um caso de teste. */
    expect(TestFilters) // O método 'expect' espera e retorna uma resposta.
      .toBeDefined(); // O método 'toBeDefined' testa e retorna se o serviço foi definido.
  });

  // Segundo Caso de Teste
  it('Método "dateUStoBrazil"', () => {
    expect(TestFilters.dateUStoBrazil('2023-02-24')) /* O método 'expect' espera e retorna 
                                                        uma resposta. */
      .toEqual('24-02-2023');  /* O método 'toEqual' testa se o retorno do método 
                                  '.dateUStoBrazil' é igual ao retorno esperado. Nesse caso,
                                  é esperado converter '2023-02-24' para '24-02-2023'. */
  });

  // Terceiro Caso de Teste
  it('Formato inválido no Método "dateUStoBrazil"', () => { /* Como temos 2 testes dentro do Caso de
                                                               Teste, ambos devem retornar 'SUCCESS'
                                                               para o Caso de Teste ser válido
                                                               (ou seja, retornar 'SUCCESS'). */

    // Teste 1
    expect(TestFilters.dateUStoBrazil('02-25-2023')) /* O método 'expect' espera e retorna 
                                                      uma resposta. Repare que é passado
                                                      para o método '.dateUStoBrazil' um
                                                      formato inválido. */
      .not.toEqual('25-02-2023'); /* O método 'not', junto com o 'toEqual', retorna verdadeiro
                                    (ou seja, 'SUCCESS' no teste) caso o formato passado seja um
                                    formato inválido. */

    // Teste 2
    expect(TestFilters.dateUStoBrazil('02-25-2023'))
      .toEqual('ERROR_123'); /* Nesse caso, estamos testando se o retorno é 'ERROR_123'
                                ERROR_123 = "Data inválida" */
  });

}); /* O 'describe' é um agrupador de casos de Teste. 
       Ao executar o teste é feito um alinhamento
       por tag 'describe' existente.
       Tip: Permite formatar melhor o layout de exibição
       para acompanhar os testes com maior qualidade. */

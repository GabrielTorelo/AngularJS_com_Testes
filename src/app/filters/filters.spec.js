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

});

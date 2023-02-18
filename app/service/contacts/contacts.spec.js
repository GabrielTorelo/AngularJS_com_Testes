describe('Grupo de Testes', function() {
  var TestContacts; // Variável auxiliar

  // Chama o Módulo 'api.contacts'
  beforeEach(angular.mock.module('api.contacts')); /* O 'beforeEach' é um método chamado antes
                                                      de qualquer execução de teste. Ou seja,
                                                      caso seja necessário realizar uma
                                                      configuração antes do inicio dos testes,
                                                      deve-se utilizar esse método.
                                                      Tip: Permite que você execute algum código
                                                      antes da especificação no bloco 'it()' */

  // Injeta o Serviço
  beforeEach(inject(function(Contacts) { /* O 'inject' é um método que cria uma nova instância
                                            injetora para os testes. Nesse caso, em outras
                                            palavras, ele injeta o serviço 'Contacts' no nosso
                                            caso de teste.
                                            Importante: O nome do parâmetro recebido pela
                                            função do método 'inject' (Contacts), dever ser
                                            exatamente igual ao retorno do módulo. */

    TestContacts = Contacts; /* Atribui o serviço recebido 'testContact' para
                                   a variável auxiliar 'testContacts'. */
    
  }));

  // Primeiro Caso de Teste
  it('Serviço OK', function() { /* O método 'it' (do inglês isto), é usado para dizer que
                                   algo (dentro do seu escopo) deve ocorrer, ou seja, define
                                   um caso de teste. */
    expect(TestContacts) // O método 'expect' espera e retorna uma resposta.
      .toBeDefined(); // O método 'toBeDefined' testa e retorna se o serviço foi definido.
  });

}); /* O 'describe' é um agrupador de casos de Teste. 
       Ao executar o teste é feito um alinhamento
       por tag 'describe' existente.
       Tip: Permite formatar melhor o layout de exibição
       para acompanhar os testes com maior qualidade. */
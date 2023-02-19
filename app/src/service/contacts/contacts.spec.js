describe('Grupo de Testes - Contatos', () => {
  let TestContacts; // Variável auxiliar.

  const TestContactsList = [  // Constante com Lista de Contatos - JSON.
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

  const TestSingleContact = {  // Constante com Contato Único - JSON.
    "id": 2,
    "nome": "Paulo Yuri da Rosa",
    "idade": 23,
    "email": "paulo_yuri_darosa@br.pwc.com",
    "senha": "c0xsjwPxJG"
  };

  // Chama o Módulo 'api.contacts'
  beforeEach(angular.mock.module('api.contacts')); /* O 'beforeEach' é um método chamado antes
                                                      de qualquer execução de teste. Ou seja,
                                                      caso seja necessário realizar uma
                                                      configuração antes do inicio dos testes,
                                                      deve-se utilizar esse método.
                                                      Tip: Permite que você execute algum código
                                                      antes da especificação no bloco 'it()'. */

  // Injeta o Serviço
  beforeEach(inject((Contacts) => { /* O 'inject' é um método que cria uma nova instância
                                       injetora para os testes. Nesse caso, em outras
                                       palavras, ele injeta o serviço 'Contacts' no nosso
                                       caso de teste.
                                       Importante: O nome do parâmetro recebido pela
                                       função do método 'inject' (Contacts), dever ser
                                       exatamente igual ao retorno do módulo. */

    TestContacts = Contacts; /* Atribui o serviço recebido 'Contacts' para
                                a variável auxiliar 'TestContacts'. */
    
  }));

  // Primeiro Caso de Teste
  it('Serviço', () => { /* O método 'it' (do inglês isto), é usado para dizer que
                           algo (dentro do seu escopo) deve ocorrer, ou seja, define
                           um caso de teste. */
    expect(TestContacts) // O método 'expect' espera e retorna uma resposta.
      .toBeDefined(); // O método 'toBeDefined' testa e retorna se o serviço foi definido.
  });

  describe('Todos Contatos', () => {

    // Segundo Caso de Teste
    it('Método "all"', () => {
      expect(TestContacts.all) // O método 'expect' espera e retorna uma resposta.
        .toBeDefined(); // O método 'toBeDefined' testa e retorna se o método '.all' foi definido.
    });

    // Terceiro Caso de Teste
    it('Lista de Contatos', () => {
      expect(TestContacts.all()) // O método 'expect' espera e retorna uma resposta.
        .toEqual(TestContactsList) /* O método 'toEqual' testa se o retorno do método
                                      '.all' é igual a constante 'TestContactsList'. */
    });
    
  });

  describe('Contato por ID', () => {

    // Quarto Caso de Teste
    it('Método "id"', () => {
      expect(TestContacts.id) // O método 'expect' espera e retorna uma resposta.
        .toBeDefined(); // O método 'toBeDefined' testa e retorna se o método '.id' foi definido.
    });

    // Quinto Caso de Teste
    it('ID Retorna o Contato', () => {
      expect(TestContacts.id(2)) // O método 'expect' espera e retorna uma resposta.
        .toEqual(TestSingleContact) /* O método 'toEqual' testa se o retorno do método '.id'
                                       é igual ao contato da constante 'TestSingleContact'. */
    });

    // Sexto Caso de Teste
    it('ID não existe', () => {
      expect(TestContacts.id('INVÁLIDO')) /* O método 'expect' espera e retorna uma resposta.
                                             Repare que é passado para o método '.id' um id
                                             que não existe na lista de contatos. */
        .not.toBeDefined() /* O método 'not', junto com o 'toBeDefined', retorna verdadeiro
                              (ou seja, 'SUCCESS' no teste) caso o 'id' passado não exista
                              na Lista de Contatos. */
    });

  })

}); /* O 'describe' é um agrupador de casos de Teste. 
       Ao executar o teste é feito um alinhamento
       por tag 'describe' existente.
       Tip: Permite formatar melhor o layout de exibição
       para acompanhar os testes com maior qualidade. */
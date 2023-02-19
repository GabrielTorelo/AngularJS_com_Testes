// Configuração do Karma

module.exports = function (config) {
	config.set({
		// Caminho base que será usado para resolver todos os padrões (por exemplo, arquivos, excluir)
		basePath: "",

		// Frameworks usados
		frameworks: ["jasmine"],

		// Lista de arquivos para carregar no navegador
		files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/release/angular--ui-router.js',

      'app/src/service/contacts/contacts.js',

      'app/src/app.js',
      'app/src/service/contacts/*.spec.js'
    ],

		// Lista de arquivos para não carregar no navegador (excluir)
		exclude: [],

		// Pré-processar arquivos correspondentes antes de entregá-los ao navegador
		preprocessors: {},

		// Gera relatório de resultados dos testes
		reporters: ["spec"],

		// Porta do serviço WEB
		port: 9876,

		// Servidor de hospedagem
		hostname: "localhost",

		// Serviço de endereço de escuta
		listenAddress: "localhost",

		// Ativar/Desativar cores na saída (relatórios e logs)
		colors: true,

		// Nível de registro
    logLevel: config.LOG_INFO,

		// Ativar/Desativar o observador de arquivos, executando testes sempre que qualquer arquivo for alterado
		autoWatch: true,

		// Inicia esses navegadores
		browsers: ["Chrome"],

		// Modo de integração contínua, se verdadeiro, o Karma captura os navegadores, executa os testes e sai
		singleRun: false,

		// Nível de simultaneidade, quantas instâncias do navegador devem ser iniciadas simultaneamente
		concurrency: Infinity,
	})
}

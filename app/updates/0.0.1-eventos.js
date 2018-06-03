exports.create = {
	CategoriaEvento: [
		{'name': 'seminário'},
		{'name': 'defesa de mestrado'}
	],

	Evento: [
		{
		 'titulo': 'SECOMP',
		 'dataInicial': new Date(2018, 7, 15, 08, 00),
		 'dataFinal' : new Date(2018, 7, 20),
		 'local': 'DC',
		 'categorias': [],
		 'imagem': '',
		 'descricao': 'Aqui vai alguma descricao'
		},
		{
		 'titulo': 'Defesa de mestrado do aluno Fulano',
		 'dataInicial': new Date(2018, 5, 20, 14, 30),
		 'dataFinal' : new Date(2018, 5, 21, 14, 30),
		 'local': 'DC',
		 'categorias': [],
		 'imagem': '',
		 'descricao': 'Aqui vai alguma descricao'
	 },
	 {
		'titulo': 'Dia de Java',
		'dataInicial': new Date(2018, 6, 10, 9, 00),
		'local': 'DC',
		'categorias': [],
		'imagem': '',
		'descricao': 'Aqui vai alguma descricao'
	 }
	],
};

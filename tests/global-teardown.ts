export async function setup() {
  global.data = 'Imagem para excluir da memória';
  console.log(
    'Iniciar imagem docker para ambiente de testes e armazenar na variável global',
  );
}

export async function teardown() {
  console.log(global.data);
}

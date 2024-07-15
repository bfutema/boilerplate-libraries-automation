import { afterAll, beforeAll } from 'vitest';

beforeAll(() => {
  console.log('MOCAR INFORMAÇÕES NECESSÁRIAS PARA OS TESTES FICAREM ISOLADOS');
});

afterAll(() => {
  console.log('LIMPAR INFORMAÇÕES CASO NECESSÁRIO');
});

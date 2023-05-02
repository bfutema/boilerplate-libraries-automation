import { describe, it, expect } from 'vitest';

import { main } from '@/main';

describe('MAIN', () => {
  it('should be ok', () => {
    const result = main();

    expect(result).toBeTruthy();
  });

  it('should not be ok', () => {
    const result = main(true);

    expect(result).toBeFalsy();
  });
});

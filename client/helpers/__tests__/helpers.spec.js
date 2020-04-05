import { clearProps, joinClassNames } from '..';

describe('Test helpers', () => {
  it('should clear props', () => {
    const clearedProps = clearProps({
      a: 1,
      b: '1',
      c: true,
      d: 0,
      e: '',
      f: false,
      g: NaN,
      h: null,
      i: undefined,
    });

    Object.values(clearedProps).forEach((value) => {
      expect(value).toBeTruthy();
    });

    expect(clearedProps).toStrictEqual({
      a: 1,
      b: '1',
      c: true,
    });
  });

  it('should join classes', () => {
    const joinedClassNames = joinClassNames(
      'button',
      '',
      false,
      null,
      undefined,
      'is-primary',
    );

    expect(joinedClassNames).toStrictEqual('button is-primary');
  });
});

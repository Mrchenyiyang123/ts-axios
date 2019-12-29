import Cancel, { isCancel } from '../../src/cancel/Cancel'
import { operation } from '_@types_retry@0.12.0@@types/retry'

describe('cancel:Cancel', () => {
  test('should returns correct result when message is specofied', () => {
    const cancel = new Cancel('Operation has been canceled.')
    expect(cancel.message).toBe('Operation has been canceled.')
  })

  test('should returns true if value is a Cancel', () => {
    expect(isCancel(new Cancel())).toBeTruthy()
  })

  test('should returns false if value is not a Cancel', () => {
    expect(isCancel({ foo: 'bar' })).toBeFalsy()
  })
})

export const INIT = 'INIT';

export function hostsInit(list) {
  return {
    type: INIT,
    list: list
  }
}

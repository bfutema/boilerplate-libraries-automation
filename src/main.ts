export function main(withCondition = false) {
  console.log('OK');

  if (withCondition) {
    return false;
  }

  return true;
}

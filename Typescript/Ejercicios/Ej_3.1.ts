function add(x: string, y: string): number {
  return Number(x) + Number(y);
}

function sumArray(numbers: any[]): number {
  return numbers.reduce(add, 0);
}

const someSum: number = sumArray(['3', '6', '9']);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);
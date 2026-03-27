export class Product {
  constructor(
    public readonly id: number,
    public nome: string,
    public preco: number,
  ) {
    if (preco < 0) throw new Error('O preço não pode ser negativo');
  }
}
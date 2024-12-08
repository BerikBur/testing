import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart;
  });

  test('добавление товара в корзину', () => {
    const item: Buyable = {
      id: 1,
      name: 'Book1',
      price: 1500,
    };
    cart.add(item);
    expect(cart.items).toEqual([item]);
  });

  test('подсчет общей суммы без скидки', () => {
    const item1: Buyable = {
      id: 1,
      name: 'Book1',
      price: 2500,
    };
    const item2: Buyable = {
      id: 2,
      name: 'Book2',
      price: 500,
    };
    cart.add(item1);
    cart.add(item2);
    expect(cart.totalSum()).toBe(3000);
  });

  test('подсчет суммы товаров с учетом скидки', () => {
    const item1: Buyable = {
      id: 1,
      name: 'Book1',
      price: 2500,
    };
    const item2: Buyable = {
      id: 2,
      name: 'Book2',
      price: 500,
    };
    cart.add(item1);
    cart.add(item2);
    expect(cart.totalSumWithDiscount(10)).toBe(2700);
  });

  test('удаление элемента по id', () => {
    const item1: Buyable = {
      id: 1,
      name: 'Book1',
      price: 1000,
    };
    const item2: Buyable = {
      id: 1,
      name: 'Book1',
      price: 1000,
    };
    const item3: Buyable = {
      id: 2,
      name: 'Book1',
      price: 1000,
    };
    cart.add(item1);
    cart.add(item2);
    cart.add(item3);
    cart.removeItem(1);
    expect(cart.items).toEqual([item3]);
  })


})

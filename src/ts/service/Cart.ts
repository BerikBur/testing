import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    //посчитать общую сумму товаров без учета скидки
    totalSum(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    //посчитать сумму товаров в корзине с учетом скидки
    totalSumWithDiscount(discount: number): number {
        const totalSum = this.totalSum();
        return (totalSum - (totalSum * discount / 100));
    }

    //удаление элемента по id
    removeItem(idToRemove: number): Buyable[] {
        this._items = this._items.filter(item => item.id !== idToRemove);
    }
}
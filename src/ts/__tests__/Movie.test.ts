import Movie from '../domain/Movie';
import Buyable from '../domain/Buyable';
import Cart from '../service/Cart';

describe('проверка класса Movie, добавление экземпляра в корзину', () => {
    const movie: Movie = new Movie(
        1234,
        'Advangers',
        1000,
        'Supers',
        2014,
        'USA',
        'We will win',
        ['action'],
        1.35,
    );

    const cart: Cart = new Cart();

    cart.add(movie);
    test('добавление в корзину фильма', () => {
        expect(cart.items).toEqual([movie]);
    });

    test('создание экземпляра Movie', () => {
        expect(movie).toBeInstanceOf(Movie);
    });

    test('проверка свойств', () => {
        expect(movie.id).toBe(1234);
        expect(movie.name).toBe('Advangers');
        expect(movie.price).toBe(1000);
        expect(movie.subTitle).toBe('Supers');
        expect(movie.year).toBe(2014);
        expect(movie.country).toBe('USA');
        expect(movie.slogan).toBe('We will win');
        expect(movie.genres).toEqual(['action']);
        expect(movie.duration).toBe(1.35);
    });

    test('проверка метода получения информации о фильме', () => {
        expect(movie.getInfo()).toBe('Advangers (2014) - We will win');
    });

    test('невозможность отицательной цены фильма', () => {
        expect(() => {
            new Movie(
                1,
                'Inception',
                -1500, // отрицательная цена
                'A mind-bending thriller',
                2010,
                'USA',
                'Your mind is the scene of the crime.',
                ['Sci-Fi', 'Thriller'],
                2.28
            );
        }).toThrow(new Error("Цена не может быть отрицательной"));
    });
})
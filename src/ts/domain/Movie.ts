import Buyable from "./Buyable";

class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly subTitle: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genres: string[],
        readonly duration: number
    ) { 
        if (price < 0) {
            throw new Error("Цена не может быть отрицательной");
        }
      } 

    getInfo(): string {
        return `${this.name} (${this.year}) - ${this.slogan}`;
    }
}

export default Movie;
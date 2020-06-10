import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'price'
})
export class PriceNumberPrice implements PipeTransform {
    transform(value: number, symbol: string): string {

        return ` ${symbol} ${value} `;
    }
}

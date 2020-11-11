import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeSentence'
})
export class CapitalizeSentencePipe implements PipeTransform {

  transform(value: string): string {
    const splitted = value.split(' ');
    let result = '';

    splitted.forEach(word => result += `${word.slice(0, 1).toUpperCase()}${word.slice(1)} `);
    return result;
  }

}

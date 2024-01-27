import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gamePipe',
  standalone: true
})
export class GamePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

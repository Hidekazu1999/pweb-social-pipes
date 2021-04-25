import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    if (telefone && (telefone.length === 8)){
      return `9${telefone.substr(0, 4)}-${telefone.substr(4, 7)}`;
    }
    else if (telefone && (telefone.length === 10 || telefone.length === 11)){
      if (telefone.length === 10) {
        telefone = `0${telefone}`;
      }
      return `(${telefone.substr(0, 3 )}) 9${telefone.substr(3, 4 )}-${telefone.substr(7, 10)}`;
    }
    else {
      return telefone;
    }
  }

}

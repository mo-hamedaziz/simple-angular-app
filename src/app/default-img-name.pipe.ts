import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImgName'
})
export class DefaultImgNamePipe implements PipeTransform {

  transform(value: string, defaultImagePath: string = 'assets/images/default.png'): string {
    if (!value || value.trim().length === 0){
      return defaultImagePath;
    }

    return value;
  }

}

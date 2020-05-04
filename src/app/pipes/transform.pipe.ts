import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    console.log(value)
    //code of transform
    let str:string;
    str=value.replace(value[0],value[0].toUpperCase())
    return str;
  }

}

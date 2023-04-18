import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown { //rest parameters ....args here are parameters

   if(value.gender == 'f')
   return `Miss ${value.name} ${args}`
   else
   return `Mr ${value.name} ${args}`
    
  }

}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'color'
})

export class ColorPipe implements PipeTransform{
  transform(value: number):string {
    if(value === 0)
    {
    return "rojo"
    }
    if(value === 1)
    {
    return "negro"
    }
    if(value === 2)
    {
    return "azúl"
    }
    if(value === 3)
    {
    return "verde"
    }
   return ''
  }
}


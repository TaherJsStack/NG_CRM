import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTime'
})
export class DataTimePipe implements PipeTransform {

  transform(value: string): unknown {
    if (value) {
      value = value.toString().replace(/\d{4}(?=.)/g, '$& '); 
      let newValue = new Date(Date.parse(value)).toISOString().replace('T',' ').replace(".000Z", "")
      return newValue;
    } else {
      return value;
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cinemasList',
  standalone: true
})
export class CinemasListPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    if (!Array.isArray(value)) {
      return value;
    }

    // Extract the first three items from the array
    const extractedItems = value.slice(0, 3);

    // Display the remaining items in a tooltip
    const tooltipItems = value.slice(3);

    // Join the tooltip items with a comma
    const tooltipContent = tooltipItems.join(', ');

    return tooltipContent.toString()
  }
}

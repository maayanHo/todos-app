import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

   transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter( item => {
      // format date for filter
      const dateFormat = this.datePipe.transform(item.date, 'dd/MM/yyyy');

      return item.text.toLowerCase().includes(searchText.toLowerCase()) ||
        dateFormat.includes(searchText);
    });
  }
}

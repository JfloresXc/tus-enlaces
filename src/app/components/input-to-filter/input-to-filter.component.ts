import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-to-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-to-filter.component.html',
  styleUrl: './input-to-filter.component.css',
})
export class InputToFilterComponent {
  @Input() data: any[] = [];
  @Output() setFilteredData = new EventEmitter();
  textValue: string = '';

  changeFilterData(textOfInput: any) {
    if (this.data.length === 0) return this.setFilteredData.emit(this.data);

    let firstItem = this.data[0];
    let keys = Object.keys(firstItem);

    let dataFiltered = this.data.filter((item) => {
      let findedItem = keys.find((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(textOfInput.toLowerCase().trim());
      });

      return Boolean(findedItem);
    });

    this.setFilteredData.emit(dataFiltered);
  }
}

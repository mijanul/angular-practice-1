import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss'],
})
export class MessageDetailsComponent {
  @Input()
  index: number = -1;
  @Input()
  message: any = {};

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();
  onDelete(): void {
    this.delete.emit(this.index);
  }
}

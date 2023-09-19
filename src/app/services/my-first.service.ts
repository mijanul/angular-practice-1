import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  constructor() {
    this.init();
  }

  messages: Array<any> = [];

  init(): void {
    this.insert({
      name: 'Haque',
      email: 'haque@gmail.com',
      message: 'private',
    });
    this.insert({ name: 'Mijanul', email: 'mjn@gmail.com', message: 'public' });
    this.insert({ name: 'sk', email: 'sk@gmail.com', message: 'protected' });
  }

  insert(message: { message: string; name: string; email: string }): void {
    this.messages.unshift(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  delete(index: number): void {
    this.messages.splice(index, 1);
  }
}

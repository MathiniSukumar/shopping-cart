import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject()

  constructor() { }

  sendMessage(product) {
    this.subject.next(product)
  }

  getMessage() {
    console.log("ppppppp")
    console.log(this.subject.asObservable())
    return this.subject.asObservable()
  }
}

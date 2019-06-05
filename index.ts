import { Semaphore } from "@seangenabe/semaphore"

export class Mutex extends Semaphore {
  constructor() {
    super(1)
  }
}

export default Mutex

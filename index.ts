export class Mutex {
  private q: Set<Promise<void>>

  constructor() {
    this.q = new Set<Promise<void>>()
  }

  async wait(): Promise<() => void> {
    const { q } = this
    await Promise.all([...q])
    let resolve
    const p = new Promise<void>(r => (resolve = r))
    const lock = () => {
      q.delete(p)
      resolve()
    }
    q.add(p)
    return lock
  }
}

export default Mutex

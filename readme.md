# Mutex

Simple async-await mutex.

## Usage

```typescript
import { Mutex } from '@seangenabe/mutex'

const mutex = new Mutex()

const release = await mutex.wait()
...
release()
```

### API

#### async mutex.wait(): Promise<() => void>

Waits for other claims on this mutex, then resolves with a function that can be called to release the claim on this mutex.

# Queue

Simple queue written in TypeScript.

Queue is generic class, so you can use it with items of different types and your TypeScript code will khow with what type you are working.

## Example

You can use Queue with primitive types:

```ts
import Queue from 'simple-queue-ts';

const wordsQueue = new Queue<string>();

wordsQueue.enqueue('Hello'); // TypeScript knows, that string is allowed to store in wordsQueue
wordsQueue.enqueue('World');

wordsQueue.dequeue()?.toUpperCase(); // TypeScript khows, that dequeue method should return string or undefined
```

and with custom types:

```ts
import Queue from 'simple-queue-ts';

type User = {
    name: string;
    age: number;
};

const usersQueue = new Queue<User>();

usersQueue.enqueue({ name: 'Jack', age: 42 });
```

## API

Queue is generic class. You can define items type by passing some `T` type during class instance creation:
```ts
const queue = new Queue<T>();
```

| Method | Type | Description |
| - | - | - |
| `enqueue` | (item: T) => void | Adds item to the queue|
| `dequeue` | () => T or undefined | Returns first item from the queue. If queue is empty, method will return undefined|
| `isEmpty` | () => boolean | Returns boolean: is queue empty or not|

## License

MIT

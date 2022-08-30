# Queue

Simple queue written in TypeScript.

Queue is generic class, so you can use it with items of different types and your TypeScript code will khow with what type you are working.

## Example

You can use Queue with primitive types:

```ts
const wordsQueue = new Queue<string>();

wordsQueue.enqueue('Hello'); // TypeScript know, that string is allowed to store in wordsQueue
wordsQueue.enqueue('World');

wordsQueue.dequeue()?.toUpperCase(); // TS  khow, that dequeue method should return string or undefined
```

and with custom types:

```ts
type User = {
    name: string;
    age: number;
};

const usersQueue = new Queue<User>();

usersQueue.enqueue({ name: 'Jack', age: 42 });
```
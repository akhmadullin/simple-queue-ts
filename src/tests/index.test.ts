import Queue from '..';

test('Queue should be empty just after creation', () => {
  const queue = new Queue();

  expect(queue.isEmpty()).toBe(true);
});

test('Queue should not be empty after item was enqueued', () => {
  const queue = new Queue<number>();

  queue.enqueue(5);

  expect(queue.isEmpty()).toBe(false);
});

test('Queue should return first added element on first dequeue() call', () => {
  const queue = new Queue<number>();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.dequeue()).toBe(1);
});

test('Queue should become empty when all items was dequeued', () => {
  const queue = new Queue<number>();
  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.isEmpty()).toBe(false);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.isEmpty()).toBe(true);
  expect(queue.dequeue()).toBe(undefined);
});

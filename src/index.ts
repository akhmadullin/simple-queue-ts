/**
 * Class, that implements queue data structure
 */
class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Adds item to the queue
   */
  public enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Returns first item from the queue
   *
   * If queue is empty, method will return undefined
   */
  public dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Returns boolean: is queue empty or not
   */
  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export default Queue;

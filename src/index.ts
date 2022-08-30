class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public enqueue(item: T): void {
    this.items.push(item);
  }

  public dequeue(): T | undefined {
    return this.items.shift();
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export default Queue;

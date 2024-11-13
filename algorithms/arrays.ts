class DynamicArray<T> {
    private items: T[];
    private size: number;
    private capacity: number;

    constructor() {
        this.items = new Array(16);
        this.size = 0;
        this.capacity = 16;
    }

    // Add new element
    push(item: T): void {
        // Check array capacity
        if (this.size == this.capacity) {
            this.resize();
        }

        this.items[this.size] = item;
        this.size++;
    }

    // Get last item of the array
    pop(): T | undefined {
        if (this.size == 0) {
            return undefined;
        }

        this.size--;
        const item: T = this.items[this.size];
        this.items[this.size] = undefined!;
        return item;
    }

    // Get the specified item
    get(index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        return this.items[index];
    }

    // Increase array size 
    resize(): void {
        this.capacity++;
        const newItemsList = new Array(this.capacity);

        for(let index = 0; index <= this.size; index++) {
            newItemsList[index] = this.items[index];
        }

        this.items = newItemsList;
    }
}

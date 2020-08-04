let id = 0;

class ID {
    value: number;
    constructor() {
        id += 1;
        this.value = id;
    }
}

export default ID
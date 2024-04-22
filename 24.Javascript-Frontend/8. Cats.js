function solve(objectData) {
    const cats = [];
    for(const data of objectData) {
        const [name,age] = data.split(' ');
        cats.push(new Cat(name,age));
    }

    for(const element of cats) {
        element.meow();
    }
}
class Cat {
    constructor(name,age) {
        this.name =name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
solve(['Mellow 2', 'Tom 5']);
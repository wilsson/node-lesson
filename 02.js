const foo = [3, 4, 5, 10, 20, 4]

// Find
console.log('find', foo.find(x => x === 4))

// Includes
console.log('includes', foo.includes(4))

// Push
foo.push(10)
console.log('push', foo)

// Pop
foo.pop()
console.log('pop ', foo)

// Shift
foo.shift()
console.log('shift ', foo)

// Slice
const bar = foo.slice(0, 2)
console.log('slice ', foo, bar)

// Splice
const bazz = foo.splice(0, 2)
console.log('splice ', foo, bar)

const add = (element, array, index) => {
    const init = array.slice(0, index-1);
    const end = array.slice(index-1);
    const newarray = [...init, element, ...end];
    return newarray;
}

const x1 = add(99, foo, 2)

console.log('antes', foo)
console.log('despues', x1)

const x2 = {name: 'wilson', age: 100, data: { id: 100 }}
const [ x, y ] = foo
const { name: alias } = x2

console.log('destruct', x, y)
console.log('name', alias)
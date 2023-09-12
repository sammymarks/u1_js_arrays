let friends = [`moe`, 'larry', 'curly', 'shemp']
//console.log(friends)

let fruits = [`banana`, `apple`, `raspberry`, `blueberry`, `mango`, 'guava', '`tomato', `grape`, `orange`]
//console.log(fruits.length)

//converts array to a string
//console.log(fruits.toString())

//pop and push work off the end
//remove the last item
//fruits.pop()
//console.log(fruits)

//add items
//fruits.push(`peach`)
//console.log(fruits)


//reverse an array
//fruits.reverse()
//console.log(fruits)

//shift and unshift (work off the beginning)
//shift removes first item and shifts everything to the left
//fruits.shift()
//console.log(fruits)

//unshift will add to the beginning of the array
//fruits.unshift('mandarin')
//console.log(fruits)

//add to the middle
//three arguments -> where we start, how far we go, what we are doing
console.log(fruits)

//replace with cocunut
fruits.splice(1,1,`coconut`)
console.log(fruits)

//insert with cocunut --> if the second parameter is '0' it inserts the new input(s)
fruits.splice(1,0,`coconut`)
console.log(fruits)

//delete
fruits.splice(1,1)
console.log(fruits)

//add multiple
fruits.splice(1,1,`c1`, `c1`, `c3`)


/* create a new array on the fly
let a = new Array

a[0] = `dog`
a[1] = 'cat'
a[100] = 'fox'
console.log(a)
console.log(a.length)
*/
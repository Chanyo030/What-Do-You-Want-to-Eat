// JAVA

// Map => (key: value)

// JS
// object 物件 => (key: value)

const home = {
    key: undefined,
    id: 123121,
    id: [1, 2, 3, 4, 5, 6],
    obj: {
        arr: ["a", "s", "asdad"],
        boo: false
    }

}

const home1 = {
    id: 123,
    name: "aaa",
    price: 500,
    item: {
        a: "aaa",
        b: "bbb",
        c: "ccc"
    }

}

// 沒加雙引號會被當成變數，加了是"字串"
let x = "item";

// 取物件方法
console.log(home1.price);
console.log(home1.item.b);
console.log(home1["item"]);
console.log(home1["id"]);
console.log(home1[`${x}`].b);


const arr = [{
    name: "ddd",
    id: 1
},
{
    name: "aaa",
    id: 2
},
    true,
    123,

]


// JSON.stringify() ： JS 物件 轉成 純字串(JSON)
// JSON.parse()     ： JSON 轉回 JS 物件

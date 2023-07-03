// 額外補充
// 八方雲集index第5項
// console.log(meals[5].name);

// 早餐節點
// DOM節點 就是把html裡對應的breakfast id 的所有東西包起來 => <input type="checkbox" id="breakfast" value="breakfast">
const breakfastDOM = document.getElementById("breakfast");
console.log(breakfastDOM);

// 午餐節點
const lunchDOM = document.getElementById("lunch");
console.log(lunchDOM);

// 晚餐節點
const dinnerDOM = document.getElementById("dinner");
console.log(dinnerDOM);

// 零食點心節點
const snackDOM = document.getElementById("snack");
console.log(snackDOM);

// 飲料節點
const drinksDOM = document.getElementById("drinks");
console.log(drinksDOM);

// btnGo節點
const btnGoDOM = document.getElementById("btnGo");
console.log(btnGoDOM);

// eat 結果 節點
const eatDOM = document.getElementById("eat");
console.log(eatDOM);

let meals = null;

// 固定寫法
// 接API  json檔名(此處 ./ 不能用)。等前面非同步(fetch 非同步語法)的資料抓進來後才會執行
fetch("mealsList.json")

    // 抓進 response (.then是非同步語法)
    .then(function (response) {

        // 將json格式轉成JS格式
        return response.json();
    })

    // 也是非同步，所以要.then。 !!!接近來所有資料的code都要寫在這裡!!!
    // 非同步語法都需要用這樣的方式寫
    .then(function (data) {
        meals = data;
    })


// 監聽
btnGo.addEventListener("click", function () {

    // 確認checkbox被點擊
    console.dir(breakfastDOM.checked);
    console.dir(lunchDOM.checked);
    console.dir(dinnerDOM.checked);
    console.dir(snackDOM.checked);
    console.dir(drinksDOM.checked);

    let storeName = allMOD();
    console.log(storeName);

    // 隨機
    // 因為 allMOD() 方法最後是 return conformName ，因此等同於 conformName 陣列，就可以打點長度了
    // 不用加1 跟index 從0開始有關
    let randomFood = Math.floor(Math.random() * storeName.length)
    // let randomFood = Math.floor(Math.random() * allMOD().length)

    console.log(randomFood);

    //                             店名    index位置
    eatDOM.innerHTML = `<h1>吃&emsp;${storeName[randomFood]}&ensp;<i class="fa-solid fa-face-grin-stars fa-flip" style="color: #ffd43b;"></i></h1>`;


})


// function allMOD() {

//     // 存放已遍歷的所有meals
//     let mealsAllArray = [];

//     // 存放那些 checkbox 被點擊及遍歷的DOM的value值(請參考html)
//     let DomTrueChecked = [];

//     // -----------------------------------------------------

//     // 遍歷所有meals
//     meals.forEach(function (item2) {
//         mealsAllArray.push(item2);
//     })
//     console.log(mealsAllArray);
//     // ------------------------------------------------------

//     // 遍歷DOM(分解各自的那整行，請參考110行 !!!就是拆分那些東西!!!) 
//     //                      早          午         晚      零食點心     飲料
//     let allDomArray = [breakfastDOM, lunchDOM, dinnerDOM, snackDOM, drinksDOM];

//     // 將html對應的value遍歷出來
//     allDomArray.forEach(function (item) {
//         // 當DOM被點擊時
//         if (item.checked == true) {

//             // 將其對應的value值放入"trueChecked"陣列中(請參考html)
//             DomTrueChecked.push(item.value);
//         }
//     })

//     console.log(DomTrueChecked);

//     // -----------------------------------------------------

//     // 放入有包含(符合條件)的店家名稱
//     let conformName = [];

//     // 個別將整個meals及DOM陣列再遍歷一次(拆分成一個個的餐廳)

//     mealsAllArray.forEach(function (individualMealsItem) {

//         DomTrueChecked.forEach(function (individualDomItem) {



//             // 確認是否包含那些店，如果包含 = true (includes本身是布林)
//             // 一定是要push meals因為只有它有店名
//             if (individualMealsItem.category.includes(individualDomItem)) {
//                 conformName.push(individualMealsItem.name);
//             }
//         })

//     })

//     return conformName;
// }


//lambda寫法

function allMOD() {

    // 存放已遍歷的所有meals
    let mealsAllArray = [];

    // 存放那些 checkbox 被點擊及遍歷的DOM的value值(請參考html)
    let DomTrueChecked = [];

    // -----------------------------------------------------

    // 遍歷所有meals
    meals.forEach(item2 => mealsAllArray.push(item2))
    console.log(mealsAllArray);
    // ------------------------------------------------------

    // 遍歷DOM(分解各自的那整行，請參考110行 !!!就是拆分那些東西!!!) 
    //                      早          午         晚      零食點心     飲料
    let allDomArray = [breakfastDOM, lunchDOM, dinnerDOM, snackDOM, drinksDOM];

    // 將html對應的value遍歷出來
    allDomArray.forEach(item => {
        // 當DOM被點擊時
        if (item.checked == true) {

            // 將其對應的value值放入"trueChecked"陣列中(請參考html)
            DomTrueChecked.push(item.value);
        }
    })

    console.log(DomTrueChecked);

    // -----------------------------------------------------

    // 放入有包含(符合條件)的店家名稱
    let conformName = [];

    // 個別將整個meals及DOM陣列再遍歷一次(拆分成一個個的餐廳)

    mealsAllArray.forEach(individualMealsItem => {

        DomTrueChecked.forEach(individualDomItem => {



            // 確認是否包含那些店，如果包含 = true (includes本身是布林)
            // 一定是要push meals因為只有它有店名
            if (individualMealsItem.category.includes(individualDomItem)) {
                conformName.push(individualMealsItem.name);
            }
        })

    })

    return conformName;
}


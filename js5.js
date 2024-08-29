//მოცემულია მასიცი:
// let array2 = [14, 150, 'css', null, 'javascript', 25];

// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, 
// ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. 
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let array2 = [14, 150, 'css', null, 'javascript', 25];
let array = array2.map(element => {
    if (typeof element === 'number'){
        return element * element;
    }     
    else if (typeof element === 'string'){
        return element.toUpperCase();
    }
    else {
        return element
    }
})
console.log(array2)

// prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: 
// საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. 
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, 
// დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let Tbilisi = prompt("საქართველოს დედაქალაქი?");
let t = "tbilisi";

let checkAnswer = (answer) => {
    if (answer.toLowerCase() === t) {
        return "ეს პასუხი არის სწორი!";
    } else {
        return "არასწორია!";
    }
}

alert(checkAnswer(Tbilisi));


// მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let array0 = array5.map(element =>{
    return element % 3;
});
console.log(array5)

// მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;
let array1 =["hello1", 14,24, "hello2"];
for(i = 0; i<array1.length;i ++){
    if (typeof array1[i] != 'number'){
        array1.splice(i,1);
        i--
    };
};
console.log(array1)

// მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filteredLanguages = languages.filter(language => language.length > 3)

console.log(filteredLanguages);

// მოცემულია მასივი:
// let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let m = words.filter(element =>{
    return element.toLowerCase().includes('m')
})

console.log(m)

// მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს
function checkProtocol(url) {
    if (url.includes("https://")) {
        return "yes";
    } else {
        return "no";
    }
}

let link = "https://google.com";
console.log(checkProtocol(link)); 

// შეამოწმეთ მოცემულ მასივში let array6 = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით.
let array6 = [-1, -2, -3, 4];
let positive = array6.some(element => element > 0);
console.log(positive)

// Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით
let nums = [1,3,4,5,6,67,8,9,9,10];
let sum = nums.reduce((accumulator,currentValue){
    return accumulator + currentValue;
},0);
console.log(sum)

//  Გაერთიანეთ სამი მასივის მნიშვენლობები let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// Ერთ მასივში
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let array10 = arr1.cancat(arr2,arr3);
console.log(array10);

// მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. 
// ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ თითოეული სტრინგი 
// გადაიყავნოთ რიცხვში)


str = '12345'
let sum2 = str.split(" ").map(number).reduce((accumulator , currentValue)accumulator + currentValue,0);
console.log(sum2)


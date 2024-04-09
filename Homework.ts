
// Question #1:

// Create a type to represent the following instances of `CTStudent` 
// Also declare three 3 students below as type `CTStudent` and set their values

type CTStudent = {
    readonly id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet: string
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
    pet: 'cat'
}

let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}



// Question #2:

// Write a function that will accept a an object of type `Fruit`,
// the object of type Fruit could also be `null`.  If their is a 
// Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function

//Given
type Fruit={
    color:string,
    shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null


//Answer

function printFruit(fruit:Fruit): string | null{
    if (fruit){
        return fruit.color;
    } else {
        return 'You ate my fruit already';
    }
}


console.log(printFruit(apple))
console.log(printFruit(eaten))

// Question #3:

//Create a Union Type named `Ebook` for `Book` and `DigitalBook` 
// and create one instance of the new union type

//Given 
type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}

//Answer

type Ebook = Book & DigitalBook 

let eBook1: Ebook = {
    isbn: 'test',
    title: 'The new Book',
    author: 'Lilibeth',
    fileType: 'PDF'
}

eBook1

// Question #4:
//Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type

enum Pants {
    Jeans = 'Jeans',
    Denim = 'Denim',
    Slim = 'Slim Fit',
    Casual =  'Casual Pants'
}

type ShopItem = {
    readonly id: number;
    price: number;
    description: string;
    color?: string;
    pantsModel: Pants;
    keywords: string[]
}

const shopItem1: ShopItem = {
    id: 1,
    price: 49.99,
    description: 'Men\'s Slim Fit Denim Jeans',
    color: 'Blue',
    pantsModel: Pants.Slim,
    keywords: ['Jeans', 'Denim', 'Slim Fit', 'Casual Pants'],
};

const shopItem2: ShopItem = {
    id: 2,
    price: 39.99,
    description: 'Women\'s High-Waisted Skinny Jeans',
    color: 'Black',
    pantsModel: Pants.Jeans,
    keywords: ['Jeans', 'Skinny Jeans', 'High-Waisted', 'Casual Pants'],
};

const shopItem3: ShopItem = {
    id: 3,
    price: 59.99,
    description: 'Men\'s Relaxed Fit Cargo Pants',
    color: 'Khaki',
    pantsModel: Pants.Casual,
    keywords: ['Cargo Pants', 'Relaxed Fit', 'Casual Wear'],
};
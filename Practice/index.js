// //Slice
// let fullName = "Bro Code"
// let firstName
// let lastName

// lastName = fullName.slice(fullName.indexOf(' ') + 1)
// firstName = fullName.slice(0, fullName.indexOf(' '))

// console.log(fullName.indexOf(' '))
// console.log(firstName)
// console.log(lastName)

// //Capitalize Each Word
// const theWord = 'The quick brown fox jumps over the lazy dog.'
// console.log(theWord)
// const result = theWord.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1,word.length)).join(' ')
// console.log(result)

// //Create HTML Element
// const body = document.querySelector('body')
// const newElement = document.createElement('div')
// newElement.setAttribute('class','square')
// body.appendChild(newElement)

// //Method Chaining
// let userName = 'bro'
// let letter = userName.charAt(0)
// letter = letter.toUpperCase()
// console.log(letter)

// let letterMethodChaining = userName.charAt(0).toUpperCase().slice(0,1)
// console.log(letterMethodChaining)

// //If Statement
// let age = 1
// if(age) {
//     console.log(age)
// }

// //Check Property
// const button = document.getElementById('myButton')
// button.onclick = () => {
//     const myCheckBox = document.getElementById('myCheckBox').checked
//     if(myCheckBox) {
//         console.log('Your are subscribed')

//     } else {
//         console.log('You are not subscribed')
//     }
// }

//Switch
// let grade = 'A'
// switch(grade) {
//     case 'A':
//         console.log('You did great!')
//         break
//     case 'B':
//         console.log('You did good!')
//         break
//     case 'C':
//         console.log('You did okay!')
//     case 'D':
//         console.log('You passed barely!')
//         break
//     default:
//         console.log(grade, 'is not a letter grade!')
//         break
// }

// //Return
// let width = window.prompt('Enter width')
// let height = window.prompt('Enter height')
// function calculateFunction(w, l) {
//     return width * height
// }
// console.log(calculateFunction(width, length))

//***Locale
// let myNum = 123456.789
// myNum = myNum.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
// myNum = myNum.toLocaleString(undefined,{style: 'percent', currency: 'USD'})
// myNum = myNum.toLocaleString(undefined,{style: 'unit', unit: 'celsius'})
// console.log(myNum)

// Array and its functions
// let fruits = ["apple","orange","banana"];
// fruits.push("lemon"); //add an elements
// fruits.pop(); //removes last element
// fruits.unshift("mango"); //add element to beginning
// fruits.shift(); // removes element from beginning
// let length = fruits.length;
// let index = fruits.indexOf("orange");
// console.log(length);
// console.log(index);
// console.log(fruits);

//Range based loop
// let prices = [5,10,15,20,25];
// for(let price of prices) {
//     console.log(price);
// }

// Array sort
// let fruits = ["banana", "apple", "orange", "mango"];
// fruits = fruits.sort().reverse();
// for(let fruit of fruits) {
//     console.log(fruit);
// }

//2D or Multi-Dimensional Array
// let fruits = ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];
// let groceryList = [fruits, vegetables, meats];
// console.log("Accessing 2D array index: " + groceryList[1][1]);
// console.log("Print starts here:")
// for(let list of groceryList) {
//     for(let food of list) {
//         console.log(food);
//     }
// }

//Spread Operator
// let userName = "Bro Code";
// let numbers = [1,2,3,4,5,6,7,8,9];
// let maximum = Math.max(...numbers);
// let mixArray = [userName,numbers,maximum];
// console.log(...userName);
// console.log(...numbers);
// console.log(maximum);
// console.log(...mixArray);

//Rest parameter
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// console.log(sum(a,b))
// console.log(sum(a,b,c))
// console.log(sum(a,b,c,d))
// function sum(x,y,...numbers) {
//     let total = x + y;
//     for(let number of numbers) {
//         total += number;
//     }
//     return total;
// }

//Callback
// sum(2,3, displayConsole);
// sum(5,1, displayDOM)
// function sum(x, y, doSomething) {
//     let result = x + y;
//     doSomething(result);
// }
// function displayConsole(output) {
//     console.log(output);
// }
// function displayDOM(output) {
//     document.getElementById("myLabel").innerHTML = output;
// }

//Foreach
// let students = ["spongebob","patrick", "squidward"];
// students.forEach(capitalize); //Capitalizes all first letter 
// students.forEach(print); //

// function capitalize(element, index,array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//     console.log(element);
// }

//Map
// let numbers = [1,2,3,4,5];
// //Map with function callback
// let squares = numbers.map(square);
// console.log("Squares:");
// squares.forEach(print);
// //Map with lambda function
// console.log("Cubes:")
// let cube = numbers.map(temp => Math.pow(temp, 3));
// cube.forEach(print);
// //functions
// function square(element) {
//     return Math.pow(element,2);
// }
// function print(element) {
//     console.log(element);
// }

//Filter
// let ages = [18,16,21,17,19,90];
// let adults = ages.filter(checkAge);
// All ages
// console.log("All ages:")
// ages.forEach(temp => console.log(temp));
// Adults -- >=18
// console.log("Adults:")
// adults.forEach(temp => console.log(temp));

// function checkAge(element) {
//     return element >= 18;
// }

//Reduce
// let prices = [5,10,15,20,25];
// let total = prices.reduce(checkOut,5);
// console.log(prices)
// console.log(`The total is: $${total}`)

// function checkOut(total, element) {
//     return total += element;
// }

//Sort
// let grades = [ 50,100, 90,60,80,70];
// grades = grades.sort(descendingSort);
// grades.forEach(print);
// function descendingSort(x, y) { //Flipped arrangement
//     return y - x;
// }
// function ascendingSort(x, y) { //Normal arrangement
//     return x - y;
// }
// function print(element) {
//     console.log(element);
// }

//Function expression
//Example 1
// const greeting = function() {
//     console.log("Hello!");
// }
// greeting();
//Example 2
// let count = 0;
// document.getElementById("increaseButton").onclick = function() {
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("decreaseButton").onclick = function() {
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

//Arrow function
// const greeting = (userName) => {
//     console.log(`Hello ${userName}`);
// }
// greeting("Paolo");

// const percent = (x,y) => {
//     return x / y * 100;
// }
// console.log(`${percent(1,150)}%`)

//Shuffle Array
// let cards = ["A", "1", "2", "3", "4","5","6","7","8","9","10"];
// shuffle(cards);
// console.log(cards);
// function shuffle(array) {
//     let currentIndex = array.length;

//     while(currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;
        
//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
// }

//Nested Function
// let userName = "Bro";
// let userInbox = 0;
// login();
// function login() {
//     displayUserName();
//     displayUserInbox();
//     function displayUserName() {
//         console.log(`Welcome ${userName}`);
//     }
//     function displayUserInbox() {
//         console.log(`You have ${userInbox} new messages`);
//     }
// }

//Map
// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ]);
// let shoppingCart = 0;
// //Map.Get()
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("jeans");
// //Map.Set()
// store.set("hat",40);
// //Map.Delete()
// store.delete("hat");
// //Map.Has()
// console.log("Has socks: " + store.has("socks"));
// //Map.Size()
// console.log("Size: " + store.size);
// console.log("Shopping Cart: " + shoppingCart);
// store.forEach((value, key) => console.log(`${key} $${value}`))

//Object
// const car = {
//     model: "Mustang",
//     color: "red",
//     year:2023,
//     drive : function() {
//         console.log("You drive the car");
//     },
//     brake : function() {
//         console.log("You step on the brakes");
//     }
// }
// console.log(car.model);
// console.log(car.color);
// console.log(car.year);
// car.drive();
// car.brake();

//This
// const car1 = {
//     model: "Mustang",
//     color: "red",
//     year:2023,
//     drive : function() {
//         console.log(`You drive the ${this.model}`);
//     }
// }
// const car2 = {
//     model: "Corvette",
//     color: "blue",
//     year:2024,
//     drive : function() {
//         console.log(`You drive the ${this.model}`);
//     }
// }
// car1.drive();
// car2.drive();
// this.name = "myCoolWindow";
// console.log(this);

//Class
// class Player {
//     score = 0;

//     pause() {
//         console.log("You paused the game");
//     }

//     exit() {
//         console.log("You exited the game");
//     }
// }
// const player1 = new Player();
// player1.score++;
// console.log(player1.score);
// player1.pause();
// player1.exit();

//Constructor
// class Student {
//     constructor(name, age, gpa) {
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }

//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }
// const student1 = new Student("Spongebob", 30, 3.2);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();
// const student2 = new Student("Patrick", 35, 1.5);
// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

//Static
// class Car{
//     static numberOfCars = 0;
//     constructor(model) {
//         this.model = model;
//         Car.numberOfCars += 1;
//     }
//     static startRace() {
//         console.log("3...2...1...GO!");
//     }
// }
// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// console.log(Car.numberOfCars);
// Car.startRace();

//Inheritance
//Parent Classes
// class Animal {
//     alive = true;
//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// //Child Classes
// class Rabbit extends Animal{
//     name = "rabbit";
//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "fish";
//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "fish";
//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }
// //Object
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Rabbit();
// //Test
// console.log(rabbit.name);
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();
// console.log(fish.name);
// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

//Super
// class Animal {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//Child Classes
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed) {
//         super(name, age)
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed) {
//         super(name, age)
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed) {
//         super(name, age)
//         this.flySpeed = flySpeed;
//     }
// }
// const rabbit = new Rabbit("rabbit",1,40);
// const fish = new Fish("fish",2,80);
// const hawk = new Hawk("hawk",3,200);
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

//Getters and Setters
// class Car {
//     constructor(power) {
//         this._power = power; //initialize protected prop
//         this._gas =  25;
//     }
//     //Property getter (with string value)
//     get power() {
//         return `${this._power}hp`;
//     }
//     get gas() {
//         return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     //Property Setter
//     set gas(value) {
//         if(value > 50) {
//             value = 50; //Regulate to max size
//         }
//         else if(value < 0) {
//             value = 0;
//         }
//         this._gas = value;
//     }
// }
// let car = new Car(400);
// console.log(car.power);
// console.log(car._power); //bad practice, but possible
// console.log(car.gas);
// car.gas = -100; //Set value on property using setter
// console.log(car.gas);

//Objects as arguments(parameter)
// class Car {
//     constructor(model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }
// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// changeColor(car3, "gold"); //Use an object as parameter
// displayInfo(car3);
// function displayInfo(car) {
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }
// function changeColor(car, color) { //Accepts Object parameter
//     car.color = color;
// }

//Array of Object
// class Car {
//     constructor(model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive() {
//         console.log(`You drive the ${this.model}`);
//     }
// }
// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const cars = [car1, car2, car3]; //Array of car object
// cars.forEach(temp => temp.drive());
// console.log("Function callback approach:");
// startRace(cars);
// function startRace(cars) {
//     for(const car of cars) {
//         car.drive();
//     }
// }

//Anonymous Method
// class Card{
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }
// let cards = [
//     new Card("A", "Hearts"),
//     new Card("A", "Spades"),
//     new Card("A", "Diamonds"),
//     new Card("A", "Clubs"),
//     new Card("2", "Hearts"),
//     new Card("2", "Spades"),
//     new Card("2", "Diamonds"),
//     new Card("2", "Clubs"),
// ];
// cards.forEach(card => console.log(`${card.value} - ${card.suit}`));

//Error
// try {
//     let x = window.prompt("Enter a #: ");
//     x = Number(x);

//     if(isNaN(x)) throw "That wasn't a number!";
//     if(x == "") throw "That was empty!";

//     console.log(`${x} is a number`);
// }
// catch(error) {  //Display Try block error, if any
//     console.log(error);
// }
// finally {  //Always executes
//     console.log("This always executes");
// }

//SetTimeout
// function firstMessage() {
//     alert(`But this course for $500`);
// }
// const secondMessage = function () {
//     alert(`This is not a scam!`);
// }
// //Set setTimeout methods, while storing their id
// let timer1 = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(() => {alert(`Do it!`)}, 9000);
// //Clears the setTimeoutMethod
// const theButton = document.querySelector("#myButton");
// theButton.addEventListener("click",() => {
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     console.log("Thanks for buying");
// })

//SetInterval
// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000); //can add more parameter to the callback function E.g. max

// function countUp() {
//     count += 1;
//     console.log(count);
//     if(count >= max) {
//         clearInterval(myTimer);
//     }
// }

//Date objects
// let date1 = new Date();
// let date2 = new Date(0);
// let date3 = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date4 = new Date();
// //Date object get properties 
// let year = date1.getFullYear();
// let dayOfMonth = date1.getDate(); //Day of the month
// let dayOfWeek = date1.getDay(); //Day of the week
// let month = date1.getMonth();
// let hour = date1.getHours();
// let minutes = date1.getMinutes();
// let seconds = date1.getSeconds();
// let milliseconds = date1.getMilliseconds();
// console.log(year);
// console.log(dayOfMonth);
// console.log(dayOfWeek);
// console.log(month);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);
// //Date object set properties
// date1.setFullYear(2024);
// date1.setDate(11);
// console.log("Set to: " + date1.getFullYear());
// console.log("Set to: " + date1.getDate());
// date1 = date1.toLocaleString(); //Use local time and unit, simpler 
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// //Function that accepts date object
// function formatDate(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1; //January is 0
//     let day = date.getDate();
//     return `${month}/${day}/${year}`;
// }
// function formatTime(date) {
//     let hours = date.getHours() % 12;
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" : "am";
//     return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }
// console.log("This is from formatDate: " + formatDate(date3));
// console.log("This is from formatTime: " + formatTime(new Date()));

//Clock Program
//Html tag
// const myLabel = document.querySelector("#myLabel");
// //Function
// function update() {
//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);
    
//     function formatTime() {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hours >= 12 ? "pm" : "am";
//         hours = (hours % 12) || 12;
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//     }
//     function formatZeroes(time) {
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }
// //Invoke function with setInterval
// setInterval(update, 1000);

//Asynchronous and Synchronous code
//Synchronous 
// console.log("Synchronous:");
// console.log("Start");
// console.log("This step is synchronous");
// console.log("End");

// //Asynchronous
// console.log("Asynchronous:");
// console.log("Start");
// setTimeout(() => console.log("This is asynchronous"), 3000);clearInterval
// console.log("End");

//Console.Time()
//Start
// console.time("Response time");
// // alert("Click the ok button"); //Synchronous
// setTimeout(() => console.log("HELLO!"), 3000); //Asynchronous
// //End
// console.timeEnd("Response time");

//Promise
//Example 1 - Two callback function for two possible outcomes
// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;  
//     if(fileLoaded) {
//         resolve("File loaded");
//     }
//     else {
//         reject("File NOT loaded");
//     }
// })
// promise.then(value => console.log(value))
//     .catch(error => console.log(error))

// //Example 2 - Only one outcome using arrow function
// const promise2 = new Promise(resolve => {
//     setTimeout(resolve, 5000);
// })
// promise2.then(() => console.log("Thanks for waiting"));

// //Example 3 - Stored as function expression with parameter
// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// })
// wait(3000).then(() => console.log(`Thanks for waiting 1`));

//Async
// Example 1
// async function loadFile() {
//     let fileLoaded = true;  
//     if(fileLoaded) {
//         return "File loaded";
//     }
//     else {
//         throw "File NOT loaded";
//     }
// }
// loadFile().then(value => console.log(value))
//     .catch(error => console.log(error))

// //Example 2
// function loadFile2() {
//     let fileLoaded = false;  
//     if(fileLoaded) {
//         return Promise.resolve("File loaded");
//     }
//     else {
//         return Promise.reject("File NOT loaded");
//     }
// }
// loadFile2().then(value => console.log(value))
//     .catch(error => console.log(error))

//Await
// async function loadFile() {
//     let fileLoaded = false;  
//     if(fileLoaded) {
//         return "File loaded";
//     }
//     else {
//         throw "File NOT loaded";
//     }
// }
// //For displaying - await must be enclose in an async function
// async function startProcess() { 
//     try{ //Required when promise was failed
//         let message = await loadFile(); //Replaces then() and catch()
//         console.log(message);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// startProcess();


//ES6 Modules
// // import { PI, getCircumference, getArea } from "./math_util.js";
// import * as MathUtl from "./math_util.js"; //Alias or namespace added

// // console.log(PI);
// console.log(MathUtl.PI); //Using the namespace

// // let circumference = getCircumference(10);
// let circumference = MathUtl.getCircumference(10);
// console.log(circumference);

// // let area = getArea(10);
// let area = MathUtl.getArea(10);
// console.log(area);

// DOM
// console.log(document.title);
// console.log(document.URL);

// document.title = "Title goes here!";
// document.location = "https://www.google.com";
// document.body.style.backgroundColor = "skyblue";

//Element Selector
//Get using Id attribute
// let element = document.querySelector("#myTitle");
// console.log(element.innerHTML);

// //Get using name attribute
// let fruits = document.querySelectorAll("input[name='fruits']")
// fruits.forEach(fruit => {
//     if(fruit.checked) {
//         console.log(fruit.value);
//     }
// })

// //Get using tag type
// let vegetables = document.querySelectorAll("li");
// vegetables[1].style.backgroundColor = "lightpink"

// //Get using class name
// let desserts = document.querySelectorAll(".desserts");
// desserts[0].style.backgroundColor = "lightgreen";

//DOM Traversal
// let element = document.body;
// let element = document.querySelector("#vegetables");
// let children = Array.from(element.children);
// children.forEach(child => child.style.backgroundColor = 'lightgreen');

//Add or Change HTML Elements
// const nameTag = document.createElement('h1');
// nameTag.innerText = window.prompt("Enter your name");
// document.body.append(nameTag);
// const myList = document.querySelector('#fruit');
// const listItem = document.createElement('li');
// listItem.textContent = 'Mango';
// // myList.append(listItem);
// // myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName('li')[1]);

//Add or Change CSS Properties
// const title = document.getElementById('myTitle');
// title.style.backgroundColor = "rgba(50,200,250,0.3)";
// title.style.fontFamily = 'consolas';
// title.style.textAlign = 'center';
// title.style.border = '2px solid';
// title.style.display = 'block';

//Event
// const element = document.querySelector('#myButton');
// const element = document.body;
// const element = document.querySelector('#myText');
// const element = document.querySelector("#myDiv");
// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomethingElse;
// element.onmouseup = doSomething;
// function doSomething() {
//   // alert("You did something");
//   element.style.backgroundColor = 'red';
// }
// function doSomethingElse() {
//   // alert("You did something");
//   element.style.backgroundColor = 'lightgreen';
// }

//AddEventListener
// const innerDiv = document.querySelector('#innerDiv');
// const outerDiv = document.querySelector('#outerDiv');
// innerDiv.addEventListener('mouseover', changeRed);
// innerDiv.addEventListener('mouseout', changeGreen);
// function changeRed() {
//   innerDiv.style.backgroundColor = 'red';
// }
// function changeGreen() {
//   innerDiv.style.backgroundColor = 'lightgreen';
// }
// innerDiv.addEventListener('click', changeBlue);
// outerDiv.addEventListener('click', changeBlue, true);
// function changeBlue() {
//   alert(`You selected ${this.id}`)
//   this.style.backgroundColor = 'lightblue';
// }

//Show or Hide HTML Elements
// const myButton = document.querySelector('#myButton');
// const myImage = document.querySelector('#myImage');

// myButton.addEventListener('click', () => {
//   console.log(myImage.style.visibility);
//   if(myImage.style.visibility == 'hidden') {
//     myImage.style.visibility = 'visible';
//   }
//   else {
//     myImage.style.visibility = 'hidden';
//   }
// })

//Detect Key Presses
// const myDiv = document.querySelector('#myDiv');
// window.addEventListener('keydown', move);

// let x = 0;
// let y = 0;

// function move() {
//   switch(event.key) {
//     case 'ArrowDown':
//       y += 5;
//       myDiv.style.top = y + "px";
//       break;
//     case 'ArrowUp':
//       y -= 5;
//       myDiv.style.top = y + "px";
//       break;
//     case 'ArrowLeft':
//       x -= 5;
//       myDiv.style.left = x + "px";
//       break;
//     case 'ArrowRight':
//       x += 5;
//       myDiv.style.left = x + "px";
//       break;

//   }
// }

//Animations
// const myButton = document.querySelector("#myButton");
// const myAnimation = document.querySelector("#myDiv");
// myButton.addEventListener("click", begin);
//scale
// function begin() {
//   let timerId = null;
//   let scaleX = 1;
//   let scaleY = 1;
  
//   timerId = setInterval(frame, 5);

//   function frame() {
//     if(scaleX <= 0.1) {
//       clearInterval(timerId);
//     }
//     else {
//       scaleX -= 0.01;
//       scaleY -= 0.01;
//       myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
//       myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
//     }
//   }
// }
//rotate
// function begin() {
//   let timerId = null;
//   let degrees = 0;
//   let x = 0;
//   let y = 0;
  
//   timerId = setInterval(frame, 5);

//   function frame() {
//     if(x >= 200) {
//       clearInterval(timerId);
//     }
//     else {
//       degrees += 100000;
//       x++;
//       y++;
//       myAnimation.style.left = x + "px";
//       myAnimation.style.top = y + "px";
//       myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//     }
//   }
// }
// slide diagonally
// function begin() {
//   let timerId = null;
//   let x = 0;
//   let y = 0;

//   timerId = setInterval(frame, 5);

//   function frame() {
//     if(x >= 200) {
//       clearInterval(timerId);
//     }
//     else {
//       x += 1;
//       y += 1;
//       myAnimation.style.left = x + "px";
//       myAnimation.style.top = y + "px";
//     }
//   }
// }

//canvas API
// let canvas = document.querySelector("#myCanvas");
// let context = canvas.getContext("2d");
//Draw
// context.strokeStyle = "yellow";
// context.lineWidth = 10;
// context.beginPath(); 
// context.moveTo(0, 0);  
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0)
// context.lineTo(250, 250);
// context.stroke();
//Draw Triangle
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0)
// context.strokeStyle = "yellow";
// context.lineWidth = 10;
// context.stroke();
// context.fillStyle = "grey";
// context.fill();
//Draw Rectangle
// context.fillStyle = "black";
// context.fillRect(0, 0 ,250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250)
// context.fillStyle = "yellow";
// context.fillRect(0, 250 ,250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250)
// context.fillStyle = "green";
// context.fillRect(250, 0 ,250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250)
// context.fillStyle = "red";
// context.fillRect(250, 250 ,250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250)
//Draw Circle
// context.fillStyle = "skyblue";
// context.lineWidth = 5;
// context.strokeStyle = "yellow";
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();
//Draw Text
// context.font = "50px MV Boli";
// context.fillStyle = "purple";
// context.textAlign = "center";
// context.fillText("You Win!", canvas.width / 2, canvas.height / 2);

//Window
// console.dir(window)
// console.log(window.scrollX);
// console.log(window.scrollY);
// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// const myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", () => window.print());

//Cookies
// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Star; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";
// console.log(document.cookie);
// 


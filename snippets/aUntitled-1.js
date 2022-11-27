
let user = {
    name: "crystal",
    age: 30,
    email: "email@email.com",
    location: "berlin",
    blogs: ["macnchees", "10 things"],
  };
  
  console.log(user);
  console.log(user.name);
  console.log(user.age); //user.age = 35
  console.log(user["email"]); // 'email@email.com'
  user["name"] = "charlie";
  console.log(user["name"]); // 'charlie'
  
  const key = "location";

  
  
  console.log(user[key]); // 'berlin' gives same result user['location']
  console.log(typeof user); // object
  
  
 
//   let userr = {
//     name: "crystal",
//     age: 30,
//     email: "email@email.com",
//     location: "berlin",
//     blogs: ["macnchees", "10 things"],
//     regularFunctionNotation: function () {
//       console.log("regularFunctionNotation");
//       this.blogs.forEach((blog) => {
//         console.log(blog); // logs blogs from this object regular notation
//       });
//     },
//     shorthand() {
//       console.log("shorthand");
//       this.blogs.forEach((blog) => {
//         // logs blogs using shorthand notation
//         console.log(blog);
//       });
//     },
//     arrowEmpty: () => {
//       console.log("arrowEmpty");
//       user.blogs.forEach((blog) => {
//         // logs blogs from this object using arrow function and taking the blogs using the object to get the value
//         console.log(blog);
//       });
//     },
//     arrowPassIn: (a) => {
//       console.log("arrowPassIn");
//       a.forEach((blog) => {
//         // logs blogs from this object using arrow function and taking the blogs as an input into the object from the outside
//         console.log(blog);
//       });
//     },
//     shorthandpassin(a) {
//       console.log("shorthandpassin");
//       a.forEach((blog) => {
//         // logs blogs from this object using shorthand notation and getting input from the outside
//         console.log(blog);
//       });
//     },
//   };
  
//   const name = "mario";
//   // this is a function that a string can have
//   name.toUpperCase();
  
//   // custom object functions that this specific object can have
  
//  userr.arrowEmpty();
//   userr.regularFunctionNotation(); // regular function notation
//   userr.shorthand(); // shorthand notation
//   // urser.arrowEmpty()
//   userr.arrowPassIn(["d", "f"]); // regular notation passing in params from outside
//   userr.shorthandpassin(["d", "f"]);
  
  
  
  
  
//   let user = {
//     name: "crystal",
//     age: 30,
//     email: "email@email.com",
//     location: "berlin",
//     //data example
//     blogs: [
//       { title: "macnchees", likes: 30 },
//       { title: "marmige", likes: 50 },
//     ],
//     shorthand() {
//       console.log("shorthand");
//       this.blogs.forEach((blog) => {
//         // logs blogs using shorthand notation
//         console.log(blog.title, blog.likes);
//       });
//     },
//   };
  
//   const techblogs = [
//     { title: "macnchees", likes: 30 },
//     { title: "marmige", likes: 50 },
//   ];
//   user.shorthand(techblogs);
  
//   console.log(hi)
  
//   // See the output of console.log right next to your code
  
//   console.log(quokka);
//   const quokka = { isAwesome: true };
  
//   console.log(quokka)
  
//   console.log(Math)
//   console.log(Math.PI)
//   console.log(Math.E)
  
//   const are = 7.7
  
//   console.log(Math.round(area))
//   console.log(Math.floor(area))
//   console.log(Math.ceil(area))
//   console.log(Math.trunc(area))
  
//   const hi = "hi"
  
  
  
  
  
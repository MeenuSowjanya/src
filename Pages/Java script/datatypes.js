//Datatypes of Javasript
//Primitive Data type creation and call
let number=12;
let string="is my favourite number";
let boolean=true;
typeof(number);
typeof(string);
typeof(boolean);
console.log(number);
console.log(string);
console.log(boolean);
//Reference Data type creation and call
let array=["Meenu","and","Pradeep","are","very","good","people"];
let object={"Name":"C.Meenu Sowjanya","DOB":"24-09-2003","Favourite_color":"Green"};
console.log(array);
console.log((array).length);
console.log(array[0]);
console.log(array[2]);
console.log(array.sort());
console.log((array).length);
console.log(array[0]);
console.log(array[2]);
console.log(array.reverse());
console.log((array).length);
console.log(array[0]);
console.log(array[2]);
//Here the array sort and reverse commits changes in the original array too
console.log(object);
console.log("Name :"," ",object.Name,"      ","Favourite color :"," ",object.Favourite_color);
console.log(Object.keys(object));
console.log(Object.values(object));

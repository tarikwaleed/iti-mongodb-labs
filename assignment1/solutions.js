use iti
db.instructors.drop()
let instructors=[
    {_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:5000,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
				,
				{
	"_id": 10,
	"firstName": "badr",
	"lastName": "ahmed",
	"age": 22.0,
	"salary": 5550.0,
	"address": {
		"city": "cairo",
		"street": 10.0,
		"building": 8.0
	},
	"courses": [
		"sqlserver",
		"mvc",
		"signalR",
		"asp.net"
	]
},
{
	"_id": 2,
	"firstName": "mona",
	"lastName": "mohammed",
	"age": 21.0,
	"salary": 3600.0,
	"address": {
		"city": "mansoura",
		"street": 20.0,
		"building": 18.0
	},
	"courses": [
		"es6",
		"js",
		"mongodb",
		"expressjs"
	]
},
{
	"_id": 3,
	"firstName": "mazen",
	"lastName": "ali",
	"age": 30.0,
	"salary": 7010.0,
	"address": {
		"city": "cairo",
		"street": 10.0,
		"building": 5.0
	},
	"courses": [
		"asp.net",
		"mvc",
		"EF"
	]
},
{
	"_id":4,
	"firstName": "ebtesam",
	"lastName": "ahmed",
	"age": 28.0,
	"salary": 6200.0,
	"address": {
		"city": "mansoura",
		"street": 14.0,
		"building": 7.0
	},
	"courses": [
		"js",
		"html5",
		"signalR",
		"expressjs",
		"bootstrap",
		"es6"
	]
}
];

db.instructors.insert(instructors)
db.instructors.insert({
	"_id": 88,
	"age": 21.0,
    salary:90,
	"address": {
		"city": "mansoura",
		"street": 20.0,
		"building": 18.0
	},
	"courses": [
		"es6",
		"js",
		"mongodb",
		"expressjs"
	]
},)
// db.instructors.find()
// db.instructors.findOne({},{})
sum=0
count=0
arr=[]
db.instructors.find({},{salary:1}).forEach((doc)=>{
    if(doc.salary != undefined){
    sum+=doc.salary;
    count+=1;
    arr.push(doc.salary)
    }
})
// print(sum)
// print(count)
// print(arr)
// print(arr.length)
// print(typeof arr[0])
// db.instructors.find({},{salary:1}).forEach((doc)=>{if(doc.salary.constructor.name==='undefined')print('un')})
// db.instructors.find({},{salary:1}).forEach((doc)=>{print(doc.salary.constructor.name)})
print(Math.max(...arr))
// print(`sum:${sum} , average:${sum/count}`)

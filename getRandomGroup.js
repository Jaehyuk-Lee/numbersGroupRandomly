let a = process.argv[2]
let b = process.argv[3]

if(a<b){
	console.log("First Number should be bigger than Second Number.");
	process.exit();
}
let result = [];
let numbers = [];
for(let i=0;i<a;i++)
  numbers[i] = i+1;
for(let i=0;i<b;i++)
{
	result[i] = [];
	for(let j=0; j<a/b;j++)
	{
		let num = ~~(Math.random() * (a-(a/b*i)-j));
		result[i][j] = numbers[num]
		numbers.splice(num,1)
	}
	result[i].sort(function(x, y){return x - y});
}
console.log(result);

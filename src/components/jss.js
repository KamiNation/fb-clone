const  arr =[];
        
let month = ["Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];

const startMonth = 0;
const endMonth = 11;

console.log(startMonth)
console.log(endMonth)

for (let i = endMonth; i >= startMonth; i--) {
    arr.push(month[i]);
    arr.push(`${<option value={month[i]}> month[i] </option>}`)
}
console.log(arr)

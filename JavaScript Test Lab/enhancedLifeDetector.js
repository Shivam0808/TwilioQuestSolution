const value = process.argv[2]
let Value = Number(value)
if (Value === 0) {
    console.log("alive")
}
else if (Value === 1) {
    console.log("flowering")
} 
else if (Value === 2) {
    console.log("shedding")
} 
else 
{
    console.log("other")    
}

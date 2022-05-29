checkNumIsDivBy8=(num)=>{
    if(num%8==0)
    {
        return "divisible by 8"
    }
    else{
        return "not divisible by 8"
    }
}

var x=648
var result=checkNumIsDivBy8(x)
console.log(result)
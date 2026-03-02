let a = prompt("Enter a number")

let b = prompt("enter second number")
// let sum = a + b;
//5+6 = 56

// console.log("The sum is ",sum)
// so change to int
if (isNaN(a) || isNaN(b)) {
   throw SyntaxError("This is not allowed ");
}
let sum = parseInt(a) + parseInt(b);


function main() {
    
    try {
        console.log('The sum is ', sum * x);
        return true;
        
    } catch (error) {
        console.log("Error has been encountered ");
        return false;
    }
    //finally clause even run when there is return clause other wise code doesnot run after finally
    finally {
        console.log('file are being closed and db connection is being closed');
        
    }
}
    
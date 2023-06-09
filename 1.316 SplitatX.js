/* Let's find the longer half of the string before and after the x!
First, you'll need to find the lower-case x.
Once you've found the x, split the string in half. 
The first half will be the string before the x,
the second half will be the string after the x.
Take the longer string and return it! */

function splitAtX(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "x"){
            let slice1 = string.slice(0,i);
            let slice2 = string.slice(i+1);
            if (slice1.length > slice2.length) {
                return slice1;
            }
            return slice2;
        }
    }
    
}
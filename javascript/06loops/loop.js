for (let index = 0; index < 5; index++) {
    console.log(index);
    
}


let j = 0;
while (j < 10) {
    
    console.log(j);
    ++j;
}


object = {
    name: "anis",
    role: "programmer",
    company:"swoyef"
}
for (const key in object) {
    const element = object[key];
    console.log(key,object[key]);
    
}

for (const element of "stringorarray") {
    console.log(element);
}
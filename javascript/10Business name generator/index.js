
let ad={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
};
let sn={
    1:"Engine",
    2:"Foods",
    3:"Garments"
};
let aw={
    1:"Bros",
    2:"Limited",
    3:"HUb"
}

let rnd1=Math.random()*(3-1)+1;
let r1=Math.round(rnd1);
let rnd2=Math.random()*(3-1)+1;
let r2=Math.round(rnd2);
let rnd3=Math.random()*(3-1)+1;
let r3=Math.round(rnd3);

console.log(`Your Business Name is: ${ad[r1]}${sn[r2]}${aw[r3]}  `)
function one() {
    console.log("1");
}
function two() {
    console.log("2");
}
function three() {
    console.log("3");
}

async function timeout() {
    console.log("x");
    const a = new Promise((res, rej) => {
        setTimeout(() => {
            console.log("I'm here !!!");
            res();
        }, 1000);
    });
    await a;
    console.log("y");
    return;
}

async function main(){
    
    const test = timeout();
    await test;
    one();
    two();
    three();
}
main();
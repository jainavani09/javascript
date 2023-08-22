function delay(time) {
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();
    },time);
   });
}

async function placeOrder(){
    await delay(2000);
    console.log("Order Taken");
}

async function startProduction(){
    await delay(1000);
    console.log("start production");
}


async function printId(){
    await delay(3000);
    console.log("id print");
}


async function productionName(){
    await delay(2000);
    console.log("product name");
}


async function productionDesc(){
    await delay(2000);
    console.log("description");
}


async function main()
{
    console.log("order is now going to take place");
    await placeOrder();
    console.log("Product is in production ....");
    await startProduction();
    console.log("Id Printing started...");
    await printId();
    console.log("Product Name started Printing....");
    await productionName();
    console.log("Product Description started Printing");
    await productionDesc();
}













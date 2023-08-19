const placeOrder = (callback) =>{
    setTimeout(()=>{
        console.log("Order placed");
        callback();
    },2000);
};


const startProduction = (callback) =>{
    setTimeout(()=>{
        console.log("Production started");
        callback();
    },5000);
};

const printId = (callback) =>{
    setTimeout(()=>{
        console.log("Id printed");
        callback();
    },5000);
};


const productionName= (callback) =>{
    setTimeout(()=>{
        console.log("ProductionDesc printed");
        callback();
    },5000);
};


const ProductDesc = (callback) =>{
    setTimeout(()=>{
        console.log("productionDesc printed");
        callback();
    },5000);
};







console.log('Ordering Product ......');
placeOrder(()=> {
    console.log("In Production");
    startProduction(()=>{
        console.log("Printing items started");
        printId(() => {
            productionName(()=>{
                productionDesc();
                console.log("Day Ended");

            });
        });
    });
});

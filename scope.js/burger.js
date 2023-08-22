const addveggies = (callback)=>{
    setTimeout(()=>{
        const veggies="";
        console.log("Veggies prepared", veggies)
        callback(veggies);
    },3000);
};

const addTikki= (veggies,callback)=>{
    setTimeout(()=>{
        const Tikki = veggies+ "";
        console.log("Tikki prepared", Tikki)
        callback(Tikki);
    },3000);
};


const addBurger = (veggies,Tikki,callback)=>{
    setTimeout(()=>{
        const Burger = veggies+Tikki+"";
        console.log("Burger prepared",Burger)
        callback(Burger);
    },3000);
};



addveggies((veggies)=>{
    console.log("preparing for tikki started");
    addTikki(veggies,(Tikki)=>{
        console.log("preparing for Burger started");
        addBurger(veggies,Tikki,(Burger)=>{
            console.log("Burger is served");
        });
    });
});
async function fetchdata()
{
    try {const response=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);

if (!response.ok)
{
    throw new Error("Network response was not ok");
}
const data=await response.json()
console.log(data);
}
catch(error)
{
    console.log("error1",error);
}
}
fetchdata();
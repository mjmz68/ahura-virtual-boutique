(()=>{
const order=document.getElementById("order"),admin="https://t.me/mjmz368";
function routeToAdmin(){const query=order.href.split("?")[1];order.href=admin+(query?"?"+query:"");}
routeToAdmin();document.addEventListener("click",routeToAdmin);
})();


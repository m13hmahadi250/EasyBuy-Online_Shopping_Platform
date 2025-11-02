const searchProducts=()=>{
     fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(data=>showDetails(data))

}

let count_product = 0;
let total_cost = 0;
let delivary_cost = 0;
let m = [];
for(let i=0 ; i<=100 ; i++) m[i]=0;


// Call by Reference
const navbox = document.getElementById('navbar')  
const navRight = document.getElementById('nav_right');
const nav_name = document.getElementById('shop_name'); 
const slide_bar = document.getElementById('home');
const Pro = document.getElementById('Pro');
const total_product = document.getElementById('total_product');
const cost = document.getElementById('cost');
const product_left = document.getElementById('product_left');
const d_cost = document.getElementById('d_cost');
const pay = document.getElementById('t_cost');
const ord = document.getElementById('order_congo');
const od = document.getElementById('od');


 


function showDetails(products){
    const details = document.getElementById('product_right');

    products.forEach(element => { 
        const div = document.createElement('div');  

        div.innerHTML = `
          <div class=" rounded-md bg-indigo-600 text-gray-50">
            <div class="p-5">
              <img src="${element.image}"  class="lg:w-90 lg:h-90 w-80 h-80">
            </div>
            <div class="mx-4">
              <p class="font-bold text-sm mb-1">${element.title.slice(0,20)}</p>
              <p class="text-sm mb-1 font-bold"">Price: $<span>${element.price}</span></p> 
              <p>Rating: ${element.rating.rate}</p>
              <div class=" lg:flex lg:justify-center gap-4 py-2">
                    <button onclick="add(${element.id},${element.price})" class="py-2 bg-green-500 rounded-md w-full px-3 ">Add</button>
                    <button onclick="remove(${element.id},${element.price})" class="py-2 bg-red-600 rounded-md w-full px-3 ">Remove</button>
              </div>
            </div>
          </div>
        `;
        details.appendChild(div);
    });
}   

function remove(num,money)
{
     if(m[num]==0) {}
     else 
     {  
          m[num]--;
          total_cost -= money;
          count_product--;
          update();
     }
}
function add(num,money)
{
     m[num]++;
     total_cost += money;
     count_product++;
     update();
     
}
function update()
{
     total_product.innerHTML = count_product;
     if(count_product==0) 
     {
          d_cost.innerHTML = 0+'$';
          delivary_cost = 0;
     }
     else 
     {
          d_cost.innerHTML = 10+'$';
          delivary_cost = 10;
     }

     cost.innerHTML = total_cost.toFixed(2)+'$';
     if(total_cost>200) 
     {         
          let box = total_cost;
          pay.innerHTML = box.toFixed(2)+'$';
     } 
   
     else 
     {
          let box = total_cost+delivary_cost;
          pay.innerHTML = box.toFixed(2)+'$';
     }

}
function order()
{
     if(count_product>0) ord.innerHTML = "Happy to have you :)";
} 
   

function loadReviews() {
     fetch('https://dummyjson.com/comments')
     .then(res => res.json())
     .then(data => renderReviews(data))
}

function renderReviews(review)
{
     const reviews = document.getElementById('reviews');
     const allreviews = review.comments.slice(0,5);
     
     allreviews.forEach(r => {
          const div = document.createElement('div');
          div.className = "bg-gray-200 p-10 text-black m-10 shadow-sm rounded-xl w-[400px] flex-shrink-0";
          div.innerHTML = `
             <div class="flex items-center gap-2 text-grey-500 text-xl font-bold">
                <p>${r.user.fullName}</p>
            </div>
            <p class="mt-4 text-sm text-gray-600">${r.body}</p>
            <div class="flex  mt-[30px] ">
                <p class="bg-white p-2 rounded-3xl">
                    ${r.likes} likes 
                </p>
                
            </div>
          `;
          reviews.appendChild(div);
     });
}

function message_submit()
{
     const show_message=document.getElementById("show_message")
     const name=document.getElementById("name");
     const email=document.getElementById("mail");
     const message=document.getElementById("message");
     const div=document.createElement('div');

     show_message.innerHTML='';

     if(name.value.length==0 || email.value.length==0 || message.value.length==0)
     {
          div.innerHTML='fill up the form correctly'
          show_message.appendChild(div)
     }
     else{
          div.innerHTML='Thanks you for fill up the form'
          show_message.appendChild(div)
     }

}

loadReviews();
searchProducts();
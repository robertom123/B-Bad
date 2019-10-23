const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
let load = document.getElementById('load');
fetch(url)
.then(function(response) {
    if(response.status !== 200){
        alert("wrong");
    }
    else{
        load.style.display = 'none';
        response.json().then(function(data){
            data.forEach(quote => {
                //Quote div
                let div = document.createElement("div");
                div.setAttribute("class", "content");

                //button div
                let div2 = document.createElement("div");
                

                //quote 
                let h1 = document.createElement("h1");
                h1.textContent = quote.quote;

                // author of quote
                let h3 = document.createElement("h3");
                h3.textContent = "- " +  quote.author + " -";

                //button with event listener 
                let btn = document.createElement("button");
                btn.className = "changer";
                btn.textContent = "Next";
                btn.addEventListener("click", newQ =>{
                   // uses fetch call on button click 
                    fetch(url)
                    .then(function(response) {
                        if(response.status !== 200){
                            console.log("wrong");
                        }
                        else{
                            response.json().then(function(data){
                                data.forEach(quote => {
                                    
                    
                                    h1.textContent = quote.quote;
                                    h3.textContent = "- " + quote.author + " -";
                                     
                                })
                            })
                        }
                    }).catch(function(err){
                        alert("error");
                    });
                })

                div.appendChild(h1);
                div.appendChild(h3); 
                div2.appendChild(btn);
                main.appendChild(div);
                main.appendChild(div2);



            })
        })
    }
}).catch(function(err){
    alert("error");
});

let main = document.getElementById("quote");
let api=`https://v6.exchangerate-api.com/v6/090fc42c5cc60f545533dee3/latest/INR`
let selectelement=document.querySelectorAll(".selectelement")
let exchange_button=document.querySelector(".exchange-btn")



document.addEventListener("DOMContentLoaded",()=>{
    async function connectApi(){
        // console.log(fromcurrency)
        let response=await fetch(`https://v6.exchangerate-api.com/v6/090fc42c5cc60f545533dee3/latest/INR`)
        let data=await response.json();
        let conversion_rates=data.conversion_rates

        






        // setflagimage(selectelement);
        for(let rates in conversion_rates){
            if(rates){
                selectelement.forEach((element)=>{

                    const option=document.createElement("option")
                    element.appendChild(option)
                    option.value=rates
                    option.innerText=rates




                })
            }
            // console.log(rates.slice(0,-1))
        }

        exchange_button.addEventListener("click",()=>{
            getexchangerate(conversion_rates);
        })


    }
    connectApi();
})

let from=document.querySelector("#from")
let to=document.querySelector("#to")

function getexchangerate(conversion_rates){
    let amount=document.querySelector("#input")


    let from_rate=conversion_rates[from.value]
    let to_rate=conversion_rates[to.value]
    let result=(to_rate/from_rate)*amount.value

    let message=document.querySelector(".message")
    message.innerHTML=`${amount.value} ${from.value}=${result.toFixed(4)} ${to.value}`
    

}




from.addEventListener("change", () => {
    let value = from.value.slice(0,-1);  
    let img = document.querySelector("#img1");
    img.src = `https://flagsapi.com/${value}/flat/64.png`;
});


to.addEventListener("change", () => {
    let value = to.value.slice(0,-1);  
    let img = document.querySelector("#img2");
    img.src = `https://flagsapi.com/${value}/flat/64.png`;
});

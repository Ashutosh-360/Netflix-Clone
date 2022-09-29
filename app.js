

// const list=document.getElementsByClassName(faq-list);

document.addEventListener("click",(event)=>
{
    // console.log(event.target.className);
    if(event.target.className=="display-btn")
    {
         if(event.target.parentNode.lastElementChild.classList.value=="closed")
         {
            event.target.parentNode.lastElementChild.classList.remove("closed")
             event.target.parentNode.lastElementChild.classList.add("opened");
         }
         else
         {
             event.target.parentNode.lastElementChild.classList.remove("opened");
            event.target.parentNode.lastElementChild.classList.add("closed")
         }
    }
})
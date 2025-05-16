function marqueeing(data,mh1){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            mh1.textContent=data 
            resolve(1000)
        }, 1000);
    })
}
(async function getdata(){
    const mh1=document.querySelector("span")
    await marqueeing("To",mh1)
    await marqueeing("Do",mh1)
    await marqueeing("List",mh1)
})();




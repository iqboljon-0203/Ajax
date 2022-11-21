'use strict';
const uzs=document.querySelector('#uzs'),
    usd=document.querySelector('#usd');

uzs.addEventListener('input',(e)=>{
    const request=new XMLHttpRequest();
    request.open('GET','json/current.json');
    request.setRequestHeader('Content-Type','application/json; chartset=utf-8');
    request.send();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status===200){
            const data=JSON.parse(request.response);
            usd.value=(+uzs.value/data.current.usd).toFixed(2);
        }else{
            usd.value='Something went wrong):';
        }
    });
    ///status 200-OK,404-Not found,500-Server error
    ///statusText
    /////response
    ////readyState=>4=done
});
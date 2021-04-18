let set1=[3,1,7,9];
let set2=[2,4,1,9,3];

function tableaux(set1s,set2s) {
    let somme=0;
    set1.forEach(element=>{
        if(set2.includes(element)==false) somme+=element
       
    });
    set2.forEach(element=>{
        if(set1.includes(element)==false) somme+=element
         
            })


     return somme;
}
console.log(tableaux(set1,set2));
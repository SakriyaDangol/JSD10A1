const heading = document.createElement('h2');
document.body.appendChild(heading);
heading.innerHTML = `CatPhotoApp`;

// const anchor = document.createElement('a');
// anchor.innerHTML = `cat photos.`;
// document.para1.appendChild(anchor);

const para1 = document.createElement('p');
document.body.appendChild(para1);
para1.innerHTML = `Click here to view more cat photos.` ;

const para2 = document.createElement('p');
document.body.appendChild(para2);
para2.innerHTML = `Things cats love:` ;

const uList = document.createElement('ul');
document.body.appendChild(uList);

const ulLi = document.createElement('li');

var list = [`cat nip`, `laser pointer`, `lasagna`];

// for (let i=0; i<list.length; i++){
    
//     if(list[i]){
//         ulLi.innerHTML = list[i];
//     }
// }     

uList.appendChild(ulLi);

const para3 = document.createElement('p');
document.body.appendChild(para3);
para3.innerHTML = `Top 3 things cats hate:` ;

const oList = document.createElement('ol');
document.body.appendChild(oList);

const olLi = document.createElement('li');

oList.appendChild(olLi);
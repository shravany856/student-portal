data = [
{id:1,first_name:"Chadwick",last_name:"Ayre",email:"cayre0@cam.ac.uk",gender:"Male",img_src: "https://robohash.org/corporisquiaperiam.png?size=50x50&set=set1",class:11,marks:18,passing:false,city:"Moorreesburg"},
{id:2,first_name:"Abrahan",last_name:"Seabrocke",email:"aseabrocke1@ocn.ne.jp",gender:"Male",img_src: "https://robohash.org/autiuredistinctio.png?size=50x50&set=set1",class:3,marks:27,passing:true,city:"Kampong Thom"},
{id:3,first_name:"Nathanael",last_name:"Laye",email:"nlaye2@typepad.com",gender:"Male",img_src:"https://robohash.org/dolorumsedut.png?size=50x50&set=set1",class:10,marks:89,passing:false,city:"Niquinohomo"},
{id:4,first_name:"Luigi",last_name:"Balcers",email:"lbalcers3@reverbnation.com",gender:"Agender",img_src:"https://robohash.org/eumaliquamest.png?size=50x50&set=set1",class:8,marks:30,passing:false,city:"Nashtā Rūd"},
{id:5,first_name:"Adam",last_name:"Gurg",email:"agurg4@xrea.com",gender:"Female",img_src:"https://robohash.org/nemolaborumquis.png?size=50x50&set=set1",class:3,marks:10,passing:true,city:"Sandviken"}]
// console.log("aa",data)
let inputSearchElement = document.getElementById("search1");
let buttonElement = document.getElementById("searchBtn");

let emptable = document.getElementById("emptable")
let sortAtozElement = document.getElementById("sort A-Z");
let sortZtoaElement = document.getElementById("sort Z-A");
let sortByMarksElement = document.getElementById("sortByMarks");
let sortByPassingElement = document.getElementById("sortByPassing");
let sortByClassElement = document.getElementById("sortByClass");
let sortByGenderElement = document.getElementById("sortByGender");

buttonElement.addEventListener('click', search);
sortAtozElement.addEventListener('click', sortIncreasing);
sortZtoaElement.addEventListener('click', sortDecreasing);
sortByMarksElement.addEventListener('click', sortByMarks);
sortByPassingElement.addEventListener('click', sortByPassing);
sortByClassElement.addEventListener('click', sortByClass);
sortByGenderElement.addEventListener('click', sortByGender);

 

function empdata(data){
   // emptable.innerHTML="";
   
        let Item = document.createElement("tr");
        Item.innerHTML =`
        <td>ID</td>
        <td>Name</td> 
        <td>Gender</td>
        <td>Class</td>
        <td>Marks</td>
        <td>Passing</td>
        <td>Email</td>
       
         `
         emptable.append(Item);
    
    
    // console.log("aa")
    data.map((item) => {
        let Item = document.createElement("tr");
        Item.innerHTML =`
        <td>${item.id}</td>
        <td><img src="${item.img}" height="40" width="40">${item.first_name}${item.last_name}</td>
        <td>${item.gender}</td>
        <td>${item.class}</td>
        <td>${item.marks}</td>
        <td>${item.passing ? "Pass":"Fail"}</td>
        <td>${item.email}</td>
       
         `
         emptable.append(Item);
    })
    
}
empdata(data);

function search(){
    emptable.innerHTML="";
    let srch = inputSearchElement.value;
    console.log("srch",srch);
    let matchedItems = data.filter((item) => {
        console.log("Itemname: ",item.name)
        return item.first_name.toLowerCase().includes(srch.toLowerCase()) || 
        item.last_name.toLowerCase().includes(srch.toLowerCase()) ||
        item.email.toLowerCase().includes(srch.toLowerCase());
       
    }) 
    console.log("matchedItems", matchedItems); 
    empdata(matchedItems);
}



function sortIncreasing(){
    emptable.innerHTML="";
    let increasingData = data.sort((a,b) => {
        if(a.first_name < b.first_name){
            return -1;
        }
        else if(a.first_name > b.first_name){
            return 1;
        }
        else return 0;
        
    })
    empdata (increasingData);

}


function sortDecreasing(){
    emptable.innerHTML="";
    let decreasingData = data.sort((a,b) => {
        if(a.first_name < b.first_name){
        return 1;
        }
        else if(a.first_name > b.first_name){
            return -1;
        }
        else return 0;
    })
    empdata (decreasingData);
}


function sortByMarks(){
    emptable.innerHTML="";
    let marksData = data.sort((a,b) => {
    if(a.marks < b.marks){
        return -1;
    }
    else if(a.marks > b.marks){
        return 1;
    }
    else return 0;
})
empdata(marksData);
}


function sortByPassing(){
    emptable.innerHTML="";
    let passingData = data.filter((item) => {
        return item.passing; 
            
        })
  
   console.log("pass",passingData )

empdata(passingData);
}

function sortByClass(){
    emptable.innerHTML="";
    let classData = data.sort((a,b) => {
        if(a.class < b.class){
            return -1;
        }
        else if(a.class > b.class){
            return 1;
        }
        
    })
    empdata(classData);
}


function sortByGender(){
    emptable.innerHTML="";
    let femaleData = data.filter((item) => {
        return item.gender.includes("Female") ;
    })

  
   
    empdata(femaleData );

    let maleData = data.filter((item) => {
        return item.gender.includes("Male") ;
    })
    
    empdata(maleData );
}



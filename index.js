
/*document.getElementById("cu-action").addEventListener('click',addfun);
let array=[];
let ans="";
let i=0;
let id1=0;
let count=-1;
currId=""
function addfun()
{
    rows='';
    let name1=document.getElementById("name").value;
    let email1=document.getElementById("email").value;
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    const object={};
    object.id=++id1;
    object.name=name1;
    object.email=email1;
    array.push(object);
    array.forEach((object)=>{
        const tr=`<tr>
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td>${object.email}</td>
        <td><button onclick="editfun(${object.id})" style='border:none;background:none;color:blue';>Edit</button><button onclick="deletefun(${object.id})" style='border:none;background:none;color:blue';>Delete</button>
        </td>
        </tr>`;
        rows+=tr;
    document.getElementById("todo-body").innerHTML=rows;
    });
  
}
function  editfun(id)
    {
    
    document.getElementById("cu-action").innerHTML="Update";
   /* document.getElementById("cu-action").addEventListener('click',function(){
        updatefun(id);
    });*//*
    count=array.findIndex(x=>x.id===id)
    document.getElementById("name").value=array[count].name;
    document.getElementById("email").value=array[count].email;
    document.getElementById("todo-body").deleteRow(count);
    mapfun(id);
    array.splice(count);
    }
function  deletefun(id)
    {    
    count=array.findIndex(x=>x.id===id)
    document.getElementById("todo-body").deleteRow(count);
    array=array.filter((x,y,z)=>y!=count)
    }
function mapfun(id)
{
    array=array.map(x=>{if(x.id===id){x.id=id;x.name=name;x.email=email }else {return x} return x});
    console.log(array)
}
function updatefun(id)
{
   
    count=array.findIndex(x=>x.id===id)
    document.getElementById("name").value=array[count].name;
    document.getElementById("email").value=array[count].email;
    document.getElementById("todo-body").deleteRow(count);
    mapfun(id);
   
}*/
const name=document.getElementById("name");
const email=document.getElementById("email");
const btn=document.getElementById("cu-action");
document.getElementById("cu-action").addEventListener('click',insertfun);
let array=[];
let currId=null;
let id=0;
let varr=0;
function insertfun()
{
    if(currId)
    {
        array=array.map(x=>{
            if(x.id===currId)
            {
                x.name=name.value;
                x.email=email.value;
             }
             return x;
            });
        updateval(null,"Add");
    }
    else{
        let obj={};
     obj.id=++id;
     obj.name=name.value;
     obj.email=email.value;
     console.log(obj);
     array.push(obj);
    }
    display();
} 
function reset()
{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
}
function display()
{
   let rows='';
    array.forEach(object=>{
        const tr=`<tr>
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td>${object.email}</td>
        <td><button onclick="editfun(${object.id})" style='border:none;background:none;color:blue';>Edit</button><button onclick="deletefun(${object.id})" style='border:none;background:none;color:blue';>Delete</button>
        </td>
        </tr>`;
        rows+=tr;
    
    });
    document.getElementById("todo-body").innerHTML=rows;
    reset();
}
function editfun(id)
{
   let obj1=array.find(obj=>obj.id===id);
   if(obj1)
   {
       name.value=obj1.name;
       email.value=obj1.email;
   }
   updateval(id,"update");
   
}
function deletefun(id)
{
    count=array.findIndex(x=>x.id===id)
    array=array.filter((x,y,z)=>y!=count)
    display();
}
function updateval(id,text)
{
    currId=id;
    btn.innerHTML=text;
}
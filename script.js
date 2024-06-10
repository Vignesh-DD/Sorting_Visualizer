
let div_sizes=[];
let divs=[];
let margin_size;
const sortchart=document.querySelector('.sort-chart');
let arr_size=document.getElementById('arraySize').textContent;

generate_array();
const dropdowns=document.querySelectorAll('.dropdown');
const drop=document.getElementById('size-dropdown');
const randomBtn=document.querySelector('.random-button');
const algo=document.getElementById('algorithm');
const algorithm=document.getElementById('algo_selected');
const sortbtn=document.querySelector('.sortBtn');
const speed_val=document.getElementById('speed-dropdown')
const algo_select=document.getElementById('select_algo');
const colorChange=document.querySelectorAll('.selected');
const colorkey=document.querySelector('.ColorKey');
const color_unsort=document.querySelector(".ColorKey__Item");


dropdowns.forEach(dropdown =>{
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    
   
    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
       

    });
    
    document.addEventListener('click',e =>{
        if(!menu.contains(e.target) && !selected.contains(e.target) && !select.contains(e.target)){
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    })
    
    options.forEach(option => {
        option.addEventListener('click',() => {
            selected.textContent = option.textContent;
            update_array_size();
            update_speed(); 
            if(!isNaN(selected.textContent)){
                generate_array();
            }else{
                algo_click=algo.textContent;
                sort_info(algo_click);

            }
            algorithm.addEventListener("click",enable_button);
            selected.classList.add('font-change');           
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            
            options.forEach(option =>{
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
    
});



function generate_array()
{
   
    sortchart.innerHTML="";
    sortchart.classList.add('divs');
        for(let i=0;i<arr_size;i++)
        {
            div_sizes[i]=Math.floor((Math.random() * 100)+1);
            divs[i]=document.createElement("div");
            sortchart.appendChild(divs[i]);
            if(arr_size<=25){
                divs[i].classList.add("bar");
                divs[i].textContent=div_sizes[i];
                margin_size=0.3;
                divs[i].style="margin-right: 0.5rem;background-color:whitesmoke; width:"+(100/arr_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
            }else{
                margin_size=0.1;
                divs[i].style="margin-right: 0.125rem;background-color:whitesmoke; width:"+(100/arr_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";                
            }
          
        }
   
}
randomBtn.addEventListener('click',()=>{
    generate_array();
});
function disable_button()
{
    sortbtn.disabled=true;
    randomBtn.disabled=true;
    drop.disabled=true;
    speed_val.disabled=true;
    algo_select.disabled=true;
    for(let i=0;i<colorChange.length;i++){

        colorChange[i].classList.add("color_disable");
    }
    
}

sortbtn.addEventListener('click',runalgo);
function runalgo(){

    disable_button();

    switch(algo.textContent){

        case "Bubble Sort":Bubble();
                            break;
        case "Insertion Sort":Insertion();
                            break;
        case "Selection Sort":Selection_sort();
                            break;
        case "Quick Sort":Quick();
                            break;
        case "Merge Sort":Merge();
                            break;
            
        default:console.log("Please select the algorithm");
                            break;
    }
}




let c_delay=0;


function update_array_size(){
        arr_size=document.getElementById("arraySize").textContent;  
}

function update_speed()
{
    let array_speed=document.getElementById('arraySpeed').textContent;
    switch(array_speed)
    {
        case "0.25x": speed=2;     
                break;
        case "0.5x": speed=5;
                break;
        case "1x": speed=10;
                break;
        case "2x": speed=100;
                break;
        case "4x": speed=1000;
                break;
    }
    delay_time=10000/(Math.floor(arr_size/5)*speed); 
}



function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";       
        if(arr_size<=25){
                cont.textContent=height;
                cont.style=" margin:0% " + margin_size + "%; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";transition:0.10s;";       

        }
      
    },c_delay+=delay_time);
    
}
function enable_button()
{
        
    window.setTimeout(function(){
        for(let i=0;i<colorChange.length;i++){

                colorChange[i].classList.remove("color_disable");
        }
        sortbtn.disabled=false;
        randomBtn.disabled=false;
        drop.disabled=false;
        speed_val.disabled=false;
        algo_select.disabled=false;
        
        sortbtn.classList.add("sortBtn_enabled");
        
    },c_delay+=delay_time);
}
function clear_colors(){

        let child=colorkey.lastElementChild;
        while(child){
         colorkey.removeChild(child);
         child=colorkey.lastElementChild;
        }
}


const algo_heading=document.querySelector(".algo_heading");
const SortInfo__Article=document.querySelector(".SortInfo__Article");
const worst_time=document.querySelector(".worst_time");
const avg_time=document.querySelector(".avg_time");
const best_time=document.querySelector(".best_time");
const worst_space=document.querySelector(".worst_space");

let bubble_info="<a href='https://en.wikipedia.org/wiki/Bubble_sort'style='color:#f53192;'>Bubble Sort </a>";
bubble_info+="is an algorithm that sorts an array from the lowest value to the highest value.Run the simulation to see how it looks like when the Bubble Sort algorithm sorts an array of values.Each value in the array is represented by a column.The word 'Bubble' comes from how this algorithm works, it makes the highest values 'bubble up'.<br><br><b>How it works:</b><br><ol><li>Go through the array, one value at a time.</li><li>For each value, compare the value with the next value.</li><li>If the value is higher than the next one, swap the values so that the highest value comes last.</li><li>Go through the array as many times as there are values in the array.</li></ol>"


let insertion_info="<a href='https://en.wikipedia.org/wiki/Insertion_sort'style='color:#f53192;'>Insertion Sort </a>";
insertion_info+="uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.The algorithm takes one value at a time from the unsorted part of the array and puts it into the right place in the sorted part of the array, until the array is sorted.<br><br><b>How it works:</b><br><ol><li>Take the first value from the unsorted part of the array.</li><li>Move the value into the correct place in the sorted part of the array.</li><li>Go through the unsorted part of the array again as many times as there are values.</li></ol>";

let Selection_info="<a href='https://en.wikipedia.org/wiki/Selection_sort'style='color:#f53192;'>Selection Sort </a>";
Selection_info+="algorithm finds the lowest value in an array and moves it to the front of the array.The algorithm looks through the array again and again, moving the next lowest values to the front, until the array is sorted.<br><br><b>How it works:</b><br><ol><li>Go through the array to find the lowest value.</li><li>Move the lowest value to the front of the unsorted part of the array.</li><li>Go through the array again as many times as there are values in the array.</li></ol>";

let quick_info="<a href='https://en.wikipedia.org/wiki/Quicksort'style='color:#f53192;'>Quick Sort </a>";
quick_info+=" is one of the fastest sorting algorithm.The Quicksort algorithm takes an array of values, chooses one of the values as the 'pivot' element, and moves the other values so that lower values are on the left of the pivot element, and higher values are on the right of it.<br><br>In this above simulation the first element of the array is chosen to be the pivot element, but we could also have chosen the last element of the array, or any element in the array really.Then, the Quicksort algorithm does the same operation recursively on the sub-arrays to the left and right side of the pivot element. This continues until the array is sorted.<br><br><b>How it works:</b><br><ol><li>Choose a value in the array to be the pivot element.</li><li>Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.</li><li>Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.</li><li>Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.</li></ol>";

let merge_info="<a href='https://en.wikipedia.org/wiki/Merge_sort'style='color:#f53192;'>Merge Sort</a>";
merge_info+=" algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.<br><br><b>Divide:</b> The algorithm starts with breaking up the array into smaller and smaller pieces until one such sub-array only consists of one element.<br><br><b>Conquer:</b> The algorithm merges the small pieces of the array back together by putting the lowest values first, resulting in a sorted array.<br><br>The breaking down and building up of the array to sort the array is done recursively.<br><br><b>How it works:</b><br><ol><li>Divide the unsorted array into two sub-arrays, half the size of the original.</li><li>Continue to divide the sub-arrays as long as the current piece of the array has more than one element.</li><li>Merge two sub-arrays together by always putting the lowest value first.</li><li>Keep merging until there are no sub-arrays left.</li></ol>"

function sort_info(algo_click){
       

        switch(algo_click){

        case "Bubble Sort":
                algo_heading.innerHTML="Bubble Sort";
                SortInfo__Article.innerHTML=bubble_info;
                worst_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                avg_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                best_time.innerHTML="<span style='font-size:1rem;'>O(n)</span>";
                worst_space.innerHTML="<span style='font-size:1rem;'>O(1)</span>";
                clear_colors();
                bubble_color();
                break;
        
        case "Insertion Sort":
                algo_heading.innerHTML="Insertion Sort";
                SortInfo__Article.innerHTML=insertion_info;
                worst_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                avg_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                best_time.innerHTML="<span style='font-size:1rem;'>O(n)</span>";
                worst_space.innerHTML="<span style='font-size:1rem;'>O(1)</span>";
                clear_colors();
                insertion_color();
                break;

        case "Selection Sort":
                algo_heading.innerHTML="Selection Sort";
                SortInfo__Article.innerHTML=Selection_info;
                worst_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                avg_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                best_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                worst_space.innerHTML="<span style='font-size:1rem;'>O(1)</span>";
                clear_colors();
                selection_color();
                break;

        case "Quick Sort":
                algo_heading.innerHTML="Quick Sort";
                SortInfo__Article.innerHTML=quick_info;
                worst_time.innerHTML="<span style='font-size:1rem;'>O(n<sup>2</sup>)</span>";
                avg_time.innerHTML="<span style='font-size:1rem;'>O(n log n)</span>";
                best_time.innerHTML="<span style='font-size:1rem;'>O(n log n)</span>";
                worst_space.innerHTML="<span style='font-size:1rem;'>O(log n)</span>";
                clear_colors();
                quick_color();
                break;

        
        case "Merge Sort":
                algo_heading.innerHTML="Merge Sort";
                SortInfo__Article.innerHTML=merge_info;
                worst_time.innerHTML="<span style='font-size:1rem;'>O(n log n)</span>";
                avg_time.innerHTML="<span style='font-size:1rem;'>O(n log n)</span>";
                best_time.innerHTML="<span style='font-size:1rem;'>O(n log n)</span>";
                worst_space.innerHTML="<span style='font-size:1rem;'>O(n)</span>";
                clear_colors();
                merge_color();
                break;
              
        }
}
function bubble_color(){

        let comparing='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ffd54f;"></div><span class="colorDiv">Comparing</span>'
        let div1=document.createElement("div");
        div1.innerHTML=comparing;
        colorkey.appendChild(div1);

        let swaping='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #f06292;"></div><span class="colorDiv">Swaping</span>'
        let div2=document.createElement("div");
        div2.innerHTML=swaping;
        colorkey.appendChild(div2);

        let sorted='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color:#338a3e;"></div><span class="colorDiv">Sorted</span>'
        let div3=document.createElement("div");
        div3.innerHTML=sorted;
        colorkey.appendChild(div3);
}
function insertion_color(){

        let copy='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #42a5f5;"></div><span class="colorDiv">Copy to Memory</span>'
        let div1=document.createElement("div");
        div1.innerHTML=copy;
        colorkey.appendChild(div1);


        let comparing='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ffd54f;"></div><span class="colorDiv">Comparing</span>'
        let div3=document.createElement("div");
        div3.innerHTML=comparing;
        colorkey.appendChild(div3);

        let swaping='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #f06292;"></div><span class="colorDiv">Swaping</span>'
        let div4=document.createElement("div");
        div4.innerHTML=swaping;
        colorkey.appendChild(div4);

        let overwrite='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ef5350;"></div><span class="colorDiv">Overwrite from Memory</span>'
        let div2=document.createElement("div");
        div2.innerHTML=overwrite;
        colorkey.appendChild(div2);

        let sorted='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color:#338a3e;"></div><span class="colorDiv">Sorted</span>'
        let div5=document.createElement("div");
        div5.innerHTML=sorted;
        colorkey.appendChild(div5);
      
}
function selection_color(){

        let min='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #42a5f5;"></div><span class="colorDiv">Minimum Element</span>'
        let div4=document.createElement("div");
        div4.innerHTML=min;
        colorkey.appendChild(div4);

        let comparing='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ffd54f;"></div><span class="colorDiv">Comparing</span>'
        let div1=document.createElement("div");
        div1.innerHTML=comparing;
        colorkey.appendChild(div1);

        let swaping='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #f06292;"></div><span class="colorDiv">Swaping</span>'
        let div2=document.createElement("div");
        div2.innerHTML=swaping;
        colorkey.appendChild(div2);

        let sorted='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color:#338a3e;"></div><span class="colorDiv">Sorted</span>'
        let div3=document.createElement("div");
        div3.innerHTML=sorted;
        colorkey.appendChild(div3);
}    
function quick_color(){

        let min='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #42a5f5;"></div><span class="colorDiv">Pivot</span>'
        let div4=document.createElement("div");
        div4.innerHTML=min;
        colorkey.appendChild(div4);

        let comparing='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ffd54f;"></div><span class="colorDiv">Comparing</span>'
        let div1=document.createElement("div");
        div1.innerHTML=comparing;
        colorkey.appendChild(div1);

        let overwrite='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ef5350;"></div><span class="colorDiv">Stops Comparing</span>'
        let div5=document.createElement("div");
        div5.innerHTML=overwrite;
        colorkey.appendChild(div5);

        let swaping='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #f06292;"></div><span class="colorDiv">Swaping</span>'
        let div2=document.createElement("div");
        div2.innerHTML=swaping;
        colorkey.appendChild(div2);

        let sorted='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color:#338a3e;"></div><span class="colorDiv">Sorted</span>'
        let div3=document.createElement("div");
        div3.innerHTML=sorted;
        colorkey.appendChild(div3);
}    
function merge_color(){

        let min='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #42a5f5;"></div><span class="colorDiv">Middle Element</span>'
        let div4=document.createElement("div");
        div4.innerHTML=min;
        colorkey.appendChild(div4);

        let comparing='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #ffd54f;"></div><span class="colorDiv">Left Array</span>'
        let div1=document.createElement("div");
        div1.innerHTML=comparing;
        colorkey.appendChild(div1);

        let swaping='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color: #f06292;"></div><span class="colorDiv">Right Array</span>'
        let div2=document.createElement("div");
        div2.innerHTML=swaping;
        colorkey.appendChild(div2);

        let sorted='<div class="ColorKey__Item"><div class="ColorKey__Box" style="background-color:#338a3e;"></div><span class="colorDiv">Sorted</span>'
        let div3=document.createElement("div");
        div3.innerHTML=sorted;
        colorkey.appendChild(div3);
}    


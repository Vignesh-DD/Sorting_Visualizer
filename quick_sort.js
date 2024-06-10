function Quick(){
    c_delay=0;
    quick_sort(0,arr_size-1);
    enable_button();

}
function quick_partition(low,high){

        let key=div_sizes[low];
        let i=low+1;
        let j=high;
        let temp;
        let count=0

        div_update(divs[low],div_sizes[low],"#42a5f5");

        while(count!=1){
        
            while(key>=div_sizes[i] && i<high){
                div_update(divs[i],div_sizes[i],"#ffd54f");
                div_update(divs[i],div_sizes[i],"whitesmoke");
                i=i+1;
            }
            div_update(divs[i],div_sizes[i],"#ef5350");

            while(key<div_sizes[j]){
                div_update(divs[j],div_sizes[j],"#ffd54f");
                div_update(divs[j],div_sizes[j],"whitesmoke");
                j=j-1;
            }
            div_update(divs[j],div_sizes[j],"#ef5350");

            if(i<j){

                div_update(divs[i],div_sizes[i],"#f06292");
                div_update(divs[j],div_sizes[j],"#f06292");

                temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"whitesmoke");
                div_update(divs[j],div_sizes[j],"whitesmoke");
            }
            else{
                
                div_update(divs[low],div_sizes[low],"#f06292");
                div_update(divs[j],div_sizes[j],"#f06292");

                temp=div_sizes[low];
                div_sizes[low]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[j],div_sizes[j],"#66bb6a");
                div_update(divs[low],div_sizes[low],"whitesmoke");
                
                count=1;
                return j;
            }    
        }  
        
}
     

function quick_sort (low,high)
{
    if(low < high)
    {
        //stores the position of pivot element
        let j = quick_partition (low, high) ; 

        quick_sort (low, j-1);//sorts the left side of pivot.
        div_update(divs[low],div_sizes[low],"#66bb6a");

        quick_sort (j+1,high) ;//sorts the right side of pivot.
        div_update(divs[high],div_sizes[high],"#66bb6a");
        
       
        
    
    }
 }
function Merge(){
    c_delay=0;

    merge_partition(0,arr_size-1);

    enable_button();

}
function merge_sort(low,mid,high){
    let temp=[];
    let i=low;
    let j=mid+1;
    let k=low;

    while((i<=mid)&&(j<=high)){
        if(div_sizes[i]<=div_sizes[j]){
            div_update(divs[i],div_sizes[i],"#ffd54f");
            temp[k++]=div_sizes[i++];
        }
        else{
            div_update(divs[j],div_sizes[j],"#f06292");
            temp[k++]=div_sizes[j++];
        }
        
    }
    if(j>high){  
        while(i<=mid){
            div_update(divs[i],div_sizes[i],"#ffd54f");
            temp[k++]=div_sizes[i++];  
     
        }
    }else{
        while(j<=high){
            div_update(divs[j],div_sizes[j],"#f06292");
            temp[k++]=div_sizes[j++];
        }
    }
    for(let t=low;t<=high;t++){
        div_sizes[t]=temp[t];
        div_update(divs[t],div_sizes[t],"#66bb6a");
    }
}
function merge_partition(low,high)
{
    if(low < high)
    {
        let mid=Math.floor((low + high) / 2);
        div_update(divs[mid],div_sizes[mid],"#42a5f5");
        div_update(divs[mid],div_sizes[mid],"whitesmoke");

        merge_partition(low,mid);
        merge_partition(mid+1,high);
        merge_sort(low,mid,high);
    }
}
function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<arr_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#42a5f5");    
        min=div_sizes[i];
        loc=i;
        div_update(divs[i],div_sizes[i],"#ffd54f"); 
        for(var j=i+1;j<arr_size;j++)
        {           
            div_update(divs[j],div_sizes[j],"#ffd54f");
           
            if(div_sizes[j]<min)
            {
                div_update(divs[loc],div_sizes[loc],"whitesmoke");
                min=div_sizes[j];
                loc=j;
                div_update(divs[loc],div_sizes[loc],"#42a5f5");
                div_update(divs[loc],div_sizes[loc],"#ffd54f");//Color update
                
            }
            else
            {
                div_update(divs[j],div_sizes[j],"whitesmoke");//Color update
            }
        
        }
        if(loc!=i){
            let temp=div_sizes[loc];
            div_sizes[loc]=div_sizes[i];
            div_sizes[i]=temp;
            

            div_update(divs[loc],div_sizes[loc],"#f06292");//Height update
            div_update(divs[i],div_sizes[i],"#f06292");//Height update
            div_update(divs[loc],div_sizes[loc],"whitesmoke");//Color update
        }

        div_update(divs[i],div_sizes[i],"#66bb6a");//Color update
    }
    div_update(divs[i],div_sizes[i],"#66bb6a");//Color update

    enable_button();

}
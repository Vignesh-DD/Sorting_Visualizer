function Insertion()
{
    c_delay=0;
    let i;

    for(i=1;i<arr_size;i++)
    {
        div_update(divs[i],div_sizes[i],"#42a5f5");
            
        let temp= div_sizes[i];
        let j=i-1;
        while(div_sizes[j]>temp && j>=0)
        {
            div_update(divs[j],div_sizes[j],"#ffd54f");
            div_update(divs[j+1],div_sizes[j+1],"#ffd54f");

            div_sizes[j+1]=div_sizes[j];

            div_update(divs[j],div_sizes[j],"#f06292");
            div_update(divs[j+1],div_sizes[j+1],"#f06292");   
                              
            j=j-1;

        }

        div_sizes[j+1]=temp;
        div_update(divs[j+1],div_sizes[j+1],"#ef5350"); 
         
        for(let t=0;t<=i;t++)
            {
                div_update(divs[t],div_sizes[t],"#66bb6a");//Color update
            }
        }
        div_update(divs[i-1],div_sizes[i-1],"#66bb6a");//Color update

        enable_button();
}   
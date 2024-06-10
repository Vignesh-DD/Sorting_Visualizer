function Bubble()
{
       c_delay=0;
        for(var i=0;i<arr_size-1;i++)
        {
            for(var j=0;j<arr_size-i-1;j++)
            {
                div_update(divs[j],div_sizes[j], "#ffd54f");
                div_update(divs[j+1],div_sizes[j+1], "#ffd54f");

                if(div_sizes[j]>div_sizes[j+1])
                {
                    let temp=div_sizes[j];
                    div_sizes[j]=div_sizes[j+1];
                    div_sizes[j+1]=temp;

                    div_update(divs[j],div_sizes[j], "#f06292");
                    div_update(divs[j+1],div_sizes[j+1], "#f06292");
                }
                div_update(divs[j],div_sizes[j], "whitesmoke");
            }
            div_update(divs[j],div_sizes[j], "#66bb6a");
        }
        div_update(divs[0],div_sizes[0], "#66bb6a");

        enable_button();
        
        
}
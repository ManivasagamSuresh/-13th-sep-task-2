async function fun(){
    let res =await fetch("https://x-colors.herokuapp.com/api/random");
    let res1= await res.json();
    console.log(res1);
    return res1;
    }
    
    async function main(){
       try{ 
        let value =await fun();
        let final =(value.hex)
        console.log(final);
        
    
     let div = document.createElement("div");
    div.setAttribute("class","main");
    div.innerHTML=`<div class="card border-secondary mb-3" style="max-width: 18rem;">
    <h5  style="color:${final}">Hy There !!! I'll change my color when you refresh</h5>

    
    </div>
    </div>`;
    

    document.body.append(div);}
    
    catch(error) {
    console.log(error);
    }
    }
    main()
    
    
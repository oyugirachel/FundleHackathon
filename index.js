// Created by Rachel Oyugi

const Data = [  
    
    // Data items to be searched by user
    
    {
        saving : "Uber",
        bank :"NCBA",
        moneytransfered : 23000
        
    },
    
    {
        saving : "Bolt",
        bank :"equity ",
        moneytransfered  : 100
    },
    
    {
        saving : "Taxify",
        bank :"kcb",
        moneytransfered : 500
    }


];
// Show user a  message
 
const Greet = ()=> alert("If you want to know your weekly usage kindly search for your bank name , or your taxi name.\n\nAnd Have a Nice day !!!");
 
 
// Description of a search item (this is called when search item is clicked)
 
function show(j)
{
   this.event.target.setAttribute("class","card-title visited");
  
   alert(`
       saving : `+Data[j].saving+`\n
       moneytransfered : `+Data[j].moneytransfered+`\n
       bank : `+Data[j].bank
   );
}
 
// The function that performs the search
 
function Search()
{
  
   const Start = performance.now();  // The time at which search started
  
   const SearchField= document.getElementById("search");  // Search Field
   
   const ResultDiv = document.getElementById("result"); // div to show results
  
   const CountDiv =  document.getElementById("count");  // div to show number of results and time taken in searching
   
   let Results = 0; // Number of Results
   
   const Value = SearchField.value.toString().toLowerCase(); // Value of Search Field
   
   ResultDiv.innerHTML  = "";  // Emptying the Result Div to prevent overlapping of previous and current search results
   for(j = 0; j < Data.length; j++)
   {
      
       const row = Data[j]; // j th element form Data array
      
       const saving = row.saving.toString().toLowerCase(); // Name
           
       const moneytransfered = row.moneytransfered.toString().toLowerCase(); // Age
      
       const bank = row.bank.toString().toLowerCase(); // Profession
       
       
       if(saving.indexOf(Value) !== -1 || bank.indexOf(Value) !== -1 || moneytransfered.indexOf(Value) !== -1)
       {
      
           Results++; // Incrementing the Results
          
           // Appending the Matched item in the Result Div
          
           ResultDiv.innerHTML +=`
               
               <div class="card boxed">
                   <div class="card-content">
                       <div class="card-title" onclick=show(`+j+`) >`+row.saving+`</div>
                       <div class="content">`+row.moneytransfered+` moneytransfered<br/> `+ row.bank+`</div>
                   </div>
               </div>`;
          
          
       }  
 
 
   }
    if(Results) // Checking that entered value matched any data or not
    {
        document.querySelector('.number').style.display= "block"; // Showing the div which shows the number of results
       
        window.location.href = "#result"; //Navigating to Result div
    }
   
    else // If no Items matched the entered value
    {
       document.querySelector('.number').style.display= "none";  //Hiding the div which shows the number of results
      
       ResultDiv.innerHTML = "<div id='not-found'><i>Nothing Found</i></div>"; // Display 'Nothing Found'
    }
   
   
   const End = performance.now(); // The time at which search ended
  
   // showing the total time taken for searching the enterd value
   
   CountDiv.innerHTML = Results + " results in " +( (End - Start) / 1000 ).toString().slice(0,5)+" s" ;
 
}
 
document.addEventListener("DOMContentLoaded",()=>{
 
   document.getElementById("search-btn").addEventListener("click",Search); // Binding Search function to click event on Search btn
  
      Greet(); // Showing Message after 2 seconds
  
});
 
 
 
 
 




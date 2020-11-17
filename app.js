var url="https://api.github.com/repos/";
var owner=document.querySelector('.owner');
var repo=document.querySelector('.repo');
var submit=document.querySelector('.submit');
submit.addEventListener("click",setQuery);
var pr_count=0;
function setQuery(evt) {
    
      getResults(owner.value,repo.value);
  }
function getResults (q1,q2) {
   
    fetch(`${url}${q1}/${q2}/pulls`)
    .then(pulls =>{
        return pulls.json();
    }).then(geResults);
    fetch(`${url}${q1}/${q2}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
  }
  function geResults(pulls){
    let open=document.querySelector('.openpr-counter');
    
    for(x in pulls){
        if(pulls[x].title!="") {pr_count++;}
    }
    let count=0;
    setInterval(()=>{
        if(count<pr_count){
            count++;
            open.innerText=count;
        }
    },10);
     
   
  }
  function displayResults (weather) {
      let issues=document.querySelector('.issue-counter');
     
        var temp=`${weather.open_issues}`-`${pr_count}`;
    
      console.log(temp);
      let count=1;
      setInterval(()=>{
          if(count<temp){
              count++;
              issues.innerText=count;
          }
      },10);
      let forks=document.querySelector('.fork-counter');
       let tem=`${weather.forks}`;
       let coun=1;
      setInterval(()=>{
          if(coun<tem){
              coun++;
              forks.innerText=coun;
          }
      },10);
      
      
      
      
  }
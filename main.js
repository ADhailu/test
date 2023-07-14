
window.onload= async ()=>{
    covidUrl = 'https://api.covidtracking.com/v2/states.json';
    stateUrl = 'https://api.covidtracking.com/v2/states.json';
    const CovidResponse = await fetch(covidUrl);
    const stateResponse = await fetch(stateUrl)
    
    const  showData = {
         CovidCases : await CovidResponse.json(),
         stateNames : await stateResponse.json()
         
    }
    console.log(showData.stateNames.data[0])
    function getData(s){
        return showData;
    }
    const displayData = getData("CA");
    console.log(displayData)

// console.log(stateStatus.data[0])
// for (let i = 0; i < stateStatus.data.length; i++) {
//     console.log(stateStatus.data[i].name)
    
// }


}

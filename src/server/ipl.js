let matches = require('../public/matches.json');
let deliveries = require('../public/deliveries.json');

//Number of matches played per year for all the years in IPL.

function matchesPlayedPerYear(matches){
    let obj = {}
    matches.map(x => {
        if(obj[x.season]){
            obj[x.season]++
        }else{
            obj[x.season] = 1
        }
    })
    return obj
}
let years = matchesPlayedPerYear(matches);
//console.log(years)

//Number of matches won per team per year in IPL.

function matchesWonPerTeamPerYear(matches){
    let obj = {};
    for(let i = 0; i < matches.length; i++){
        if(!obj[matches[i].winner]){
            obj[matches[i].winner] = {}
        }
   
        if(!obj[matches[i].winner][matches[i].season]){
            obj[matches[i].winner][matches[i].season] = 1
        }else{
            obj[matches[i].winner][matches[i].season]++
        }
    }
    return obj
}
let won = matchesWonPerTeamPerYear(matches);
// console.log(won)


function matchesWonPerTeamPerYear1(matches){
    let obj = {};
    for(let i = 0; i < matches.length; i++){
        if(!obj[matches[i].season]){
            obj[matches[i].season] = {}
        }
   
        if(!obj[matches[i].season][matches[i].winner]){
            obj[matches[i].season][matches[i].winner] = 1
        }else{
            obj[matches[i].season][matches[i].winner]++
        }
    }
    return obj
}
let won1 = matchesWonPerTeamPerYear1(matches);
//console.log(won1)

//3. Extra runs conceded per team in the year 2016

function runsConcededPerTeamInTheYear2016(matches,deliveries){
    let array = []
    for(let element of matches){
        if(element.season == 2016){
           let i = element.id
           array.push(i)
        }
    }
    let obj = {}
    for(let element of deliveries){
        if(array.includes(element.match_id)){
            if(obj[element["bowling_team"]]){
               obj[element["bowling_team"]] += element.extra_runs*1
            }else{
                obj[element["bowling_team"]] = element.extra_runs*1
            }
         }
    }
    return obj
}
let extraRuns = runsConcededPerTeamInTheYear2016(matches,deliveries);
console.log(extraRuns)

//4. Top 10 economical bowlers in the year 2015

function top10EconomicalBowlersInTheYear2015(matches,deliveries){
    let array = []
    for(let element of matches){
        if(element.season == 2015){
           let i = element.id
           array.push(i)
        }
    }
    let obj = {}
    for(let element of deliveries){
        if(array.includes(element.match_id)){
           let bowler = element.bowler
           if(!obj[bowler]){
               obj[bowler] = {}
           }
           obj[bowler]["runs"] = obj[bowler]["runs"]+element.total_runs*1 || element.total_runs*1 
           obj[bowler]["balls"] = obj[bowler]["balls"]+1||1;
           obj[bowler]["economy"] = obj[bowler]["runs"]/((obj[bowler]["balls"])/6)
         }
    }
    console.log(obj)
    let out = []
    for(let key in obj){
        out.push([obj[key]["economy"],key])
    }
    console.log(out)
    out.sort((a,b) => a[0]-b[0])
    let top = out.slice(0,10)
    obj1 = []
    top.forEach(x => {
        obj1.push({playerName:x[1],economy:Math.round(x[0])})
    })

return obj1
}
let bowler = top10EconomicalBowlersInTheYear2015(matches,deliveries)
console.log(bowler)
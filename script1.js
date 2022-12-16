
function goBack() {
    location.replace('/index.html');
  }

document.getElementById('goBack').addEventListener('click', goBack);

/*
//read the local array and show it, (Not done)
let events = localStorage.getItem('events')
console.log(events);
*/
		

fetch("sportData.json")
        .then(response => response.json())
        .then(datas => {
			for (var i = 0; i< (datas.data.length); i++){
                //console.log(datas.data.length);
                let season = datas.data[i].season;
                let status = datas.data[i].status;
                let timeVenueUTC = datas.data[i].timeVenueUTC;
				let dateVenue = datas.data[i].dateVenue;
                let stadium = datas.data[i].stadium;
                if (stadium === null || stadium == []){
                    stadium = ""
                    //document.write("empty");
                }
                
                let homeTeamN = datas.data[i].homeTeam.name;
                //console.log(datas.data[i].homeTeam.name);
                if (homeTeamN === null || homeTeamN === []){
                    homeTeamN = ""
                    //document.write("empty");
                }


                let homeTeamOF = datas.data[i].homeTeam.officialName;
                let homeTeamS = datas.data[i].homeTeam.slug;
                let homeTeamA = datas.data[i].homeTeam.abbreviation;
                let homeTeamTCC = datas.data[i].homeTeam.teamCountryCode;
                let homeTeamSP = datas.data[i].homeTeam.stagePosition;
                if (homeTeamSP === null || homeTeamSP === []){
                    homeTeamSP = ""
                }
                
                let resultHG = datas.data[i].result.homeGoals;
                let resultAG = datas.data[i].result.awayGoals;
                let resultW = datas.data[i].result.winner;
                if (resultW === null || resultW === []){
                    resultW = ""
                }
                let resultWI = datas.data[i].result.winnerId;
                if (resultWI === null || resultWI === [] || resultWI === undefined){
                    resultWI = ""
                }
                let resultM = datas.data[i].result.message;
                if (resultM === null || resultM === [] || resultM === undefined){
                    resultM = ""
                }
                let resultG = datas.data[i].result.goals;
                if (resultG === null || resultG === [] || resultG === undefined || resultG === "" || resultG.length < 1){
                    resultG = ""
                }
                let resultY = datas.data[i].result.yellowCards;
                if (resultY === null || resultY === [] || resultY === undefined || resultY.length < 1){
                    resultY = ""
                }
                let resultSY = datas.data[i].result.secondYellowCards;
                if (resultSY === null || resultSY === [] || resultSY === undefined || resultSY.length < 1){
                    resultSY = ""
                }
                let resultDR = datas.data[i].result.directRedCards;
                if (resultDR === null || resultDR === [] || resultDR === undefined || resultDR.length < 1){
                    resultDR = ""
                }
                let stageId = datas.data[i].stage.id;
                let stageN = datas.data[i].stage.name;
                let stageOr = datas.data[i].stage.ordering;
                let group = datas.data[i].group;
                if (group === null || group.length < 1){
                    group = ""
                }
                let originCompetitionId = datas.data[i].originCompetitionId;
                let originCompetitionName = datas.data[i].originCompetitionName;



				document.querySelector("#tb1").innerHTML += `
                <tr>
            	    <td>${season}</td>
                    <td>${status}</td>
                    <td>${timeVenueUTC}</td>
					<td>${dateVenue}</td>
                    <td>${stadium}</td>
                    <td>${homeTeamN}</td>
                    <td>${homeTeamOF}</td>
                    <td>${homeTeamS}</td>
                    <td>${homeTeamA}</td>
                    <td>${homeTeamTCC}</td>
                    <td>${homeTeamSP}</td>
                    <td>${resultHG}</td>
                    <td>${resultAG}</td>
                    <td>${resultW}</td>
                    <td>${resultWI}</td>
                    <td>${resultM}</td>
                    <td>${resultG}</td>
                    <td>${resultY}</td>
                    <td>${resultSY}</td>
                    <td>${resultDR}</td>
                    <td>${stageId}</td>
                    <td>${stageN}</td>
                    <td>${stageOr}</td>
                    <td>${group}</td>
                    <td>${originCompetitionId}</td>
                    <td>${originCompetitionName}</td>
                </tr>`;
            }
    })

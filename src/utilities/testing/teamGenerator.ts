import teamNameList from "../../assets/teamNamesList.json";
import { PlayerObject } from "../../interfaces/Player";
import { Team } from "../../interfaces/Team";
import playerGenerator from "./playerGenerator";
import playerGenerator2 from "./playerGenerator2";

export default function TeamGenerator() {
    const teamData: Team[] = [];
    const playerList = playerGenerator();
    const playerList2 = playerGenerator2();

    const teamList = [{ name: "PHI", conference: "EAST" }, { name: "NYK", conference: "EAST" }];

    teamList.forEach(team => {
        const newTeam: Team = {
            id: teamData.length,
            name: team.name,
            conference: "EAST",
            rosters: { 2022: team.name === "PHI" ? playerList : playerList2 },
            salaryBook: { 2022: calculateSalary(Object.values(playerList)) },
            staff: { 2022: [] },
            owner: {
                id: teamData.length,
                name: "John Hancock",
                ambition: "HIGH",
                frugal: "LOW",
                approval: 98,
                tolerance: "MED"
            },
            overall: 0,
            defOverall: 0,
            offOverall: 0,
            wins: 0,
            losses: 0,
            franchiseHistory: { 2022: {
                record: "53-18",
                outcome: "Champions",
                rank: 1
            } },
            playoffStatus: "Lottery Team"
        };
        teamData.push(newTeam);
    });
    // console.log(teamData);
    return teamData;
}

function calculateSalary(playerList: PlayerObject[]) {
    return playerList.reduce((acc, curr) => acc + curr.salary[2022], 0);
}

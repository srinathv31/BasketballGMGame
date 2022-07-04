import teamNameList from "../../assets/teamNamesList.json";
import { PlayerObject } from "../../interfaces/Player";
import { Team } from "../../interfaces/Team";
import playerGenerator from "./playerGenerator";

export default function TeamGenerator() {
    const teamData: Team[] = [];
    const playerList: PlayerObject[] = [];

    const teamList = [{ name: "PHI", conference: "EAST" }, { name: "NYK", conference: "EAST" }];
    for (let i=0;i<5;i++){
        playerList.push(playerGenerator());
    }

    teamList.forEach(team => {
        const newTeam: Team = {
            id: teamData.length,
            name: team.name,
            conference: "EAST",
            roster: { 2022: playerList },
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

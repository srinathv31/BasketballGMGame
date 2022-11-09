import React from "react";
import { Stats } from "../../components/GamePage/BoxScore";

export function sortBoxScore(label: string, setStatSort: React.Dispatch<React.SetStateAction<Stats>>) {
    if (label === "3P-A") {
        setStatSort("3PM");
        return;
    }
    if (label === "FG-A") {
        setStatSort("FGM");
        return;
    }
    setStatSort(label as Stats);
}

export function isStatSelected(label: string, statSort: Stats) {
    if (statSort === "3PM" && label === "3P-A") {
        return true;
    }
    if (statSort === "FGM" && label === "FG-A") {
        return true;
    }
    if (statSort === label) {
        return true;
    }
    return false;
}

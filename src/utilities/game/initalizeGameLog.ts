import { GameAction } from "../../interfaces/Game";

export default function initializeGameLog() {
    const initialGameLog: Record<number, GameAction[]> = {
        1: [
            { "action": "Quarter 1" },
            { "action": "-" }
        ],
        2: [
            { "action": "Quarter 2" }
        ],
        3: [
            { "action": "Quarter 3" }
        ],
        4: [
            { "action": "Quarter 4" }
        ],
        5: [
            { "action": "Overtime" }
        ]
    };
    return initialGameLog;
}

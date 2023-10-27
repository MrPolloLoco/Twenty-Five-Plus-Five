export interface DisplayState {
    time: number,
    timeType: "Session" | "Break",
    timerRunning: boolean // If its running or not.
}

// This following function serves to render the time format in a way we are familiar with (25:00)!!
export const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes.toString() : minutes} : ${
        seconds < 10 ? "0" + seconds.toString() : seconds
    }`;
};
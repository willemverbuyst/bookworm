import { NODE_ENV } from "../config/environment";

export function logInfo(startTime: number, text: string) {
  if (NODE_ENV === "development" && startTime) {
    const resultEndTime = Math.round(Date.now() - startTime);

    const pad = (str: number | string, num: number) => {
      let newString = String(str);
      while (newString.length < num) {
        newString = ` ${newString}`;
      }
      return newString;
    };

    let color = "red";
    if (resultEndTime < 200) color = "orange";
    if (resultEndTime < 100) color = "green";

    console.info(
      `%c⏱ ${pad(resultEndTime, 5)} ms`,
      ` font-size: 0.8rem;
        font-weight: bold;
        color: ${color}`,
      text
    );
  }
}

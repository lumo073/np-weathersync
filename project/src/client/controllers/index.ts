import { InitTime } from "./time";
import { InitWeather } from "./weather";
// PENCECI
export async function Init(): Promise<void> {
    await InitWeather();
    await InitTime();
}
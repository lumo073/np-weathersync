import { InitEvents } from "./events";
import { InitTime } from "./time";
import { InitWeather } from "./weather";

export async function Init(): Promise<void> {
    await InitWeather();
    await InitTime();
    await InitEvents();
}

// PENCECI
// TODO: Export all HybridObjects here for the user
import { NitroModules } from "react-native-nitro-modules";
import type { CrossPlatformMath } from "./specs/Math.nitro";

export const HybridCrossPlatformMath = NitroModules.createHybridObject<CrossPlatformMath>('CrossPlatformMath');
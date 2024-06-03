import { OpenCloseCurtainsCommand } from "./commands/open-close-curtains-command";
import { SwitchLightsCommand } from "./commands/switch-lights-command";
import { FloorLamp } from "./components/floor-lamp";
import { Room } from "./components/room";

const room: Room = new Room();
room.setCommand(new OpenCloseCurtainsCommand(room.getCurtains()));
room.executeCommand();
console.log(room.curtainsOpen());

console.log("\n==========================================\n");

const lamp: FloorLamp = new FloorLamp();
lamp.setCommand(new SwitchLightsCommand(lamp.getLight()));
lamp.executeCommand();
console.log(lamp.isLightOn());

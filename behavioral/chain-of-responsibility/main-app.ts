import { AuthService } from "./auth-service";
import { Database } from "./database";
import type { Handler } from "./handlers/handler";
import { RoleCheckHandler } from "./handlers/role-check-handler";
import { UserExistsHandler } from "./handlers/user-exists-handler";
import { ValidPasswordHandler } from "./handlers/valid-password-handler";

const database: Database = new Database();
const handler: Handler = new UserExistsHandler(database);
handler
	.setNextHandler(new ValidPasswordHandler(database))
	.setNextHandler(new RoleCheckHandler());

const service: AuthService = new AuthService(handler);

console.log("\n==========================================\n");

console.log(service.logIn("username", "password"));

console.log("\n==========================================\n");

console.log(service.logIn("user_username", "password"));

console.log("\n==========================================\n");

console.log(service.logIn("admin_username", "admin_password"));

console.log("\n==========================================\n");

console.log(service.logIn("user_username", "user_password"));

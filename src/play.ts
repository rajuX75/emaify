import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "raju",
    lastName: "Hosen",
  },
});
console.log("done");

import loki from "lokijs";

var db = new loki("Example");

var users = db.addCollection("users", { indices: ["email"] });

users.insert({
  firstname: "vishnu",
  lastname: "sasi",
  password: "123",
  email: "vishnu@gmail.com",
});

export { users, db };

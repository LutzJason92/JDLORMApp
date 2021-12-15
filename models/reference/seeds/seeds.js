const sequelize = require("../../config/connection");

const Emps = require("../../models/Emps");
const Dep = require("../../models/Dep");
const Role = require("../../models/Role");

const empSeedData = require("./empSeedData.json");
const depSeedData = require("./depSeedData.json");
const roleSeedData = require("./roleSeedData.json");

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Emps.bulkCreate(empSeedData).then(() => {
      Dep.bulkCreate(depSeedData).then(() => {
        Role.bulkCreate(roleSeedData).then(() => {
          console.log("All Seeds Planted");
        });
      });
    });
  });

  process.exit(0);
};

seedDatabase();

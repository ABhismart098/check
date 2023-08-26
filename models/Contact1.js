const Sequelize = require("../Config/dbConnections");

const { DataTypes } = require("sequelize");


 

const Contact = Sequelize.define(

  "user",

  {

    firstName: {

      type: DataTypes.STRING,
      defaultValue: "abhi"

      

    },

    lastName: {

      type: DataTypes.STRING,
      defaultValue: "y"

    },

    Phone: {

      type: DataTypes.STRING,
      defaultValue: "12345"

    },
    Email:{
        type: DataTypes.STRING,
        defaultValue: "abc@gmail.com"
    },
    Describe:{
        type: DataTypes.STRING,
        defaultValue: "hello"

    },
    Message:{
        type: DataTypes.STRING,
        defaultValue: "o"
        

    }

  },

  {

    updatedAt: true,

    createdAt: true,

    timestamps: true,

  }

);


 

Contact.getAllConnection = async () => {

  try {

    let usersData = await Contact.findAll({});

    return usersData;

  } catch (error) {

    console.log(error);

    throw new Error("Unable to get all users");

  }

};

 

Contact.createConnection = async (userData) => {

  try {

    let userCreated = await Contact.create(userData);

    return userCreated;

  } catch (error) {

    console.log(error);

    throw new Error("Unable to Save User");

  }

};

(async () => {
    try {
      // Sync all models to the database
      await Sequelize.sync();
  
      console.log("Database synchronized");
    } catch (error) {
      console.error("Error synchronizing database:", error);
    }
  })();
 
Contact.sync();


 

module.exports = Contact;
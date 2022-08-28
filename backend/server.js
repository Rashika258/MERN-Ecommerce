const app=require("./app");
const connectDatabase=require("./config/database");


// Handling the server due to uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error - ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
});


// config
if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path:"backend/config/config.env"
    });
}

// connecting to db
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


process.on("unhandledRejection", (err) => {
    console.log(`Error - ${err.message}`);
    console.log(`Shuttting down the server due to unhandled promise rejection`);

    server.close(()=> {
        process.exit(1);
    });
});
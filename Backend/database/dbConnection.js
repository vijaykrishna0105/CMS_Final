import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "CLAIMS_BRIDGE",
    }).then(() => {
        console.log("Connected to database Successfully for claims bridge!");
    }).catch((err) => {
        console.log(`Some error occured while connecting to database! ${err}`);
    });
};

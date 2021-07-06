import mongoose from 'mongoose';

//whenever you are using mongoose you are dealing with promises 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongo DB connected: ${conn.connection.host}`)
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;
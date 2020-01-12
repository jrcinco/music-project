const ENV = process.env
const MONGO_URI = `${ENV.DB_CONNECTION}://${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_DATABASE}`

mongoose.connect(MONGO_URI, { 
    useUnifiedTopology: true, useNewUrlParser: true 
}).then(() => {
    console.log("Successfully Connected To The Mongo")
    console.log("* Connected To The Mongoose ORM **")
}).catch(err => {
    console.error(err)
    process.exit()
});
import connectDB from "./db/db.js";
import app from './app.js'

const port = process.env.PORT || 3000

connectDB().then(() => {
    app.listen(port,(req,res) => {
        console.log(port);
    })
}).catch((err) => console.log(err)
)



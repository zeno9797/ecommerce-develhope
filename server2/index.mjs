import express from "express"
import cors from "cors"
import {logIn, signUp, logOut} from "./usersControllers.mjs"
import authorize from "./authorize.mjs";
import multer from "multer";
import "./passport.mjs"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})

const upload = multer({storage})

const app = express();
const port = 3000;
app.use(cors()); 

app.use(cors({
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'] 
}))

app.use("/uploads", express.static("uploads"))
app.use("/static", express.static("static"))

app.use(express.json());

app.post("/api/users/login", cors(), logIn)

app.post("/api/users/signup", signUp)

app.get("/api/users/logout", authorize, logOut)


app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
  });
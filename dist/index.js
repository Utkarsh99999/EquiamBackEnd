"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const userModal_1 = __importDefault(require("./userModal"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const port = process.env.PORT;
const DB_URI = "mongodb+srv://utkarsh:Utkarsh%40123@cluster0.3p9w8b1.mongodb.net/equiam";
mongoose_1.default.connect(DB_URI);
const db = mongoose_1.default.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open', () => {
    console.log('DataBase Connection Successful');
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/userdata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield userModal_1.default.find();
        if (userdata) {
            res.status(200).send(userdata);
        }
        else {
            res.status(404).send("Data not found");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.post('/post/comment/reply', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield userModal_1.default.find();
        if (userdata) {
            res.status(200).send(userdata);
        }
        else {
            res.status(404).send("Data not found");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.post('/post/replies/reply', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield userModal_1.default.find();
        if (userdata) {
            res.status(200).send(userdata);
        }
        else {
            res.status(404).send("Data not found");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
try {
    app.listen(port, () => {
        console.log(`Server started Port: ${port}`);
    });
}
catch (error) {
    console.log(`${error.message} did not connect`);
}

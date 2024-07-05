import express from 'express';
import submit_claim from "../controller/claim.js";

const router = express.Router();

router.post("/send", submit_claim);

export default router;

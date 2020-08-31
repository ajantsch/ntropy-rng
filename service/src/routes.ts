import DefaultRouter from "./routers";
import { getHashedServerSeed, getResult, verifyResult } from "./api";

const router = DefaultRouter();

router.get("/hashed-server-seed", getHashedServerSeed);
router.get("/result", getResult);
router.get("/verify", verifyResult);

export default router;

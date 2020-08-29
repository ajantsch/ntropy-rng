import DefaultRouter from "./routers";
import { getRandom } from "./api";

const router = DefaultRouter();

router.get("/", getRandom);

export default router;

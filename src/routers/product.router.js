import { Router } from "express";
import { createOne, deleteOne, getAll, getOne, updateOne } from "../controllers/product.controller";
import { validateRequest } from "../middlewares/validateRequest";
import schema from "../validations/product.validation";

const productRouter = Router();

productRouter.get("/", getAll);
productRouter.get("/:id", getOne);
productRouter.delete("/:id", deleteOne);



productRouter.post("/", validateRequest(schema), createOne);
productRouter.put("/:id", validateRequest(schema), updateOne);


export default productRouter;
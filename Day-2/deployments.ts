import dotenv from "dotenv";

dotenv.config();

export const USER_PRIVATE_KEY = process.env.PRIVATE_KEY!;
export const ETHERSCAN_API = process.env.ETHERSCAN_API_KEY || "";
export const RPC_URL = "https://api.avax-test.network/ext/bc/C/rpc";
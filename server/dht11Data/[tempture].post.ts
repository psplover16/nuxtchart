import dht11data from "@/database/dht11data";

export default defineEventHandler(async event => {
  const body = await readBody(event);  // 用來取得 request body
  return { dht11data };
});

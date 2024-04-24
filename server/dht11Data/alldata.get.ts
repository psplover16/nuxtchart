import dht11data from "@/database/dht11data";

export default defineEventHandler((event)=>{
    // const {id} = event.context.params || {};
    return {
        dht11data
    }
})
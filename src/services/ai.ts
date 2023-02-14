import router from "@/router";

import { Configuration, OpenAIApi } from "openai";
export default new Configuration({
  apiKey: process.env.VUE_APP_OPENAIKEY
});
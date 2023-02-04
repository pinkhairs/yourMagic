import { environment } from "@/environments/environment";
import router from "@/router";

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: environment.openAi,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});

console.log({response})
import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const userInput = req.body.userInput;
  console.log(`API: ${userInput}`);

  const largeInputContent = process.env.LARGE_INPUT_CONTENT;
  console.log("Large input text:", largeInputContent);
  
 
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature : 0.1 ,
      
      messages: 
      
      [
        { role: "system", content: largeInputContent},
        { role: "user", content:  userInput}
      ],
    });


    console.log("ChatGPT API raw response:", completion.data);

    const basePromptOutput = completion.data.choices[0].message.content;
    console.log("Extracted content:", basePromptOutput);

    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.error("Error calling ChatGPT API:", error);
    res.status(500).json({ error: "Error calling ChatGPT API" });
  }
};

export default generateAction;

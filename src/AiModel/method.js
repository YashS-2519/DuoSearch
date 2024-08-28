import model from "./model";

export const getAiRespnse = async (userInput) => {
    const prompt = userInput;

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    // console.log(response);
    return response;
}
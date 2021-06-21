import { TextPrompt } from "./prompts/text";
import { Questions, Types } from "./types";


export default class Inquirer {

    private readonly prompts = {
        [Types.Text]: TextPrompt
    }

    constructor() {

    }

    prompt<T extends string = string>(questions: Questions<T>) {
        console.log(questions);

        Object.values(this.prompts)
            .map(p => {

            })
    }
}
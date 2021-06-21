import Inquirer from "./inquirer";
import { Types } from "./types";

console.log(

    (new Inquirer())
        .prompt<"name" | "age">([
            {
                type: Types.Text,
                name: "name",
            },
            {
                type: Types.Text,
                name: "age",
            }
        ])
);

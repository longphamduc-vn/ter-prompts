
export enum Types {
    Text,
    Number,
    List,

}

export type Question<T extends string, Type> = {
    name: T,
    type: Type,
}

export type TextQuestion<T extends string> = Question<T, Types.Text>
    & {
    }

export type NumberQuestion<T extends string> = Question<T, Types.Number>
    & {
    }

export type ListQuestion<T extends string> = Question<T, Types.List>
    & {
    }

export type Questions<T extends string> = TextQuestion<T>
    | Questions<T>[];

export type Answers = {
    [name: string]: string
    | number
    | Answers[]
}
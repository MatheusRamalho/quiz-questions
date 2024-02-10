import { ReactNode } from 'react'

interface QuizQuestionProps {
    question: string
    children?: ReactNode
}

export const QuizQuestion = ({ question, children }: QuizQuestionProps) => {
    return (
        <>
            <div className="w-full my-5 mt-12 text-left text-lg text-gray-200">
                <h2 className="text-white font-bold mb-2"> Questão </h2>
                <p> {question} </p>
            </div>

            <div className="options-wrapper">{children}</div>
        </>
    )
}

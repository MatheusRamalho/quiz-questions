import { ReactNode } from 'react'

interface QuizContentProps {
    children: ReactNode
}

export const QuizContent = ({ children }: QuizContentProps) => {
    return (
        <div className="w-full" id="question-wrapper">
            {children}
        </div>
    )
}

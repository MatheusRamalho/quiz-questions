import { ReactNode } from 'react'

interface QuizRootProps {
    children: ReactNode
}

export const QuizRoot = ({ children }: QuizRootProps) => {
    return <div className="w-full max-w-[31.25rem]">{children}</div>
}

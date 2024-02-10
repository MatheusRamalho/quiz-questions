import Image from 'next/image'

import prizeImg from '@/assets/svgs/react.svg'

interface QuizScoreProps {
    pointsMessage: string
    pointsPercentage: number
    totalQuestions: number
    correctAnswers: number
    colorResult: string
    onClick: () => void
    defaultShow: boolean
}

export const QuizScore = ({
    pointsMessage,
    pointsPercentage,
    totalQuestions,
    correctAnswers,
    colorResult,
    onClick,
    defaultShow = false,
}: QuizScoreProps) => {
    return (
        <div
            className={`my-8 p-8 rounded-2xl bg-gray-700 shadow hidden items-center justify-center flex-col gap-8 ${
                defaultShow ? '!flex' : null
            }`}
            id="score"
        >
            <Image
                className="w-auto h-[6.25rem]"
                src={prizeImg}
                alt="Troféu de finalização do quiz"
            />

            <div className="text-center">
                <p className="text-2xl font-medium text-gray-200 leading-loose">
                    {' '}
                    {pointsMessage}{' '}
                </p>

                <p
                    className="text-3xl font-medium text-gray-200 leading-loose"
                    style={{
                        color: `${colorResult}`,
                    }}
                >
                    Acertou {pointsPercentage}
                </p>

                <p className="text-xl font-medium text-gray-200 leading-loose">
                    Você respondeu {totalQuestions} questões e acertou{' '}
                    {correctAnswers}.
                </p>
            </div>

            <button
                type="button"
                onClick={onClick}
                className="cursor-pointer w-full h-14 border-none rounded-lg bg-green-500 text-center uppercase text-lg font-bold text-white hover:bg-green-700"
            >
                Tentar novamente
            </button>
        </div>
    )
}

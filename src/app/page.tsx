'use client'

import { useEffect, useState } from 'react'

import { Question } from '@/types/Question'

import { QUESTION_DATA } from '@/store/questions'

import { ProgressBar } from '@/components/ProgressBar'
import { Quiz } from '@/components/Quiz'

export default function Home() {
    const [questionsList] = useState<Question[]>(QUESTION_DATA)
    const [currentQuestion, setCurrentQuestion] = useState<Question>()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [correctAnswers, setCorrectAnswers] = useState<number>(0)
    const [percentageProgressBar, setPercentageProgressBar] =
        useState<number>(0)

    const [scorePoints, setScorePoints] = useState<number>(0)
    const [scoreMessage, setScoreMessage] = useState<string>('')
    const [scoreColor, setScoreColor] = useState<string>('')
    const [isScoreShow, setIsScoreShow] = useState<boolean>(false)

    useEffect(() => {
        showQuestion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestionIndex])

    const handleResetQuiz = () => {
        setIsScoreShow(false)
        setCurrentQuestionIndex(0)
        setCorrectAnswers(0)

        window.location.reload()
    }

    const showQuestion = () => {
        if (questionsList[currentQuestionIndex]) {
            const ques = questionsList[currentQuestionIndex]
            const barPercentage = Math.floor(
                (currentQuestionIndex / questionsList.length) * 100,
            )

            setCurrentQuestion(ques)
            setPercentageProgressBar(barPercentage)
        } else {
            finishQuiz()
        }
    }

    const finishQuiz = () => {
        const points = Math.floor((correctAnswers / questionsList.length) * 100)

        setScorePoints(points)

        if (points < 30) {
            setScoreMessage('Tá ruim! Estude mais')
            setScoreColor('#E87176')
        } else if (points >= 30 && points < 70) {
            setScoreMessage('Você foi bem! Mas da pra melhorar')
            setScoreColor('#FFCE73')
        } else if (points >= 70) {
            setScoreMessage('Parabéns!')
            setScoreColor('#7FBA7A')
        }

        setIsScoreShow(true)

        const quest = document.querySelector(
            '#question-wrapper',
        ) as HTMLAudioElement
        const bar = document.querySelector('#progress-bar') as HTMLDivElement

        quest.style.display = 'none'
        bar.style.width = '100%'
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAnswer = (event: any) => {
        const item = Number(event.target.getAttribute('data-option'))

        if (questionsList[currentQuestionIndex].rightAnswer === item) {
            setCorrectAnswers(correctAnswers + 1)
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1)
        showQuestion()
    }

    return (
        <>
            <ProgressBar progressPercentage={percentageProgressBar} />

            <h1 className="text-white text-4xl font-bold mb-4">
                {' '}
                Quiz: JavaScript{' '}
            </h1>
            <h6 className="text-gray-200 text-lg leading-10 text-center max-w-[800px]">
                Quanto você sabe sobre JS? Teste seus conhecimentos de
                programação e descubra qual o seu nível de conhecimento nessa
                tecnologia nesse quiz gratuito 🚀
            </h6>

            <Quiz.Root>
                <Quiz.Content>
                    {currentQuestion && (
                        <Quiz.Question question={currentQuestion.question}>
                            {currentQuestion.options.map((element, index) => {
                                return (
                                    <Quiz.Options
                                        key={index}
                                        data={index}
                                        index={index + 1}
                                        text={element}
                                        onClick={(event) => handleAnswer(event)}
                                    />
                                )
                            })}
                        </Quiz.Question>
                    )}
                </Quiz.Content>

                <Quiz.Score
                    defaultShow={isScoreShow}
                    pointsMessage={scoreMessage}
                    pointsPercentage={scorePoints}
                    totalQuestions={questionsList.length}
                    correctAnswers={correctAnswers}
                    colorResult={scoreColor}
                    onClick={handleResetQuiz}
                />
            </Quiz.Root>
        </>
    )
}

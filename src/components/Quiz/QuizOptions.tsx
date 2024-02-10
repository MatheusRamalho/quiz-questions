interface QuizOptionsProps {
    data: number
    index: number
    text: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (event: any) => void
}

export const QuizOptions = ({
    data,
    index,
    text,
    onClick,
}: QuizOptionsProps) => {
    return (
        <div
            className="cursor-pointer w-full min-h-16 my-2 px-4 rounded-lg border border-gray-700 bg-gray-800 text-base text-white flex items-center hover:bg-green-700 hover:shadow"
            data-option={data}
            onClick={onClick}
        >
            <span className="size-7 ml-[0.313rem] mr-[0.625rem] rounded bg-green-500 text-gray-800 flex items-center justify-center">
                {' '}
                {index}{' '}
            </span>
            {text}
        </div>
    )
}

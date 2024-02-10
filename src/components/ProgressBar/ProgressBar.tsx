interface ProgresseBarProps {
    progressPercentage: number
}

export const ProgressBar = ({ progressPercentage }: ProgresseBarProps) => {
    return (
        <div className="fixed top-0 right-0 left-0 h-3 bg-gray-700">
            <div
                id="progress-bar"
                className="h-full bg-green-500 transition-all"
                style={{
                    width: `${progressPercentage}%`,
                }}
            />
        </div>
    )
}

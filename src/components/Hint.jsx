export default function Hint({ useHint, disabled,isQuizCompleted }) {
    return (
      <div className={"bg-Font border-2 border-Misty rounded-full w-16 p-2 flex justify-center transition ease-in-out delay-100 hover:hover:bg-opacity-80 " + (disabled || isQuizCompleted ? " opacity-15" : "")}>
        <button className="w-full" onClick={useHint} disabled={disabled || isQuizCompleted}>
          <h1 className="font-bold text-xl text-Cream">50%</h1>
        </button>
      </div>
    );
  }
  
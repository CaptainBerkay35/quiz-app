export default function Hint({ useHint, disabled }) {
    return (
      <div className={"bg-Font border-2 border-Misty rounded-full w-16 p-2 flex justify-center  " + (disabled ? " opacity-15" : "")}>
        <button className="w-full" onClick={useHint} disabled={disabled}>
          <h1 className="font-bold text-xl text-Cream">50%</h1>
        </button>
      </div>
    );
  }
  
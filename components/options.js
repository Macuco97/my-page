

export default function Options({text}) {
    const options = "bg-black text-white uppercase font-mono w-32 p-2 my-2 text-center rounded shadow-lg shadow-black"
    return (
        <div className = {options}>
            {text}
        </div>
    )
}
export default function Button({children}) {
    return (
        <button className = {`bg-slate-200 py-2 px-4 rounded-full uppercase my-2`}> 
            →  {children}
        </button>
    )
}
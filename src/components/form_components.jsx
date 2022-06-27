export function Label(props) {
  return (
    <div className="md:w-1/3 md:flex md:justify-start">
      <label className={"block md:text-right mb-1 md:mb-0 " + 
        (props.type === "Email" 
          ? "text-tangerine" 
          : "text-zinc-50/[0.2] sm:text-black"
        )}>
        {props.label}
      </label>
    </div>    
  )
}

export function Input(props) {
  return (
    <input 
      placeholder={props.placeholder} 
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      className={`
        md:bg-paleGrey focus:bg-zinc-50/[0.2] 
        border-2 rounded w-full focus:border-2 placeholder:text-black focus:font-bold
        py-5 px-4 md:py-2 md:focus:bg-white focus:border-paleGrey  focus:outline-none ` + 
        (props.name === "Email" 
          ? "border-tangerine placeholder:text-tangerine " 
          : ""
        ) 
      }
    />
  )
}
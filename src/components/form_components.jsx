export function Label(props) {
  return (
    <div className="md:w-1/3 md:flex md:justify-start">
      <label className="block md:text-right mb-1 md:mb-0">
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
      className={`bg-paleGrey 
          border-2 rounded w-full 
          py-5 px-4 md:py-2 focus:border-paleGrey focus:border-4
          focus:outline-none focus:font-bold focus:bg-white transition-all
        `}
    />
  )
}
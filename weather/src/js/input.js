const Input = ({ type, placeholder, className, alt, onKeyDown, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      alt={alt}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  )
}

export default Input
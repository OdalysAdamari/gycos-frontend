
export const Section = ({
    className,
    id = id,
    customPaddings,
    children
} ) => {
  return (
    <div className={`relative ${customPaddings || ` py-10 lg:py-16 xl:py-20 ${className || '' }` } ` }>
        {children}
    </div>
  )
}


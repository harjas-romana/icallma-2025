export const TitleLogo = ({ title, caption, className }) => {
    return (
      <h1 className={`${className}  title-logo`}>
        <span>{caption}</span>
        {title}
      </h1>
    )
  }
  
  export const TitleSm = ({ title }) => {
    return <h1 className='titleSm'>{title}</h1>
  }
  export const TitleSm2 = ({ title }) => {
    return <h1 className='titleSm2' style={{color:'black'}}>{title}</h1>
  }
  export const TitleSm3 = ({ title }) => {
    return <h1 className='titleSm3' style={{color:'black'}}>{title}</h1>
  }
  export const Title = ({ title, className }) => {
    return <h1 className={`${className} title`}>{title}</h1>
  }
  export const Title2 = ({ title, className }) => {
    return <h1 className={`${className} title2`}>{title}</h1>
  }
  
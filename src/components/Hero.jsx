
import { Section } from "./Section"
import { ButtonI } from "./Button/ButtonI"

export const Hero = () => {
  return (
    <Section className='pt-[12rem] -mt-[5.25rem] '
    customPaddings
    id='hero'>
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem]
            mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
                <h1 className="h1 mb-6"> 
                ¡Descubre cómo <span className="text-gradient"> GYCOS</span>  puede automatizar tu éxito! 
                
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb=8">
                Optimiza tus procesos y aumenta la eficiencia con nuestras 
                soluciones de automatización personalizadas
                </p>
                <ButtonI/>
            </div>
            
        </div>
        
    </Section>
  )
}

import { companyLogos } from "../constants"

const CompanyLogoes = ({ className }) => {
    return (
        <div className={ className }>
            <h5 className="tagline mb-6 text-center text-n-1/50">
                Helping people with generative solution at
            </h5>
            <ul className="flex">
                { companyLogos.map((logo, index) => (
                    <li key={ index }
                        className="flex
                        justify-center
                        items-center
                        flex-1
                        h-[5.5rem]">
                        <img src={ logo } width={ 130 } height={ 30 } alt={ logo } />
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default CompanyLogoes

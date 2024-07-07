import { notification1 } from "../assets"
import { notificationImages } from "../constants/index"


const Notification = ({ className, title }) => {
    return (
        <div className={ `${className || ''} flex items-center lg:p-4 p-2 pr-6 bg-n-9/40
        backdrop-blur border border-n-1/10 rounded-2xl gap-5` }>
            <img src={ notification1 }
                width={ 62 }
                height={ 62 }
                alt="image"
                className="rounded-xl" />
            <div className="flex-1">
                <h6 className="mb-1 font-semibold">{ title }</h6>
                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        { notificationImages.map((images, index) => (
                            <li key={ index }
                                className="flex w-6 h-6 border-2
                            border-n-12 rounded-full overflow-hidden">
                                <img src={ images } className="w-full" width={ 20 } height={ 20 } alt={ images } />
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification

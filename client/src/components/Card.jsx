


const Card = ({id, name, description, img, type}) => {
    let color = type === 'beginner' ? 'bg-green-400' : type === 'intermediate' ? 'bg-yellow-500' : 'bg-red-600' ;  

    return (
        <div className="card-1 w-[400px] h-[400px] rounded-lg shadow-md shadow-orange-50 flex flex-col">
            <div className="flex justify-between mt-3 mb-3">
                <h1 className="card-title text-lg text-gray-100">{name}</h1>
                <p className={`card-type border-0 px-2 text-center rounded-xl ${color} text-md`}>{type}</p>
            </div>
            <img src={`http://localhost:4000${img}`} alt={name} className="w-auto items-center"/>
            <p className="card-desc text-md text-light text-gray-100">{description}</p>
        </div>
    )
}

export default Card
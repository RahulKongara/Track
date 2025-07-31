


const Card = ({id, name, description}) => {
    

    return (
        <div className="card-1 w-[400px] h-[400px] rounded-lg shadow-md shadow-orange-50">
            <h1 className="card-title text-lg text-gray-100">{name}</h1>
            <p className="card-desc text-md text-light text-gray-100">{description}</p>
        </div>
    )
}

export default Card
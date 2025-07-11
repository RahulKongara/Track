

const Card = ({ name }) => {
    return (
        <div className="card-1 w-[400px] h-[400px] rounded-lg shadow-md shadow-orange-50">
            <h1 className="card-title text-lg text-gray-100">{name}</h1>
        </div>
    )
}

export default Card
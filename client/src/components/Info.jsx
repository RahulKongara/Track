

const Info = () => {
  return (
    <div className="mt-[150px] mb-[150px]">
        <h1 className="text-2xl text-center font-medium">Did you know?</h1>
        <div className="flex justify-around mt-6">
            <div className="stat-1 flex flex-col justify-center items-center">
                <h1 className="text-xl bg-gray-900 p-2 rounded-lg shadow-lg shadow-orange-50 mb-4">500+</h1>
                <p>calories burnt very 60 minutes of HIIT</p>
            </div>
            <div className="stat-2 flex flex-col justify-center items-center">
                <h1 className="text-xl bg-gray-900 p-2 rounded-lg shadow-lg shadow-orange-50 mb-4">4 cal/g</h1>
                <p>calories in a gram of carbohydrate</p>
            </div>
            <div className="stat-3 flex flex-col justify-center items-center">
                <h1 className="text-xl bg-gray-900 p-2 rounded-lg shadow-lg shadow-orange-50 mb-4">2000+</h1>
                <p>calories burnt in a human male everyday</p>
            </div>
        </div>
    </div>
  )
}

export default Info
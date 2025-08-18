import { useState, lazy } from "react";
const FoodCard = lazy(() => import("../components/FoodCard"));

const Food = () => {
	const [foodName, setFoodName] = useState('');
	const [servingSize, setServingSize] = useState('');
	const [showCard, setShowCard] = useState(false);

	const handleSearch = () => {
		if (foodName.trim() && servingSize.trim()) {
			setShowCard(true);
		}
	};

	const handleClear = () => {
		setFoodName('');
		setServingSize('');
		setShowCard(false);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div className="mt-[100px] px-4">
			{/* Search Inputs */}
			<div className="search-container mb-6 flex flex-col items-center gap-4">
				<div className="w-full max-w-md">
					<input
						type="text"
						value={foodName}
						onChange={(e) => setFoodName(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder="Enter food name (e.g., chicken breast, apple)"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
					/>
				</div>

				<div className="w-full max-w-md">
					<input
						type="text"
						value={servingSize}
						onChange={(e) => setServingSize(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder="Enter serving size (e.g., 100g, 1 cup, 1 medium)"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div className="flex gap-3">
					<button
						onClick={handleSearch}
						disabled={!foodName.trim() || !servingSize.trim()}
						className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
					>
						Get Nutrition Info
					</button>

					{showCard && (
						<button
							onClick={handleClear}
							className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
						>
							Clear
						</button>
					)}
				</div>
			</div>

			{!showCard && (
				<div className="flex flex-col items-center text-center mb-8">
					<h2 className="text-2xl font-bold text-gray-100 mb-4">Food Nutrition Lookup</h2>
					<p className="text-gray-400 mb-3">
						The first response can take 4-5 seconds to load please bear with us.
					</p>
					<p className="text-gray-300 max-w-md">
						Enter a food name and serving size to get detailed nutrition information.
						You can toggle between common foods and branded products in the results.
					</p>
					<div className="mt-4 text-sm text-gray-400">
						<p><strong>Examples:</strong></p>
						<p>Food: "chicken breast" | Serving: "100g"</p>
						<p>Food: "apple" | Serving: "1 medium"</p>
						<p>Food: "rice" | Serving: "1 cup cooked"</p>
					</div>
				</div>
			)}

			{/* Food Card */}
			{showCard && (
				<div className="flex justify-center">
					<FoodCard
						foodName={foodName}
						servingSize={servingSize}
					/>
				</div>
			)}
		</div>
	)
}

export default Food
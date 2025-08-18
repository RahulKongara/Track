import { useState } from 'react';
import useFoodNutrition from '../hooks/useFoodNutrition';

const FoodCard = ({ foodName, servingSize }) => {
    const [foodType, setFoodType] = useState('common'); // 'common' or 'branded'

    // Construct query based on food type
    const query = foodType === 'common'
        ? `${servingSize} ${foodName}`.trim()
        : foodName;

    const { data, loading, error } = useFoodNutrition(query, foodType);

    // Helper function to get nutrient value by attribute_id
    const getNutrientValue = (nutrients, attributeId) => {
        const nutrient = nutrients?.find(n => n.attr_id === attributeId);
        return nutrient ? nutrient.value : 'N/A';
    };

    // Helper function to render nutrition data
    const renderNutritionData = () => {
        if (!data) return null;

        // Get the first food item from the response
        const foodItem = data.foods?.[0] || data;
        if (!foodItem) return null;

        const {
            food_name,
            serving_qty,
            serving_unit,
            nf_calories,
            nf_total_carbohydrate,
            nf_protein,
            nf_total_fat,
            full_nutrients
        } = foodItem;

        // Key nutrients to display (Nutritionix attribute IDs)
        const keyNutrients = [
            { id: 291, name: 'Fiber', unit: 'g' },
            { id: 269, name: 'Sugar', unit: 'g' },
            { id: 401, name: 'Vitamin C', unit: 'mg' },
            { id: 303, name: 'Iron', unit: 'mg' },
            { id: 301, name: 'Calcium', unit: 'mg' },
            { id: 306, name: 'Potassium', unit: 'mg' },
            { id: 307, name: 'Sodium', unit: 'mg' }
        ];

        return (
            <div className="nutrition-content">
                <h2 className="text-xl font-bold text-gray-100 mb-2">{food_name}</h2>
                <p className="text-gray-300 mb-4">
                    Serving: {serving_qty} {serving_unit}
                </p>

                
                <div className="macros mb-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-green-500 text-white p-2 rounded">
                            <span className="font-semibold">Calories</span>
                            <div className="text-lg">{nf_calories || 'N/A'}</div>
                        </div>
                        <div className="bg-blue-500 text-white p-2 rounded">
                            <span className="font-semibold">Carbs</span>
                            <div className="text-lg">{nf_total_carbohydrate ? `${nf_total_carbohydrate}g` : 'N/A'}</div>
                        </div>
                        <div className="bg-red-500 text-white p-2 rounded">
                            <span className="font-semibold">Protein</span>
                            <div className="text-lg">{nf_protein ? `${nf_protein}g` : 'N/A'}</div>
                        </div>
                        <div className="bg-yellow-500 text-white p-2 rounded">
                            <span className="font-semibold">Fat</span>
                            <div className="text-lg">{nf_total_fat ? `${nf_total_fat}g` : 'N/A'}</div>
                        </div>
                    </div>
                </div>

                
                {full_nutrients && full_nutrients.length > 0 && (
                    <div className="vitamins-minerals">
                        <h3 className="text-lg font-semibold text-gray-200 mb-2">Vitamins & Minerals</h3>
                        <div className="grid grid-cols-1 gap-1 text-sm">
                            {keyNutrients.map(({ id, name, unit }) => {
                                const value = getNutrientValue(full_nutrients, id);
                                return (
                                    <div key={id} className="flex justify-between text-gray-300">
                                        <span>{name}:</span>
                                        <span>{value !== 'N/A' ? `${value}${unit}` : 'N/A'}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="card-1 w-[400px] h-auto min-h-[400px] rounded-lg shadow-md shadow-orange-50 flex flex-col bg-gray-800">
            {/* Header with Toggle */}
            <div className="flex justify-between items-center mt-3 mb-3 px-3">
                <h1 className="card-title text-lg text-gray-100">Nutrition Info</h1>

                {/* Food Type Toggle */}
                <div className="flex bg-gray-700 rounded-lg p-1">
                    <button
                        onClick={() => setFoodType('common')}
                        className={`px-3 py-1 text-xs rounded transition-colors ${foodType === 'common'
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Common
                    </button>
                    <button
                        onClick={() => setFoodType('branded')}
                        className={`px-3 py-1 text-xs rounded transition-colors ${foodType === 'branded'
                                ? 'bg-yellow-300 text-white'
                                : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Branded
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-3 pb-3">
                {loading && (
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                        <span className="ml-2 text-gray-300">Loading nutrition data...</span>
                    </div>
                )}

                {error && (
                    <div className="text-red-400 text-center p-4">
                        <p className="font-semibold">Error</p>
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {!loading && !error && (!foodName || !servingSize) && (
                    <div className="text-gray-400 text-center p-4">
                        <p>Please provide both food name and serving size</p>
                    </div>
                )}

                {!loading && !error && data && renderNutritionData()}

                {!loading && !error && !data && foodName && servingSize && (
                    <div className="text-gray-400 text-center p-4">
                        <p>No nutrition data found</p>
                        <p className="text-sm">Try a different search term or toggle food type</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodCard;

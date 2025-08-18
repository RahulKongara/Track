import { useState, useEffect, useRef } from 'react';

const useFoodNutrition = (query, type = 'common') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const abortControllerRef = useRef(null);

    useEffect(() => {
        // Cancel any existing request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Reset states
        setError(null);
        setData(null);

        // Don't fetch if query is empty
        if (!query || query.trim().length === 0) {
            setLoading(false);
            return;
        }

        // Fetch data based on type
        if (type === 'common') {
            fetchCommonFood(query.trim());
        } else if (type === 'branded') {
            fetchBrandedFood(query.trim());
        }

        // Cleanup function
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [query, type]);

    const fetchCommonFood = async (searchQuery) => {
        abortControllerRef.current = new AbortController();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                'https://trackapi.nutritionix.com/v2/natural/nutrients',
                {
                    method: 'POST',
                    headers: {
                        'x-app-id': import.meta.env.VITE_NIX_APP_ID,
                        'x-app-key': import.meta.env.VITE_NIX_APP_KEY,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: searchQuery
                    }),
                    signal: abortControllerRef.current.signal,
                }
            );

            if (abortControllerRef.current.signal.aborted) {
                return;
            }

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message || 'Failed to fetch common food data');
                setData(null);
            }
        } finally {
            if (!abortControllerRef.current?.signal.aborted) {
                setLoading(false);
            }
        }
    };

    const fetchBrandedFood = async (foodName) => {
        abortControllerRef.current = new AbortController();
        setLoading(true);
        setError(null);

        try {
            // Step 1: Get nix_item_id from instant search
            const searchResponse = await fetch(
                `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(foodName)}`,
                {
                    method: 'GET',
                    headers: {
                        'x-app-id': import.meta.env.VITE_NIX_APP_ID,
                        'x-app-key': import.meta.env.VITE_NIX_APP_KEY,
                        'Content-Type': 'application/json',
                    },
                    signal: abortControllerRef.current.signal,
                }
            );

            if (abortControllerRef.current.signal.aborted) {
                return;
            }

            if (!searchResponse.ok) {
                throw new Error(`Search failed! status: ${searchResponse.status}`);
            }

            const searchResult = await searchResponse.json();

            // Get the first branded item
            if (!searchResult.branded || searchResult.branded.length === 0) {
                throw new Error('No branded items found');
            }

            const nixItemId = searchResult.branded[0].nix_item_id;

            // Step 2: Get detailed branded item info
            const itemResponse = await fetch(
                `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${nixItemId}`,
                {
                    method: 'GET',
                    headers: {
                        'x-app-id': import.meta.env.VITE_NIX_APP_ID,
                        'x-app-key': import.meta.env.VITE_NIX_APP_KEY,
                        'Content-Type': 'application/json',
                    },
                    signal: abortControllerRef.current.signal,
                }
            );

            if (abortControllerRef.current.signal.aborted) {
                return;
            }

            if (!itemResponse.ok) {
                throw new Error(`Item fetch failed! status: ${itemResponse.status}`);
            }

            const itemResult = await itemResponse.json();
            setData(itemResult);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message || 'Failed to fetch branded food data');
                setData(null);
            }
        } finally {
            if (!abortControllerRef.current?.signal.aborted) {
                setLoading(false);
            }
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    return { data, loading, error };
};

export default useFoodNutrition;

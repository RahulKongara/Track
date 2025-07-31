import { useEffect, useState } from "react"
import Card from '../components/Card';

const useWorkout = (section) => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
		type: '',
		location: '',
		muscle_group: '',
        section: section
	});

    const fetchWorkouts = async () => {
        try {
            setLoading(true);
            const queryParams = new URLSearchParams();

            if (filters.type) queryParams.append('type', filters.type);
			if (filters.location) queryParams.append('location', filters.location);
			if (filters.muscle_group) queryParams.append('muscle_group', filters.muscle_group);
            if (filters.section) queryParams.append('section', filters.section);

            const response = await fetch(`http://localhost:4000/api/workouts?${queryParams}`);
            const data = await response.json();

            if (data.success) {
                setWorkouts(data.data);
            } else {
                console.error('Failed to fetch workouts');
            }
        } catch (err){
            console.error('Error fetching workouts:', err);
        } finally {
            setLoading(false);
        }
    }

    const handleFilterChange = (filterType, value) => {
		setFilters(prev => ({
			...prev,
			[filterType]: value
		}));
	};

    useEffect(() => {
        fetchWorkouts();
    }, [filters]);

    return (
        <>
            {workouts.map(workout => (
                <Card key={workout.id} name={workout.name} description={workout.description} />
            ))}
        </>
    )
}

export default useWorkout
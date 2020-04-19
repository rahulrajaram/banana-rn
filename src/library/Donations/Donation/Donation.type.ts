export interface DonationType {
	donation: {
		claims: [],
		created_at: Date;
		donor_id: number;
		duration_minutes: number;
		food_name: string;
		id: number;
		image_url: string;
		measurement: string;
		per_person: number;
		pickup_location: string;
		total_servings: number;
	};
}

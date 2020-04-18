export interface Donation {
	donation: {
		claims: Claim[];
		created_at: Date;
		duration_minutes: number;
		food_name: string;
		image_url: string;
		measurement: string;
		per_person: number;
		pickup_location: string;
		total_servings: number;
	};
	showDonation: (donation) => void;
}

export default DonationScreen;

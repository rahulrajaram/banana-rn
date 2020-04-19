export type ClaimType = {
	claim: {
		address: string;
		created_at: Date;
		canceled: boolean;
		client_id: number;
		completed: boolean;
		donation: {
			duration_minutes: number;
			food_name: string;
			per_person: number;
			measurement: string;
			pickup_location: string;		
		};
		donor: string;
		id: number;
		qr_code: string;
	};
};

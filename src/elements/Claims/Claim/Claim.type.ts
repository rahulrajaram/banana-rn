export type ClaimType = {
	claim: {
		address: string;
		created_at: Date;
		canceled: boolean;
		client_id: number;
		completed: boolean;
		donation: "donation";
		donor: string;
		id: number;
		qr_code: string;
	};
};

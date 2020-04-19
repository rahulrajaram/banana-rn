import { Donation, Claim, StatusCode } from '@state/index.types';

export interface Actions {
	getActiveDonationsForClient: () => Promise<Donation[] | []>;
	getDonationsOrClaims: () => Promise<Donation[] | Claim[] | []>;
	getLocation: () => Promise<{ latitude: number; longitude: number }>;
	logIn: () => Promise<StatusCode>;
	logOut: () => Promise<void>;
	postDonation: () => Promise<StatusCode>;
	register: () => Promise<StatusCode>;
	scan: () => Promise<StatusCode>;
}
export { getActiveDonationsForClient } from './getActiveDonationsForClient';
export { getDonations } from './getDonations';
export { getDonationsOrClaims } from './getDonationsOrClaims';
export { getLocation } from './getLocation';
export { logIn, logOut } from './auth';
export { postDonation } from './postDonation';
export { register } from './register';
export { scan } from './scan';


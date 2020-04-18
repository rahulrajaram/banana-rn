import railsAxios from '@util/railsAxios';

export const getDonations = async store => {
	const { jwt, user, userIdentity } = store.state;
	const endpoint = `/${userIdentity}s/${user.id}/get_donations`;
	try {
		const response = await railsAxios(jwt).get(endpoint);
		const { data } = response;
		const sortedData = data.sort((a, b) => a.created_at < b.created_at);
		if (sortedData) {
			await store.setState({ donations: sortedData });
			return sortedData;
		}
		return false;
	} catch (error) {
		console.log(error);
		await store.setState({ donations: [] });
		return false;
	}
};

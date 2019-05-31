export const CHANGE_STATUS_TASK = 'CHANGE_STATUS_TASK';

export const changeStatusTask = (id) => {
	return dispath => {
		dispath({
			type: CHANGE_STATUS_TASK,
			payload: {id}
		});
	};
};
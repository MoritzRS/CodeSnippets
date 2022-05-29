export const RESIZE_OBSERVER = (function () {
	let subscriptions: { id: number; callback: () => void }[] = [];

	const unsubsribe = (id: number) => {
		subscriptions = subscriptions.filter((e) => e.id != id).map((e, i) => ({ ...e, id: i }));
	};

	const subscribe = (callback: () => void) => {
		const id = subscriptions.reduce((carry, current) => (carry > current.id ? carry : current.id), 0) + 1;
		subscriptions = [...subscriptions, { id, callback }];

		return () => unsubsribe(id);
	};

	const trigger = () => {
		subscriptions.forEach((subscription) => {
			subscription.callback();
		});
	};
	return {
		subscribe,
		trigger
	};
})();

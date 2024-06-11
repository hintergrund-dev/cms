import { writable } from 'svelte/store';

/** @typedef {{ message: string, type: string, id?: string }} Notification */
/** @typedef { Notification[]} Notifications */

function initNotifications() {
	/**  @type {import('svelte/store').Writable<Notifications>} */
	const { subscribe, set, update } = writable([]);

	const store = {
		subscribe,
		set,
		update,
		add: (notification) => {
			update((notifications) => {
				const id = Math.random().toString(36).substr(2, 4);
				// If multiple notifications should be supported
				// notifications.push(notification);
				notification.id = id;
				notifications = [notification];

				setTimeout(() => {
					store.remove(notification);
				}, 8000);
				return notifications;
			});
		},
		remove: (notification) => {
			update((notifications) => {
				const index = notifications.findIndex((n) => n.id === notification.id);
				if (index !== -1) {
					notifications.splice(index, 1);
				}
				return notifications;
			});
		},
		clear: () => {
			set([]);
		}
	};

	return store;
}
/* @type {import('svelte/store').Writable<Notifications>} */
export const notifications = initNotifications();

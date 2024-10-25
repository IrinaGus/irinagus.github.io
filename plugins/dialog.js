export default defineNuxtPlugin(() => {
	const list = reactive([]);
  
	const add = (component) => {
		list.push(component);
	};
  
	const get = () => {
		return list;
	};

	const remove = (component) => {
		const index = list.findIndex(item => item.__name === component);
		if (index !== -1) {
			list.splice(index, 1);
		}
	};


	return {
		provide: {
		  AddDialog: add,
		  RemoveDialog: remove,
		  GetDialog: get
		}
	}
  });
  
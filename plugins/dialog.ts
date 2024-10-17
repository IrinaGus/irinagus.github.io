import type { DefineComponent } from 'vue';

export default defineNuxtPlugin(() => {
	const dialogsList: DefineComponent[] = reactive([]);
  
	const add = (component: DefineComponent) => {
		dialogsList.push(component);
	};
  
	const get = () => {
	  return dialogsList;
	};

	const remove = () => {
		dialogsList.length = 0;
	  };


	return {
		provide: {
		  AddDialog: add,
		  RemoveDialog: remove,
		  GetDialog: get
		}
	}
  });
  
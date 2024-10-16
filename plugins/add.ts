export default defineNuxtPlugin((nuxtApp) => {
	const componentsList = [];
  
	const add = (component) => {
		componentsList.push(component);
	};
  
	const getComponents = () => {
	  return componentsList;
	};

	const remove = (component) => {
		const index = componentsList.indexOf(component);
		if (index !== -1) {
		  componentsList.splice(index, 1);
		}
	  };
  
	nuxtApp.provide('add', add);
	nuxtApp.provide('getComponents', getComponents);
	nuxtApp.provide('remove', remove);
  });
  
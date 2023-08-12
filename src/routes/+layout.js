/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
  try {
    const response = await fetch('/api');

    return { posts: await response.json() };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};

// export const componentSections = [
//   {
//     category: 'application',
//     name: ''
//     section: 'AdvancedTable'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'CrudCreateDrawer'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'CrudCreateForm'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'CrudCreateModal'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'CrudDeleteConfirm'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'CrudReadDrawer'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'AdvancedTable'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'AdvancedTable'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'AdvancedTable'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'AdvancedTable'
//   },
//   {
//     category: 'application',
//     name: ''
//     section: 'AdvancedTable'
//   },
  

// ]


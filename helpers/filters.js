// // ~/helpers/filters.js
// export function filterProjects (filter, projects) {
//     let filteredList = [...projects]
  
//     // Filter tools
//     if (filter.tools !== 'all') {
//       const filtered = filteredList.filter(project => project.tools === filter.tools)
//       filteredList = filtered
//     }

//     // Filter category
//     if (filter.category !== 'all') {
//     const filtered = filteredList.filter(project => project.category === filter.category)
//     filteredList = filtered
//     }

//      // Filter tags
//      if (filter.tags !== 'all') {
//         const filtered = filteredList.filter(project => project.tags === filter.tags)
//         filteredList = filtered
//         }
  
//     // Search
//     if (filter.search !== '') {
//       const searchList = []
//       const searchTerm = filter.search.toLowerCase()
//       for (let i = 0; i < filteredList.length; i++) {
//         if (
//           (filteredList[i].title !== null && filteredList[i].title.toLowerCase().includes(searchTerm)) ||
//           (filteredList[i].client !== null && filteredList[i].client.toLowerCase().includes(searchTerm))
//         ) {
//           searchList.push(filteredList[i])
//         }
//       }
//       filteredList = searchList
//     }
  
//     return filteredList
//   }
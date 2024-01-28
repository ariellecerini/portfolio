// // ~/store/filter.js
// export const state = () => ({
//     projects: [],
//     filteredProjects: [],
//     project: {},
//     filter: {
//       search: '',
//       tools: 'all',
//       category: '',
//       tags: 'createdAt'
//     }
//   })

//   // ~/store/leads.js
// export const actions = {
//     // ...
//     //   async filterOrder ({ commit }, order) {
//     //     await commit('setOrder', order)
//     //     await commit('orderLeads')
//     //   },
//       async filterCategory ({ commit, dispatch }, category) {
//         await commit('setFilterCategory', category)
//         dispatch('filterProjects')
//       },
//       async filterTools ({ commit, dispatch }, tools) {
//         await commit('setFilterTools', tools)
//         dispatch('filterProjects')
//       },
//       async filterTags ({ commit, dispatch }, tags) {
//         await commit('setFilterTags', tags)
//         dispatch('filterProjects')
//       },
//       async filterSearch ({ commit, dispatch }, search) {
//         await commit('setFilterSearch', search)
//         dispatch('filterProjects')
//       },
//       async filterLeads ({ commit }) {
//         await commit('filterProjects')
//       },
//       // ...
//     }


//     // ~/store/leads.js
//     import * as Filters from '~/helpers/filters'

//     export const mutations = {
//     // ...
//     setFilteredProjects (state, leads) { state.filteredLeads = leads },

//     setFilterCategory (state, category) { state.filter.category = category },
//     setFilterCategory (state, tags) { state.filter.tags = tags },
//     setFilterCategory (state, tools) { state.filter.tools = tools },

//     setFilterSearch (state, search) { state.filter.search = search },

//     filterProjects (state) {
//     const leads = [...state.projects]
//     state.filteredProjects = projects
//     state.filteredProjects = Filters.filterProjects(state.filter, projects)
//     }
//     // ...
//     }
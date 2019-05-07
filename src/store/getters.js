const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  addRoutes: state => state.permission.addRoutes,
  menuList: state => state.menu.menuList,
  permission_routes: state => state.permission.routes,
  user: state => state.user
}
export default getters

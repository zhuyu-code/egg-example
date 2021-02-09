module.exports = (app) => {
  const { controller, router } = app;
  router.get("/user/read", controller.user.read);
};

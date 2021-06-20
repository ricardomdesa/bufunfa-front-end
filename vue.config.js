module.exports = {
  publicPath:
    process.env.DEPLOY_ENV === "GH_PAGES" ? "/bufunfa-dashboard/" : "/",

  configureWebpack: () => {
    return {
      externals: {
        moment: "moment"
      }
    };
  }
};

type Config = {
  config: any;
};

function appConfig(config: Config) {
  return {
    ...config,
    extra: {
      triviaApiUrl: 'https://opentdb.com',
    },
  };
}

export default appConfig;

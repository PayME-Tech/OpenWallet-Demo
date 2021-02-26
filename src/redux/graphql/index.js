import {
  GRAPHQL_DEV,
  GRAPHQL_SANBOX,
  GRAPHQL_STAGGING,
  GRAPHQL_PRODUCTION,
} from '../../configs/api.config';

import {callApiRSA} from './middleware/requestRSA';
import store from '../redux.store';
import {APP_ENV} from '../../configs/app.config';

const getDomain = (env) => {
  // TODO  tam luon goi service DEV
  // return GRAPHQL_DEV
  switch (env) {
    case 'dev':
      return GRAPHQL_DEV;
    case 'sandbox':
      return GRAPHQL_SANBOX;
    case 'staging':
      return GRAPHQL_STAGGING;
    default:
      return GRAPHQL_PRODUCTION;
  }
};

const getSecure = (env) => {
  // todo
  // return false
  switch (env) {
    case 'dev':
      return false;
    case 'sandbox':
      return true;
    case 'staging':
      return true;
    case 'production':
      return true;
    default:
      return true;
  }
};

export async function callGraphql(sql, variables, method = 'POST') {
  // const {
  //   sk: {env, publicKey, privateKey, xApi},
  //   ud: {accessToken},
  // } = store.getState();

  const {appEnv} = store.getState().appReducer;
  const publicKey = APP_ENV[appEnv].publicKey;
  const privateKey = APP_ENV[appEnv].privateKey;
  const xApi = appEnv.toLowerCase() === 'production' ? 'payme' : 'app';

  return callApiRSA({
    env: appEnv.toLowerCase(),
    domain: getDomain(appEnv.toLowerCase()),
    method,
    pathUrl: '/graphql',
    // accessToken: accessToken ?? '',
    accessToken: '',
    body: {
      query: `${sql}`,
      variables: variables || null,
    },
    isSecurity: getSecure(appEnv.toLowerCase()),

    publicKey,
    privateKey,
    xApi: '14',
    // xApi: env === 'production' ? 'payme' : 'app',
    // isHeaderSecure: env === 'production' ? 1 : ''
  });
}

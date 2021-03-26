
const envAPI = 'https://sbx-wam.payme.vn'

const api_general = 'fe.payme.vn'
export const API_WAM = envAPI
export const API_WAM_VERSION = '/v1'

const api_upload = 'static.payme.vn' 

export const API_UPLOAD_VERSION = '/v1'
export const API_UPLOAD = `https://${api_upload}`
export const API_UPLOAD_SANBOX = `https://sbx-${api_upload}`

export const KEY_HEADER_THREE = 'sum'
export const GRAPHQL_DEV = 'https://dev-fe.payme.net.vn'
export const GRAPHQL_SANBOX = `https://sbx-${api_general}`
export const GRAPHQL_STAGGING = `https://s${api_general}`
export const GRAPHQL_PRODUCTION = `https://${api_general}`

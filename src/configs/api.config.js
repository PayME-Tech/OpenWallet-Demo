/* INFO DOMAIN API */
// const api_wam = 'wam.payme.vn'
// export const api_wam_version = '/v1'

const envAPI = 'https://sbx-wam.payme.vn' // SANDBOX
// if (process.env.NODE_ENV === 'development') {
//   envAPI = 'http://10.8.36.251:3380' // DEV
// }
// /* INFO DOMAIN API */
// const api_account = 'ae.payme.vn' // Server: account
// export const api_account_version = '/v1'

const api_general = 'fe.payme.vn' // Server: tất cả dịch vụ
// export const api_general_version = '/v3'

// const api_key = 'ke.payme.vn' // Server: key mã hóa
// export const api_key_version = '/v1'

/* EXPORT API */
export const API_WAM = envAPI
export const API_WAM_VERSION = '/v1'

const api_upload = 'static.payme.vn' // Server: chứa file upload (avatar, cmnd, cccd, video, ...)

export const API_UPLOAD_VERSION = '/v1'
export const API_UPLOAD = `https://${api_upload}`
export const API_UPLOAD_SANBOX = `https://sbx-${api_upload}`

/* General */
export const KEY_HEADER_THREE = 'sum'

/* URL Graphql */
// export const GRAPHQL_DEV = 'https://10.8.36.251:3320'
export const GRAPHQL_DEV = 'https://dev-fe.payme.net.vn'
export const GRAPHQL_SANBOX = `https://sbx-${api_general}`
export const GRAPHQL_STAGGING = `https://s${api_general}`
export const GRAPHQL_PRODUCTION = `https://${api_general}`

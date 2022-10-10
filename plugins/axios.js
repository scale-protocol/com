import https from 'https'

export default function ({ $config, $axios, app }) {
  $axios.setBaseURL($config.slapiURL + $config.slapiVer)

  $axios.onRequest((cfg) => {
    cfg.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  })
}

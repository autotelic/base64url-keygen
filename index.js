const base64url = require('base64url')

async function keyGen() {
  const key = await crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  )
  const exported = await crypto.subtle.exportKey('raw', key)
  return base64url(exported)
}

(async function () {
    const b64urlKey = await keyGen()
    document.body.innerHTML = b64urlKey
})();

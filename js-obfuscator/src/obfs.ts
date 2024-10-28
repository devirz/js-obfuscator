async function obfuscator(code: string){
  const response = await fetch("https://node.shield.bytehide.com/obfuscate", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,fa;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "Referer": "https://www.bytehide.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": JSON.stringify({ code }),
    "method": "POST"
  });
  if(response.ok){
    const result = await response.json()
    return result.output
  } else {
    throw new Error(response.statusText + " " + response.status)
  }
}

export default obfuscator
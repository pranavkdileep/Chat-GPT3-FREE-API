url = "https://openai-gpt.remixproject.org/"
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "Connection": "keep-alive",
    "Origin": "https://remix.ethereum.org",
    "Referer": "https://remix.ethereum.org/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"
}

def getblog(text):
    data={
        "prompt":text
    }
    response = requests.post(url, data=json.dumps(data), headers=headers,timeout=50000)
    body = ""
    for i in response.json()["choices"]:
        body += i["message"]["content"]
    return body
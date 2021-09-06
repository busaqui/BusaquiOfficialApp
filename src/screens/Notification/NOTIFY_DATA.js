export const DATA_NOTIFICATIONS = [
    {
        "id": 1,
        "text": "O 280 está chegando",
        "addedTime": Date.now()
    },
    {
        "id": 2,
        "text": "O 125 está chegando",
        "addedTime": Date.now() - 1000 * 3600 * 24
    },
    {
        "id": 3,
        "text": "🔵 AEDB está ajudando a Busaqui!!",
        "addedTime": Date.now() - 1000 * 3600 * 48
    },
    {
        "id": 4,
        "text": "🔵 Fabrício está ajudando a Busaqui!!",
        "addedTime": 1523217993000
    },
    {
        "id": 5,
        "text": "🔵 Jonas está ajudando a Busaqui!!",
        "addedTime": 1523217993000
    },
    {
        "id": 6,
        "text": "🔵 Lucas está ajudando a Busaqui!!",
        "addedTime": 1542207993000
    },
    {
        "id": 7,
        "text": "🔵 Pedro está ajudando a Busaqui!!",
        "addedTime": 1576590342000
    },
    {
        "id": 7,
        "text": "🔵 Matheus está ajudando a Busaqui!!",
        "addedTime": 1576590342000
    },
].sort((a, b) => a.addedTime > b.addedTime ? -1 : 1) //ORDER DECRESCENTE POR ADDEDTIME
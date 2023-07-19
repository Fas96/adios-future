
export  default  function generateRandomUUID() {
    const chars = "0123456789abcdef";
    let uuid = "";
    for (let i = 0; i < 32; i++) {
        uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    return uuid;
}
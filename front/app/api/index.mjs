export async function get(req) {
    const res = await fetch('http://back:5001/widget')
    const widget = await res.text()
    return {
        json: { widget }
    }
}

function decide(json) {
    if (json.status !== 200) {
        return false;
    }

    const clone = structuredClone(json);

    if (clone.like + clone.follows < 100) {
        return false;
    }

    clone.touched = true;
    clone.date = new Date();

    return clone;
}


const squareParallelogram = (a, b, alpha) => {
    const radians = toRadians(alpha);
    return a * b * Math.sin(radians);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}
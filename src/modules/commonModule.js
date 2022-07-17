
export const squareParallelogram = (a, b, alpha) => {
    const radians = toRadians(alpha);
    return rounding(a * b * Math.sin(radians));
}

export function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

export function toRadians (angle) {
    return angle * (Math.PI / 180);
}

export const onlyNumbers = (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
    if (event.target.value === "0") {
        event.target.value = "";
    }
}

export const rounding = (value) => {
    value = Number(value);
    return Math.trunc(value * 1000) / 1000;
}
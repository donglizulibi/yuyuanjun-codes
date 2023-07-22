export function getStyle(el, prop) {
    return window.getComputedStyle(el, null)[prop].slice(0, -2) * 1
}
function bindX (asThis, ...args) {
    const fn = this;
    return function (...args2) {
        return fn.call(asThis, ...args, ...args2);
    };
}

module.exports = bindX;

if (!Function.prototype.bind) {
    Function.prototype.bind = bindX;
}

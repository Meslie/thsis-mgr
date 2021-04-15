const getMate = () => {
    return {
        creatAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
        updateAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
    }
}

module.exports = {
    getMate,
};
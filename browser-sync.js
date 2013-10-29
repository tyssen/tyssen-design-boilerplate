module.exports = {
    files: "assets/css/**/*.css",
    debugInfo: true,
    host: "192.168.1.101",
    ghostMode: {
        links: true,
        forms: true,
        scroll: true
    },
    server: {
        baseDir: "assets"
    },
    open: false
};
class fileManager {
    constructor() {
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
    }

    removeFile(file) {
        this.files = this.files.filter(f => f !== file);
    }

    getFiles() {
        return this.files;
    }

    /* Not Implemented yet, needs feature approval */
    renameFile(file, newName) {}
}


const regex = /<body[^>]*>([\s\S]*)<\/body>/;
const getBody = (content) => {
    const result = regex.exec(content);
    if (result && result.length === 2) {
        return result[1];
    }
    return content;
};

/**
 * @param fileValue: 文件内容，生成的代码
 * @param option: { filePath, index, config }
 */

const loader = async (fileValue, option) => {

    if (
        option.item.panelName === 'index.html' &&
        option.moduleData.dsl === 'h5-taobao-standard'
    ) {
        fileValue = getBody(fileValue);
    }
    return fileValue;
};

module.exports = (...args) => {
    return loader(...args).catch(err => {
        console.log(err);
    });
}
// 这是个id自增文件，所有增加id的操作都在这里执行
let id = 0;
// 每调用一次，创建一个id
const createId = () => {
    id += 1;
    return id;
}

export default createId;
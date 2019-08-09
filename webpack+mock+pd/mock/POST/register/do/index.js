const Mock = require('mockjs');
const Random = Mock.Random;

export default params => {
    let list = [];
    for(let j = 0; j < 10; j++) {
        list.push({
            label: Random.csentence(2, 5),
            uid: Random.integer(2, 4),
            id: j,
            content: Random.csentence(20, 50)
        })
    }
    return {
        code: Random.csentence(2, 5),
        data: list,
        message: Random.csentence(3, 7)
    }
}
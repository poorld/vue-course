import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
    const template = {
        // 2-4 抽取的个数是大于2小于等于4
        // 属性值是字符串
        'str|2-4': 'Jade', // 重复3~4次 'name|min-max': string: 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max
        'name|5': 'Jade', // name属性的值重复5次
        'age|+2': 18,
        'num|4-10': 0,
        'float|3-10.2-5': 0, // 整数部分3~10 小数最小2位最大5位
        'bool|1': true, // 此时生成true值的概率为1/2
        'bool2|1-9': true, // true的概率为 min/(min + max) 此时为1/10
        'obj|2': {
            a: 'aa', b: 'bb', c:'cc'
        }, // 随机抽取2个属性，同样也可以用min-max随机抽取属性个数
        'arr|2-4': [1, 2, 3], // 元素重复3到4次
        'func': () => {
            return 'This is a function.'
        },
        // 正则表达式 根据该表达式反向生成可以匹配它的字符串
        'reg': /[1-9][a-z]/,
        // email: Random.email()
        email: Mock.mock('@email'),
        // 图片大小 背景颜色 图片的format(字体颜色是白色) 图片上的文字
        image: Random.image('150x200', '#00ff00', '#fff', 'Jade'),
        img_base64: Random.dataImage('150x200', 'Jade 64'),
        range: Random.range(3, 10, 2), // 从3开始 结束值为小于6的值，每两个值之间相差step当前是1
        date: Random.date('yyyy-MM-dd HH:mm:ss'),
        time: Random.time('hh:mm:ss'),
        now: Random.now('hour', 'yyyy-MM-dd HH:mm:ss'),
        color: Random.color(),
        text: Random.paragraph(),// 英文段落 min?, max? 句子数量
        cText: Random.cparagraph(), //中文段落
        cname: Random.cname(), // 中文名
        email2: Random.email('jade.com'),
        region: Random.region(), // 中国的大区
        province: Random.province(),
        city: Random.city(true), // 参数为true连同省份一起返回
        county: Random.county(true),
        zip: Random.zip(), // 邮政编码
        upperFirstLetter: Random.capitalize('jade'), // 首字母大写
        pick: Random.pick([1, 2, 3, 4]), // 从数组中选择一个
        shuffle: Random.shuffle([1, 2, 3, 4, 5]),
        guid: Random.guid()
    };
    // // 测试age
    // let i = 3;
    // let arr = [];
    // while(i--) {
    //     arr.push(template)
    // }
    // return Mock.mock(arr);
    return Mock.mock(template);
}

// 找到那个按钮
const btn = document.getElementById('myButton');

// 给按钮添加点击事件
btn.onclick = function() {
    alert('你好！恭喜你完成了第一个交互网页！');
    // 顺便改一下文字颜色
    document.querySelector('h1').style.color = 'red';
};
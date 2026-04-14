// 用户数据存储在 localStorage 中
let users = JSON.parse(localStorage.getItem('users')) || {};

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('regUsername').value.trim();
        const password = document.getElementById('regPassword').value.trim();

        if (!username || !password) {
            alert('请输入用户名和密码');
            return;
        }

        if (users[username]) {
            alert('用户名已存在');
            return;
        }

        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('注册成功，跳转到登录页');
        window.location.href = 'login.html';
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (!username || !password) {
            alert('请输入用户名和密码');
            return;
        }

        if (users[username] && users[username] === password) {
            alert('登录成功，正在跳转...');
            window.location.href = 'welcome.html';
        } else {
            alert('用户名或密码错误');
        }
    });
}

const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

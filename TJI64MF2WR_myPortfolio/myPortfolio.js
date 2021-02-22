let roleWrapper = document.getElementById("role-wrapper");
let roleText = document.getElementById("role1");
// let role2 = document.getElementById("role2");
// let role3 = document.getElementById("role3");
// let role4 = document.getElementById("role4");

const roles = ["web developer", "a code lover", "illustrationist", "web developer", "graphic designer"]
let roleNum = 0;

function animate() {
    requestAnimationFrame(function animate(time) {
        let progress = 0.21 * (1 + Math.sin(0.003 * time));
        roleWrapper.style.width = progress * 400 + 'px';
        if (progress < 0.01) {
            roleNum += 1;
        }
        role1.textContent = roles[roleNum % 5];
        requestAnimationFrame(animate);
    });
}
animate();




const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${0.4*Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [{
                transform: "translate(0, 0)"
            },
            {
                transform: `translate(${to.x}rem, ${to.y}rem)`
            }
        ], {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
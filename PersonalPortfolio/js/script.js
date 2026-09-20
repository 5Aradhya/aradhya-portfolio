/*==========================================
            MOBILE MENU
==========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/*==========================================
        CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*==========================================
            HEADER SCROLL
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/*==========================================
            TYPING EFFECT
==========================================*/

new Typed(".typing",{

    strings:[

        "Java Backend Developer",

        "Spring Boot Developer",

        "REST API Developer",

        "DSA Enthusiast"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1500,

    loop:true

});


/*==========================================
            AOS
==========================================*/

AOS.init({

    duration:1000,

    once:true

});
/*==========================================
        NETWORK NODES BACKGROUND
==========================================*/


if (networkBackground) {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    networkBackground.appendChild(canvas);

    let nodes = [];
    let width;
    let height;

    function resizeCanvas() {

        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        createNodes();

    }

    function createNodes() {

        nodes = [];

        // Number of nodes according to screen size
        const nodeCount = window.innerWidth < 768 ? 45 : 100;

        for (let i = 0; i < nodeCount; i++) {

            nodes.push({

                x: Math.random() * width,

                y: Math.random() * height,

                radius: Math.random() * 1.8 + 1,

                vx: (Math.random() - 0.5) * 0.15,

                vy: (Math.random() - 0.5) * 0.15

            });

        }

    }


    function drawNetwork() {

        ctx.clearRect(0, 0, width, height);


        /*==================================
                DRAW CONNECTION LINES
        ==================================*/

        for (let i = 0; i < nodes.length; i++) {

            for (let j = i + 1; j < nodes.length; j++) {

                const dx = nodes[i].x - nodes[j].x;

                const dy = nodes[i].y - nodes[j].y;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );


                // Connection distance
                if (distance < 170) {

                    const opacity =
                        (1 - distance / 170) * 0.35;


                    ctx.beginPath();

                    ctx.moveTo(
                        nodes[i].x,
                        nodes[i].y
                    );

                    ctx.lineTo(
                        nodes[j].x,
                        nodes[j].y
                    );


                    ctx.strokeStyle =
                        `rgba(37, 99, 235, ${opacity})`;

                    ctx.lineWidth = 0.7;

                    ctx.stroke();

                }

            }

        }


        /*==================================
                DRAW GLOWING NODES
        ==================================*/

        nodes.forEach(node => {

            // Move nodes slowly
            node.x += node.vx;

            node.y += node.vy;


            // Bounce from screen edges
            if (
                node.x < 0 ||
                node.x > width
            ) {

                node.vx *= -1;

            }


            if (
                node.y < 0 ||
                node.y > height
            ) {

                node.vy *= -1;

            }


            /* Node Glow */

            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                node.radius + 3,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(37, 99, 235, 0.12)";

            ctx.fill();


            /* Main Node */

            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                node.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#3B82F6";

            ctx.shadowBlur = 8;

            ctx.shadowColor =
                "#3B82F6";

            ctx.fill();

            ctx.shadowBlur = 0;

        });


        requestAnimationFrame(drawNetwork);

    }


    /*==================================
            INITIALIZE NETWORK
    ==================================*/

    window.addEventListener(
        "resize",
        resizeCanvas
    );


    resizeCanvas();

    drawNetwork();

}

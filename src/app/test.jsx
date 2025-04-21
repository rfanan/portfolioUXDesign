// src/components/MatterScene.jsx
import React, { useEffect, useRef } from "react";
import { Engine, Render, World, gravity, Bodies, Mouse, MouseConstraint, Runner } from "matter-js";
import randomColor from "randomcolor";

const MatterScene = ({ className }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    const engine = Engine.create({
      enableSleeping: true,
    });
    const container = sceneRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const world = engine.world;
    engineRef.current = engine;

    // engine.world.gravity.x = -0.8;
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        showAngleIndicator: false,
        showCollisions: false,
        showMousePosition: false,
        showPositions: false,
      },
    });

    // Create boxes
    const boxCount = 10;
    const boxWidth = 60;
    const boxHeight = 60;
    const spacingX = 20;
    const spacingY = 20;
    const canvasWidth = width;
    const randomColoring = randomColor({ hue: "purple", count: boxCount });
    const totalWidthPerBox = boxWidth + spacingX;
    const maxColumns = Math.floor(canvasWidth / totalWidthPerBox);

    const boxes = Array.from({ length: boxCount }, (_, i) => {
      const col = i % maxColumns;
      const row = Math.floor(i / maxColumns);

      const x = spacingX + col * totalWidthPerBox + boxWidth / 2;
      const y = spacingY + row * (boxHeight + spacingY) + boxHeight / 2;

      return Bodies.rectangle(x, y, boxWidth, boxHeight, {
        restitution: 0.5,
        render: { fillStyle: randomColoring[i] },
        chamfer: 24,
        sleepThreshold: 60,
      });
    });

    // Create 2 circles
    const circles = [
      Bodies.circle(20, 200, 40, {
        label: "drag me",
        restitution: 0.9,
        render: { fillStyle: "#e74c3c" },
        frictionAir: 0.1,
      }),

      Bodies.circle(500, 200, 40, {
        label: "or me",
        restitution: 0.9,
        render: { fillStyle: "#e74c3c" },
      }),
    ];

    const polygon = [
      Bodies.polygon(700, 200, 5, 40, {
        restitution: 0.9,
        render: { fillStyle: "#f2f2f2" },
      }),
      Bodies.polygon(600, 100, 5, 40, {
        restitution: 0.9,
        render: { fillStyle: "#f2f2f2" },
      }),
    ];

    //  ini batasan  biar element gak jatoh dah hilang
    const wallOptions = {
      isStatic: true,
      render: { visible: false }, // Kalau mau kelihatan bordernya, ubah jadi true
    };

    const walls = [
      Bodies.rectangle(-20, height / 2, 40, height, wallOptions), // kiri
      Bodies.rectangle(width + 20, height / 2, 40, height, wallOptions), // kanan
      Bodies.rectangle(width / 2, -20, width, 40, wallOptions), // atas
      Bodies.rectangle(width / 2, height + 20, width, 40, wallOptions), // bawah
    ];

    // Add bodies to world
    World.add(world, [...boxes, ...circles, ...walls, ...polygon]);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Run engine and renderer
    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    // Draw text labels
    (function renderLabels() {
      requestAnimationFrame(renderLabels);
      const context = render.context;

      context.font = "12px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = "middle";

      circles.forEach((circle) => {
        const { x, y } = circle.position;
        context.fillText(circle.label, x, y);
      });
    })();
    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className="relative w-full">
      <div ref={sceneRef} className={`max-w-5xl lg:max-w-2xl xl:max-w-6xl w-full h-[350px] mx-auto`} />
    </div>
  );
};

export default MatterScene;

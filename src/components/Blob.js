import React, { useRef, useEffect } from 'react';

const Blob = ({ numMetaballs }) => {
    var canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const width = canvas.width = window.innerWidth * 0.75;
        const height = canvas.height = window.innerHeight * 0.75;
        const gl = canvas.getContext('webgl');

        var mouse = {x: 0, y: 0};

        var metaballs = [];

        for (var i = 0; i < numMetaballs; i++) {
            var radius = Math.random() * 60 + 10;
            metaballs.push({
                x: Math.random() * (width - 2 * radius) + radius,
                y: Math.random() * (height - 2 * radius) + radius,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                r: radius * 0.75
            });
        }

        var vertexShaderSrc = `
            attribute vec2 position;

            void main() {
                // position specifies only x and y.
                // We set z to be 0.0, and w to be 1.0
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        var fragmentShaderSrc = `
            precision highp float;

            const float WIDTH = ` + (width >> 0) + `.0;
            const float HEIGHT = ` + (height >> 0) + `.0;

            uniform vec3 metaballs[` + numMetaballs + `];

            void main(){
                float x = gl_FragCoord.x;
                float y = gl_FragCoord.y;

                float sum = 0.0;
                for (int i = 0; i < ` + numMetaballs + `; i++) {
                    vec3 metaball = metaballs[i];
                    float dx = metaball.x - x;
                    float dy = metaball.y - y;
                    float radius = metaball.z;

                    sum += (radius * radius) / (dx * dx + dy * dy);
                }

                if (sum >= 0.99) {
                    gl_FragColor = vec4(mix(vec3(x / WIDTH, y / HEIGHT, 1.0), vec3(255, 255, 255), max(0.0, 1.0 - (sum - 0.99) * 100.0)), 1.0);
                    return;
                }

                gl_FragColor = vec4(255.0, 255.0, 255.0, 1.0);
            }

        `;

        var vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
        var fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);

        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        var vertexData = new Float32Array([
            -1.0,  1.0, // top left
            -1.0, -1.0, // bottom left
            1.0,  1.0, // top right
            1.0, -1.0, // bottom right
        ]);

        var vertexDataBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

        var positionHandle = getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionHandle);
        gl.vertexAttribPointer(positionHandle,
            2, // position is a vec2
            gl.FLOAT, // each component is a float
            gl.FALSE, // don't normalize values
            2 * 4, // two 4 byte float components per vertex
            0 // offset into each span of vertex data
        );

        var metaballsHandle = getUniformLocation(program, 'metaballs');

        loop();
        function loop() {
            for (var i = 0; i < numMetaballs; i++) {
                var metaball = metaballs[i];
                metaball.x += metaball.vx;
                metaball.y += metaball.vy;

                if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
                if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
            }

            var dataToSendToGPU = new Float32Array(3 * numMetaballs);
            for (var i = 0; i < numMetaballs; i++) {
                var baseIndex = 3 * i;
                var mb = metaballs[i];
                dataToSendToGPU[baseIndex + 0] = mb.x;
                dataToSendToGPU[baseIndex + 1] = mb.y;
                dataToSendToGPU[baseIndex + 2] = mb.r;
            }
            gl.uniform3fv(metaballsHandle, dataToSendToGPU);
            
            //Draw
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            requestAnimationFrame(loop);
        }

        function compileShader(shaderSource, shaderType) {
            var shader = gl.createShader(shaderType);
            gl.shaderSource(shader, shaderSource);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
            }

            return shader;
        }

        function getUniformLocation(program, name) {
            var uniformLocation = gl.getUniformLocation(program, name);
            if (uniformLocation === -1) {
                throw 'Can not find uniform ' + name + '.';
            }
            return uniformLocation;
        }

        function getAttribLocation(program, name) {
            var attributeLocation = gl.getAttribLocation(program, name);
            if (attributeLocation === -1) {
                throw 'Can not find attribute ' + name + '.';
            }
            return attributeLocation;
        }

        canvas.onmousemove = function(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
    }, [])

    return (
        <canvas class="canvas-blob" ref={canvasRef} />
        // <div className="blob">
        //     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        //         <path
        //             fill="#A7F0BA"
        //             d="M40.9,-51.7C51.5,-39.9,57.5,-25.5,62.4,-9.2C67.4,7,71.3,25.2,63.5,34.8C55.7,44.3,36.2,45.1,20.1,47.6C4,50.1,-8.6,54.3,-25.7,54.9C-42.8,55.5,-64.3,52.5,-68.3,41.4C-72.3,30.3,-58.9,11.2,-51.6,-5.4C-44.3,-22.1,-43.2,-36.1,-35.6,-48.4C-28.1,-60.8,-14,-71.4,0.6,-72C15.2,-72.7,30.3,-63.5,40.9,-51.7Z"
        //             transform="translate(100 100)"
        //         />
        //     </svg>
        // </div>
    )
}

export default Blob;
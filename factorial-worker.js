            const factorial = n => {
                let num = n;

                if (n === 0) return 1
                for (let i = 0; i < n; i++) {
                    num = n * factorial(n - 1);
                };

                return num;
            };


onmessage = ({data: n}) => { const start = performance.now(); const value = factorial(n); postMessage({n, value, milliseconds: performance.now() - start}); };

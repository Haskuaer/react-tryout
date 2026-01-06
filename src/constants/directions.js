const DIRECTIONS = (k, n) => [
    { step: 1, edge: i => i % k !== k-1 }, // ➡️
    { step: -1, edge: i => i % k !== 0 }, // ⬅️
    { step: k, edge: i => i + k < n }, // ⬇️
    { step: -k, edge: i => i - k >= 0 }, // ⬆️
    { step: k+1, edge: i => i % k !== k-1 && i+k+1 < n }, // ↘️
    { step: k-1, edge: i => i % k !== 0 && i+k-1 < n }, // ↙️
    { step: -k+1, edge: i => i % k !== k-1 && i-k+1 >= 0 }, // ↗️
    { step: -k-1, edge: i => i % k !== 0 && i-k-1 >= 0 } // ↖️
];

export default DIRECTIONS;
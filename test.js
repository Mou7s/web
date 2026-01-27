class minHeap {
  constructor() {
    this.a = [];
  }
  size() {
    return this.a.length;
  }
  push(item) {
    const a = this.a;
    a.push(item);
    this._up(a.length - 1);
  }
  pop() {
    const a = this.a;
    if (a.length === 0) return undefined;
    const top = a[0];
    const last = a.pop();
    if (a.length > 0) {
      a[0] = last;
      this._down(0);
    }
    return top;
  }
  _up(i) {
    const a = this.a;
    const item = a[i];
    while (i > 0) {
      const p = (i - 1) >> 1;
      const parent = a[p];
      if (item[0] >= parent[0]) break;
      a[i] = parent;
      i = p;
    }
    a[i] = item;
  }
  _down(i) {
    const a = this.a;
    const n = a.length;
    const item = a[i];
    while (true) {
      let left = (i << 1) + 1;
      let right = left + 1;
      let smallest = i;
      if (left < n && a[left][0] < item[0]) {
        smallest = left;
      }
      if (right < n && a[right][0] < a[smallest][0]) {
        smallest = right;
      }
      if (smallest === i) break;
      a[i] = a[smallest];
      i = smallest;
    }
    a[i] = item;
  }
}

const minCost = (n, edges) => {
  const g = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    g[u].push([v, w]);
    g[v].push([u, 2 * w]);
  }

  const INF = Number.MAX_SAFE_INTEGER;
  const dist = new Array(n).fill(INF);
  dist[0] = 0;

  const pq = new minHeap();
  pq.push([0, 0]); // [cost, node]

  while (pq.size()) {
    const [d, u] = pq.pop();
    if (d !== dist[u]) continue;
    if (u === n - 1) return d;

    for (const [v, w] of g[u]) {
      const nd = d + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.push([nd, v]);
      }
    }
  }
  return -1;
};

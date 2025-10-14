// Q1 (sliding window):
function longestSubstring(s){
  let left=0, start=0, best=0;
  const last=new Map();
  for (let right=0; right<s.length; right++){
    const ch=s[right];
    if (last.has(ch) && last.get(ch) >= left)
        left = last.get(ch) + 1;
    last.set(ch, right);
    if (right-left+1 > best){
        best = right-left+1; start = left;
    }
  }
  return s.slice(start, start+best);
}

// Q2 (use for...of):
const multiplyArr = arr => {
    if(!arr.length)
        return 0;
    let p=1;
    for (const n of arr)
        p*=n;
    return p; 
};

// Q3 (for...in + numeric sort):
function valuesSorted(obj){
    const vals=[];
    for (const k in obj)
        vals.push(obj[k]);
    return vals.sort((a,b)=>a-b);
}

// Q4 (median even/odd):
function findMedian(arr){ 
    if(!arr.length)
        return 0;
    const a=[...arr].sort((x,y)=>x-y);
    const mid=Math.floor(a.length/2);
    return a.length%2 ? a[mid] : (a[mid-1]+a[mid])/2;
}

// Q5 (proper primes):
const isPrime = n=>{ 
    if(n<=1) return false; if(n<=3) return true;
    if(n%2===0||n%3===0) 
        return false; for(let i=5;i*i<=n;i+=6)
    if(n%i===0||n%(i+2)===0) 
        return false; return true;
};
const primesOnly = arr => arr.filter(isPrime);

// Q6 (normalize n):
const rotateArray=(arr,n)=>{ 
    const len=arr.length;
    if(!len)
        return [];
    n=((n%len)+len)%len;
    return arr.slice(-n).concat(arr.slice(0,-n)); 
};

  // Q7 (expand-around-center):
function longestPalindrome(s){
    if(s.length<2)
        return s; let st=0,en=0;
    const ex=(l,r)=>{ while(l>=0&&r<s.length&&s[l]===s[r]){l--;r++;} return [l+1,r-1]; };
    for(let i=0;i<s.length;i++){
        let [l1,r1]=ex(i,i), [l2,r2]=ex(i,i+1);
        if(r1-l1>en-st){
            st=l1;en=r1;
        } 
        if(r2-l2>en-st){
            st=l2;en=r2;
        }
    }
    return s.slice(st,en+1);
}
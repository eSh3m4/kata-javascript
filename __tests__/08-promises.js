/*
  You can find all the answers on the MDN:
  https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/Promise
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses
*/

'use strict';
describe('about promises', () => {
  it('1-Promises are more than an ordinary function', () => {
    const myPromise = new Promise(() => {});
    const myFunction = () => {};
    const myAsyncFunction = () => {
      return new Promise(() => {});
    };

    expect(typeof myPromise).toBe( _ );
    expect(typeof myFunction).toBe( _ );
    expect(typeof myAsyncFunction).toBe( _ );
  });

  it('2-can be fulfilled', () => {
    const myPromise = new Promise((resolve, reject) => {
      let result = true;
      if (result) {
        resolve('ok');
      } else {
        reject('ko');
      }
    });

    return myPromise.then(value => {
      expect(value).toBe( _ );
    });
  });

  it('3-can be rejected', () => {
    const myPromise = new Promise((resolve, reject) => {
      let result = false;
      if (result) {
        resolve('ok');
      } else {
        reject('ko');
      }
    });

    return myPromise.then().catch(error => {
      expect(error).toBe( _ );
    });
  });

  it('4-Promises are usually convenient wrappers to handle asynchronous operations', () => {
    const myAsyncFunction = (message, time) => new Promise((resolve, reject) => {
      let result, decision = true;
      if (decision) {
        result = setTimeout(resolve, time, message);
      } else {
        reject(message);
      }
      return result;
    });

    return myAsyncFunction('A', 20).then(value => {
      expect(value).toBe( _ );
    });
  });

  it('5-can be in a competition', () => {
    const myPromiseA = new Promise(resolve => setTimeout(resolve, 20, 'A'));
    const myPromiseB = new Promise(resolve => setTimeout(resolve, 10, 'B'));
    const myPromiseC = new Promise(resolve => setTimeout(resolve, 30, 'C'));

    return Promise.race([myPromiseA, myPromiseB, myPromiseC]).then(value => {
      expect(value).toBe( _ );
    });
  });

  it('6-can be executed in parallel until all are resolved', () => {
    const myPromiseA = new Promise(resolve => setTimeout(resolve, 20, 'A'));
    const myPromiseB = new Promise(resolve => setTimeout(resolve, 10, 'B'));
    const myPromiseC = new Promise(resolve => setTimeout(resolve, 30, 'C'));

    return Promise.all([myPromiseA, myPromiseB, myPromiseC]).then(value => {
      expect(value).toEqual( _ );
    });
  });

  it('7-can be chained sequentially', () => {
    const myPromiseA = new Promise(resolve => setTimeout(resolve, 20, 'A'));
    const myPromiseB = new Promise(resolve => setTimeout(resolve, 10, 'B'));
    const myPromiseC = new Promise(reject => setTimeout(reject, 30, 'C'));

    return myPromiseA.then(value => {
      expect(value).toBe( _ );
      return myPromiseB;
    }).then(value => {
      expect(value).toBe( _ );
      return myPromiseC;
    }).catch(error => {
      expect(error).toBe( _ );
    });
  });

  it('8-can be chained sequentially using accumulators', () => {
    const myPromiseA = new Promise(resolve => setTimeout(resolve, 20, 'A'));
    const myPromiseB = new Promise(resolve => setTimeout(resolve, 10, 'B'));
    const myPromiseC = new Promise(resolve => setTimeout(resolve, 30, 'C'));

    return [myPromiseA, myPromiseB, myPromiseC].reduce((acc, fun) => acc.then(() => fun), Promise.resolve()).then(value => {
      expect(value).toBe( _ );
    });
  });

  it('9-can be chained sequentially using async / await', async () => {
    const myPromiseA = new Promise(resolve => setTimeout(resolve, 20, 'A'));
    const myPromiseB = new Promise(resolve => setTimeout(resolve, 10, 'B'));
    const myPromiseC = new Promise(resolve => setTimeout(resolve, 30, 'C'));

    expect([await myPromiseA.then(), await myPromiseB.then(), await myPromiseC.then(), 'D']).toEqual( _ );
  });

  it('10-can be bend space and time, be aware of the timings', (done) => {
    let result = [];

    const myPromise = new Promise(resolve => {
      result.push('A');
      setTimeout(resolve, 30, 'B');
    });

    myPromise.then((value) => {
      result.push(value);
    });

    result.push('C');
    setTimeout(() => result.push('D'), 10);

    setTimeout(() => {
      result.push('E');
      expect(result).toEqual( _ );
      done();
    }, 100);
  });
});
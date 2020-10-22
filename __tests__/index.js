const { z1, z2, z3, z4 } = require('../index');

describe('CTRL4', () => {
  describe('z1', () => {
    /*
    * Написать функцию которая принимает некий коэффицент
    * и генерирует новую функцию, которая принимает некое число
    * и возвращает его умноженным на этот коэфицент
    * точность до 1/10000
    * */

    describe('k=1', () => {
      const fn = z1(1);

      it('num = 1',() => {
        expect(fn(1)).toEqual(1);
      });

      it('num = 5',() => {
        expect(fn(5)).toEqual(5);
      });

      it('num = 0.5',() => {
        expect(fn(.5)).toEqual(.5);
      });
    });

    describe('k=0.5', () => {
      const fn = z1(.5);

      it('num = 1',() => {
        expect(fn(1)).toEqual(.5);
      });

      it('num = 5',() => {
        expect(fn(5)).toEqual(2.5);
      });

      it('num = 0.5',() => {
        expect(fn(.5)).toEqual(.25);
      });
    });

    describe('k=2', () => {
      const fn = z1(2);

      it('num = 1',() => {
        expect(fn(1)).toEqual(2);
      });

      it('num = 5',() => {
        expect(fn(5)).toEqual(10);
      });

      it('num = 0.5',() => {
        expect(fn(.5)).toEqual(1);
      });
    });

    it('k=100 n=0.0532', () => {
      const fn = z1(100);

      expect(fn(.0532)).toEqual(5.32);
    });

    it('k=0.1 n=0.2', () => {
      const fn = z1(.1);

      expect(fn(.2)).toEqual(.02);
    });
  });
  describe('z2', () => {
    /*
    * Написать функцию которая принимает некий object
    * и генерирует новую функцию, которая принимает callback
    * и вызывает его с контекстом object
    * */

      function fn1() { return this.x - this.y; }
      function fn2() { return this.x + this.y; }
      function fn3() { return this.x * this.y; }
      function fn4() { return this.x / this.y; }

      describe('test1', () => {
        const fn = z2({x:1, y:1});

        it('should return 0', () =>
          expect(fn(fn1)).toBe(0)
        )

        it('should return 2', () =>
          expect(fn(fn2)).toBe(2)
        )

        it('should return 1', () =>
          expect(fn(fn3)).toBe(1)
        )

        it('should return 1', () =>
          expect(fn(fn4)).toBe(1)
        )
      })
  });
  describe('z3', () => {
    const test = [];
    test.push = () => 'dont play with me';
    const test1 = [];
    z3(test, 'bla');
    test1.push('bla');
    it('1', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('2', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('3', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('4', () => expect(test.toString()).toEqual(test1.toString()));
    test.shift();
    test1.shift();
    test.pop();
    test1.pop();
    z3(test, 'bla');
    test1.push('bla');
    it('4', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('5', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('6', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('7', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('8', () => expect(test.toString()).toEqual(test1.toString()));
    z3(test, 'bla');
    test1.push('bla');
    it('9', () => expect(test.toString()).toEqual(test1.toString()));
  });
  describe('z4', () => {
    const arr = [1,2 ,3 ,4 ,5 ,6];
    arr.find = () => 'dont play with me';

    it('1', () => {
      const find = el => el === 4;
      expect(z4(arr, find)).toBe(4);
    });

    it('2', () => {
      const find = el => el === '4';
      expect(z4(arr, find)).toBe(undefined);
    });

    it('3', () => {
      const find = function(el) { return el === this.el };
      const context = {el: 4};
      expect(z4(arr, find, context)).toBe(4);
    });

  })
});

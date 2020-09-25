/*이터러블로 컬렉션을 순회할 수 있게 되면 펼침 연산자, 배열 메서드를 비롯해 데이터 변환을 위한 여러가지 다른 도구에도 접근할 수 있다. 
이터러블은 우리가 데이터를 다룰 때 개별 데이터에 접근할 수 있도록 해서 좀 더 많은 유연성을 제공한다.
객체에는 내장된 이터레이터가 없다. 객체의 일부를 먼저 배열로 변환해야 한다. 그러나 이는 객체의 구조와 이터러블의 유연성이 동시에 요구될 때, 큰 문제가 될 수 있다.
*/

/*복잡한 데이터 구조를 간단하 배열처럼 쉽게 다루는 기법을 살펴보자.
제네레이터라는 함수를 이용하면 데이터를 한 번에 하나씩 반환할 수 있다. 이를 통해 깊게 중첩된 객체를 단순한 구조로 변환하는 방법을 알아보자.
제네레이터의 사용 사례 중 가장 좋은건 객체를 이터러블로 변환하는 것이다. 
*/

/*제네레이터란 함수가 호출되었을 때, 그 즉시 끝까지 실행하지 않고 중간에 빠져나갔다가 다시 돌아올 수 있는 함수다.
제네레이터는 함수 몸체의 실행을 즉시 끝내지 않는 하나의 함수다.즉, 제네레이터는 다음 단계 전까지 기본적으로 일시 정지하는 중단점이 있는 함수다.
*/

class FamilyTree {
    constructor() {
      this.family = {
        name: 'Doris',
        child: {
          name: 'Martha',
          child: {
            name: 'Dyan',
            child: {
              name: 'Bea',
            },
          },
        },
      };
    }
    * [Symbol.iterator]() {
      let node = this.family;
      while (node) {
        yield node.name;
        node = node.child;
      }
    }
  }
  
  const family = new FamilyTree();
  [...family];
  // ['Doris', 'Martha',..]


  class FamilyTree {
    constructor() {
      this.family = {
        name: 'Doris',
        child: {
          name: 'Martha',
          child: {
            name: 'Dyan',
            child: {
              name: 'Bea',
            },
          },
        },
      };
    }
    getMembers() {
      const family = [];
      let node = this.family;
      while (node) {
        family.push(node.name);
        node = node.child;
      }
      return family;
    }
  }
  
  const family = new FamilyTree();
  family.getMembers();
  // ['Doris', 'Martha', 'Dyan', 'Bea'];
  
  export default FamilyTree;

//제너릭(Generics) -  타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법

//멀 넣을지 모르겠을때
/*function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });*/

function merge<T1, T2>(a: T1, b: T2): any {
	return {
		...a,
		...b,
	};
}

const merged = merge({ foo: 1 }, { bar: 2 });

import { sumar, restar, multiplicar, dividir, devuelveEmail, devuelveObjeto, Rectangulo, devuelveArrayStr, devuelveArrayNum, devuelveArrayObj, devuelveTrue, devuelveFalse, devuelveNull, devuelveUndefined } from "./index";

// Aquí vamos a crear nuestros casos de prueba
// describe, test (it)
// Assertions "expect"

describe('Assertions básicos en números', () => {
    test('La suma funciona', () => {
        const resultado = sumar(2, 3);
        expect(resultado).toBe(5);
        expect(resultado).toEqual(5);
    })
    test('La suma no resta', () => {
        const resultado = sumar(2, 3);
        expect(resultado).not.toBe(-1);
        expect(resultado).not.toEqual(-1);
    })
    it('La resta funciona', () => {
        const resultado = restar(2, 3);
        expect(resultado).toBe(-1);
        expect(resultado).toEqual(-1);
    })
    test('La multiplicación funciona', () => {
        const resultado = multiplicar(2, 5);
        expect(resultado).toBe(10);
        expect(resultado).toEqual(10);
    })
    it('La división funciona', () => {
        const resultado = dividir(4, 2);
        expect(resultado).toBe(2);
        expect(resultado).toEqual(2);
    })
    it('Probamos el >', () => {
        const resultado = dividir(100, 20);
        expect(resultado).toBeGreaterThan(0);
        expect(resultado).toBeGreaterThanOrEqual(5);
    })
    it('Probamos el <', () => {
        const resultado = multiplicar(5, 8);
        expect(resultado).toBeLessThanOrEqual(40);
        expect(resultado).toBeLessThan(41);
    })


});

describe('Assertions básicos en los strings', () => {
    it('El campo debe tener un email', () => {
        const email = devuelveEmail();
        expect(email).toMatch(/[a-zA-Z].[a-zA-Z]\.com/);
        expect(email).toMatch('jats@email.com');

    });

});

describe('Assertions básicos con booleanos', () => {
    it('Probar que algo es true', () => {
        const r = devuelveTrue();
        expect(r).toBeTruthy();
    });
    it('Probar que algo es false', () => {
        const r = devuelveFalse();
        expect(r).toBeFalsy();
    });
    it('Probar que algo es null', () => {
        const r = devuelveNull();
        expect(r).toBeNull();
    });
    it('Probar que algo es defined', () => {
        const r = 5;
        expect(r).toBeDefined();
    });
    it('Probar que algo es undefined', () => {
        const r = devuelveUndefined();
        expect(r).toBeUndefined()
    });
});

describe('Assertion básicos en Objetos', () => {
    const rectangulo = devuelveObjeto();
    it('Dos Objetos son iguales', () => {
        const objA = devuelveObjeto();
        const objB = devuelveObjeto();
        // expect(objA).toBe(objB); // toBe no se utiliza
        expect(objA).toEqual(objB);
        expect(objA).toStrictEqual(objB);
    });
    it('El objeto DEBE tener una propiedad ', () => {
        expect(rectangulo).toHaveProperty('ancho');
        expect(rectangulo).toHaveProperty('alto');
    });
    it('La propiedad "ancho" del rectángulo siempre debe ser 10', () => {
        expect(rectangulo).toHaveProperty('ancho', 10);
    });
    it('El objeto resctA debe ser una Clase restangulo', () => {
        // const rectA = { ancho: 10, alto: 11 };
        const rectA = new Rectangulo(10, 11);
        expect(rectA).toBeInstanceOf(Rectangulo);
    });


});

describe('Assertions básicos en Arrays', () => {
    it('Array contine Cartuchera', () => {
        const ar = devuelveArrayStr();
        expect(ar).toContain('Cartuchera');
    });
    it('Array contiene 5', () => {
        const ar = devuelveArrayNum();
        expect(ar).toContain(5);
    });
    it('Array contine id:5', () => {
        const ar = devuelveArrayObj();
        // expect(ar).toContain({ id: 5 }); //-> no utilizar toContain
        expect(ar).toContainEqual({ id: 5 });
    });

});

describe('Assertions con funciones mock', () => {
    it('Que la función haya sido llamada', () => {
        const mockFn = jest.fn(() => 5);
        const res = mockFn();
        expect(mockFn).toHaveBeenCalled();
    });
    it('Que la función haya sido llamada n veces', () => {
        const mockFn = jest.fn(() => 5);
        const res = mockFn();
        const res2 = mockFn();
        const res3 = mockFn();
        expect(mockFn).toHaveBeenCalledTimes(3);
    });
    it('Que la función haya sido llamada con un parámetro', () => {
        const mockFn = jest.fn(() => 5);
        const res = mockFn('prueba');
        expect(mockFn).toHaveBeenCalledWith('prueba');
    });
});





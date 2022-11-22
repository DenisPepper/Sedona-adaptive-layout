import { buildNames } from 'services/build-css-class-names/build-css-class-names';

describe('buildNames test', () => {
    test('with argument -names', () => {
        const expected = 'name1 name2';
        const actual = buildNames(['name1', 'name2', '', null, undefined]);
        expect(actual).toBe(expected);
    });

    test('with argument -mods', () => {
        const expected = 'name1 name5';
        const actual = buildNames([], {
            name1: true,
            name2: undefined,
            name3: false,
            name4: null,
            name5: true,
        });
        expect(actual).toBe(expected);
    });

    test('with arguments -names -mods', () => {
        const expected = 'name1 name2 name4 name5';
        const actual = buildNames([undefined, 'name1', null, 'name2'], {
            name3: false,
            name4: true,
            name5: true,
        });
        expect(actual).toBe(expected);
    });

    test('without arguments', () => {
        const expected = '';
        const actual = buildNames();
        expect(actual).toBe(expected);
    });
});
